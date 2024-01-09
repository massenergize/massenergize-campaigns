// import { useReducer, useState } from "react";
// import Button from "./Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion as m } from "framer-motion";
import React, { useReducer, useState } from "react";
// import { comments } from "../../utils/Constants";
import { Col, Container, Row, Button as BTN } from "react-bootstrap";
import Input from "./Input";
import { Dropdown, RadioGroup } from "@kehillahglobal/ui";
import FileUploader from "./FileUploader";
import useSWR from "swr";
import {
  createCampaignTestimonial,
  getUsers,
} from "../../requests/campaign-requests";
import Button from "../../components/admin-components/Button";
import MERichText from "./RichText";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";

const Testimonials = ({ campaign, mutateData }) => {
  const techs = campaign?.technologies;
  const communities = campaign?.communities;
  let testimonials = [...techs?.map((tech) => tech?.testimonials)].flat();
  testimonials = [...testimonials, ...campaign?.my_testimonials];

  const { blow, pop } = useBubblyBalloons();
  const {
    data: users,
    error,
    isLoading,
  } = useSWR("users.listForCommunityAdmin", getUsers({ no_pagination: true }));

  const timeAgo = (date) => {
    const currentDate = new Date();
    const inputDate = new Date(date);

    const diffInSeconds = Math.floor((currentDate - inputDate) / 1000);

    if (diffInSeconds < 60) {
      return "Just now";
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minutes ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hours ago`;
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} days ago`;
    } else if (diffInSeconds < 2592000) {
      const weeks = Math.floor(diffInSeconds / 604800);
      return `${weeks} weeks ago`;
    } else {
      return "More than a month ago";
    }
  };

  const [readMore, setReadMore] = useState();
  const [openCreateForm, setOpenCreateForm] = useState(false);
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

  const handleFieldChange = (field, value) => {
    dispatch({ type: "SET_FIELD_VALUE", field, value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
     const toSend = {
		...formData,
		is_published: formData?.is_published ? true : false,
	 }
      const createdTestimonial = await createCampaignTestimonial(formData);
      if (createdTestimonial) {
        mutateData();
    	setLoading(false);
        setOpenCreateForm(false);
        blow({
          title: "Success",
          message: "Testimonial created successfully",
          type: "success",
          duration: 5000,
        });
      }
    } catch (e) {
    	setLoading(false);
      pop({
        title: "Error",
        message: "An error occured while creating testimonial",
        type: "error",
        duration: 5000,
      });
    }
  };

  // {, body, , , , }

  return (
    <m.div
      initial={{ y: "15%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <m.div className="mb-4 pb-4">
        {openCreateForm ? (
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
                      handleFieldChange(
                        "community_id",
                        selectedItem?.community?.id
                      );
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
                      handleFieldChange(
                        "campaign_technology_id",
                        selected?.campaign_technology_id
                      );
                    }}
                  />
                </Col>
              </Row>
              <Row className="my-4 pt-4">
                <Col>
                  <Dropdown
                    placeholder="Select the User "
                    data={users}
                    valueExtractor={(item) => item?.id}
                    labelExtractor={(item) =>
                      `${item?.full_name} (${item?.email})`
                    }
                    onItemSelected={(selectedItem, allSelected) => {
                      handleFieldChange("user_id", selectedItem?.id);
                    }}
                    onSearch={(searchText) => {
                      return users.filter((user) => {
                        return (
                          user?.full_name
                            ?.toLowerCase()
                            .includes(searchText.toLowerCase()) ||
                          user?.email
                            ?.toLowerCase()
                            .includes(searchText.toLowerCase())
                        );
                      });
                    }}
                  />
                </Col>
              </Row>
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
                  <RadioGroup
                    data={[
                      {value: true,name: "Published ?"},
                    ]}
                    labelExtractor={(item)=>item?.name}
                    onItemSelected={(selectedItem, allSelected) => {handleFieldChange("is_published", selectedItem)}}
                    valueExtractor={(item)=>item?.value}
                  />
                </Col>
              </Row>
              <Row className="py-4">
                <Col>
                  <div>
                    <Button
                      text="Create Testimonial"
                      loading={loading}
                      disabled={loading}
                      onSubmit={handleClick}
                      rounded={false}
                    />
                    <BTN
                      style={{ marginLeft: 10 }}
                      onClick={() => setOpenCreateForm(false)}
                      variant="danger"
                    >
                      <span>Cancel</span>
                    </BTN>
                  </div>
                </Col>
              </Row>
            </form>
          </Container>
        ) : (
          <div>
            <BTN
              onClick={() => {
                setOpenCreateForm(true);
              }}
              rounded={false}
              icon={faPlus}
            >
              <span>Create New Testimonial</span>
            </BTN>
          </div>
        )}
      </m.div>

      <h3 className="mb-4">Testimonials</h3>

      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}
      >
        {testimonials?.map((testimonial) => {
          return (
            <div
            //   style={{
            //     maxWidth: testimonial?.id === readMore ? "100%" : "500px",
            //     transitionProperty: "all",
            //     transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            //     transitionDuration: "300ms",
            //   }}
              className="border-no-dash"
            >
              <h5 style={{ color: "green", textTransform: "uppercase" }}>
                {testimonial?.user?.full_name}
              </h5>
              <p
                style={{ color: "gray", fontStyle: "italic", margin: "8px 0" }}
              >
                Created : <span> {timeAgo(testimonial?.created_at)} </span>{" "}
              </p>
              <h6> {testimonial?.title}</h6>

              <div
                className={"testimonial-read-more-toggle"}
                onClick={() => {
                  setReadMore(
                    readMore === testimonial?.id ? null : testimonial?.id
                  );
                }}
              >
                <p style={{ fontSize: "14px", marginBottom: "20px" }}>
                  {testimonial?.body?.length > 300
                    ? testimonial?.body?.slice(0, 300)
                    : testimonial?.body}{" "}
                  <span style={{ color: "green", cursor: "pointer" }}>
                    {testimonial?.body?.length > 300 &&
                      readMore !== testimonial?.id &&
                      "... Read More"}
                  </span>
                </p>
              </div>
              <div>
                <img
                  src={testimonial?.image?.url}
                  alt=""
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </m.div>
  );
};

export default Testimonials;
