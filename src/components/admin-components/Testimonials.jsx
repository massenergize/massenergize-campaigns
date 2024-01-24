import React, { useReducer, useState } from "react";
import { Col, Container, Row, Button as BTN } from "react-bootstrap";
import Input from "./Input";
import { Dropdown } from "@kehillahglobal/ui";
import FileUploader from "./FileUploader";
import useSWR from "swr";
import { createCampaignTestimonial, getUsers } from "../../requests/campaign-requests";
import Button from "../../components/admin-components/Button";
import MERichText from "./RichText";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import Form from "react-bootstrap/Form";
import "./sideNav.css";
import { useSelector } from "react-redux";

const USER_TYPES = {
  MYSELF: "Myself",
  ME_USER: "MassEnergize user",
  OTHER: "Other",
};

const Testimonials = ({ campaign, onModalClose, startOfPage }) => {
  const techs = campaign?.technologies;
  const communities = campaign?.communities;
  // let testimonials = [...techs?.map((tech) => tech?.testimonials)].flat();

  const { blow, pop } = useBubblyBalloons();

  const { data: users } = useSWR("users.listForCommunityAdmin", getUsers({ no_pagination: true }));

  const loggedInUser = useSelector((state) => state.authAdmin);

  const [loading, setLoading] = useState(false);

  const initialState = {
    campaign_technology_id: 1,
    body: "",
    title: "",
    image: "",
    community_id: "",
    user_id: "",
    is_published: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_FIELD_VALUE":
        return { ...state, [action.field]: action.value };
      default:
        throw new Error(`Unsupported action type: ${action.type}`);
    }
  };

  const [formData, dispatch] = useReducer(reducer, initialState);
  const [userType, setUserType] = useState("");
  const [viewOpt, setViewOpt] = useState();

  const handleFieldChange = (field, value) => {
    dispatch({ type: "SET_FIELD_VALUE", field, value });
  };

  const handleClick = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const toSend = {
        ...formData,
        is_published: formData?.is_published ? true : false,
      };
      if (userType === USER_TYPES.MYSELF) {
        toSend.user_id = loggedInUser?.id;
      }

      const createdTestimonial = await createCampaignTestimonial(toSend);

      if (createdTestimonial) {
        setLoading(false);
        blow({
          title: "Success",
          message: "Testimonial created successfully",
          type: "success",
          duration: 5000,
        });
        return;
      }
    } catch (err) {
      setLoading(false);
      pop({
        title: "Error",
        message: "An error occured while creating testimonial",
        type: "error",
        duration: 5000,
      });
    }
  };

  return (
    <div>
      <div className="mb-4 pb-4">
        <Container className="border-dashed">
          <form>
            <Row className="py-4">
              <Col>
                <Input
                  label="Title"
                  placeholder="Enter name of partner here..."
                  required={true}
                  type="textbox"
                  onChange={(val) => {
                    handleFieldChange("title", val);
                  }}
                />
              </Col>
            </Row>
            <Row className="my-4">
              <Col>
                <Dropdown
                  placeholder="Select the Community "
                  data={communities}
                  valueExtractor={(item) => item?.community?.id}
                  labelExtractor={(item) => item?.community?.name}
                  onItemSelected={(selectedItem, allSelected) => {
                    handleFieldChange("community_id", selectedItem?.community?.id);
                  }}
                />
              </Col>
            </Row>
            <Row className="my-4 pt-4">
              <Col>
                <Dropdown
                  placeholder="Select the Technology "
                  data={techs}
                  valueExtractor={(item) => item?.campaign_technology_id}
                  labelExtractor={(item) => item?.name}
                  onItemSelected={(selected) => {
                    handleFieldChange("campaign_technology_id", selected?.campaign_technology_id);
                  }}
                />
              </Col>
            </Row>
            <Row className="my-4 pt-4">
              <Col>
                <Dropdown
                  placeholder="Who is this testimonial for ?"
                  data={Object.values(USER_TYPES)}
                  onItemSelected={(selected) => {
                    setUserType(selected);
                  }}
                />
              </Col>
            </Row>
            {userType === USER_TYPES.ME_USER ? (
              <Row className="my-4 pt-4">
                <Col>
                  <Dropdown
                    placeholder="Select the User "
                    data={users}
                    valueExtractor={(item) => item?.id}
                    labelExtractor={(item) => `${item?.full_name} (${item?.email})`}
                    onItemSelected={(selectedItem, allSelected) => {
                      handleFieldChange("user_id", selectedItem?.id);
                    }}
                    onSearch={(searchText) => {
                      return users.filter((user) => {
                        return (
                          user?.full_name?.toLowerCase().includes(searchText.toLowerCase()) ||
                          user?.email?.toLowerCase().includes(searchText.toLowerCase())
                        );
                      });
                    }}
                  />
                </Col>
              </Row>
            ) : userType === USER_TYPES.OTHER ? (
              <>
                <Row className="my-4 pt-4">
                  <Col>
                    <Input
                      label="Name"
                      placeholder="Enter the name of the person here.."
                      required={true}
                      type="textbox"
                      onChange={(val) => {
                        handleFieldChange("name", val);
                      }}
                    />
                  </Col>
                </Row>
                <Row className="my-4 pt-4">
                  <Col>
                    <Input
                      label="Email"
                      placeholder="Enter the email of the person here.."
                      required={true}
                      type="textbox"
                      onChange={(val) => {
                        handleFieldChange("email", val);
                      }}
                    />
                  </Col>
                </Row>
              </>
            ) : null}

            <Row className="py-4">
              <Col>
                <MERichText
                  label="Body"
                  placeholder="Start typing here...."
                  required={true}
                  onEditorChange={(val, _) => {
                    handleFieldChange("body", val);
                  }}
                  value={formData?.body}
                />
              </Col>
            </Row>
            <Row className="py-4">
              <Col>
                <FileUploader
                  required={false}
                  id="testimonial_image"
                  text="Add an image for the testimonial"
                  onChange={(val) => {
                    handleFieldChange("image", val);
                  }}
                  value={formData?.image}
                  defaultValue={formData?.image}
                />
              </Col>
            </Row>
            <Row className="py-4">
              <Col>
                <Form.Check
                  type="switch"
                  id="live-checkbox"
                  label="Go Live ?"
                  onChange={(e) => handleFieldChange("is_published", e.target.checked)}
                />
              </Col>
            </Row>
            <Row className="py-4">
              <Col>
                <div className="flex items-center gap-4">
                  <Button
                    text="Create Testimonial"
                    loading={loading}
                    disabled={loading}
                    onSubmit={handleClick}
                    rounded={false}
                  />
                  <BTN
                    variant="danger"
                    disabled={loading}
                    onClick={() => {
                      onModalClose();
                      if (startOfPage.current) {
                        startOfPage.current.scrollIntoView({ behavior: "smooth", block: "start" });
                      } else {
                        console.error("Target element not found");
                      }
                    }}
                  >
                    Cancel
                  </BTN>
                </div>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Testimonials;
