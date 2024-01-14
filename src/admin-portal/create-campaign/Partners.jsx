import React, { useReducer, useRef, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "../../components/admin-components/Button";
import Dropdown from "../../components/admin-components/Dropdown";
import Checkbox from "../../components/admin-components/Checkbox";
import Chip from "../../components/admin-components/Chip";
import Input from "../../components/admin-components/Input";
import FileUploader from "../../components/admin-components/FileUploader";

const Partners = ({ campaignDetails, setCampaignDetails, setStep, lists }) => {
  const scrollRef = useRef(null);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRemove = (data) => {
    console.log(data);
  };

  const initialState = {
    name: "",
    logo: "",
    phone_number: "",
    email: "",
    website: "",
  };

  const [partners, setPartners] = useState({
    campaign_id: "",
    partner_id: [],
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };


  const {
    allPartners,
  } = lists;

  return (
    <>
    <Container>
        <Row className="my-4">
          <Col>
            <Checkbox
              label="Disable the Partner's section"
              id="Disable the Partner's section"
              size="big"
              checked={campaignDetails?.disable_partners_section}
              value={campaignDetails?.disable_partners_section}
              labelOnRight={false}
            />
          </Col>
        </Row>
        <Row className="py-4">
          <Col>
            <p>
              Pick out the actions you want to show up in this campaign. Or{" "}
              <span onClick={() => {
                  handleScrollTo("create-new-partner");
                }
              } className="theme-color text-link">
								Create a new partner
							</span>
            </p>
          </Col>
        </Row>
        <Row className="py-4">
          <Col>
            <div className="smallimages-container-wrapper">
              {formData?.coaches?.map((coach) => {
                return (
                  <div className="" key={coach?.id} onClick={handleRemove}>
                    <Chip text={coach?.name} icon={coach?.icon}/>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Dropdown
              displayTextToggle="Select Partners for this campaign"
              data={(allPartners?.data || []).map((partner) => {
                return {
                  ...partner,
                  value: partner.name || "",
                  label: partner.name || "",
                };
              })}
              valueExtractor={(item) => item}
              labelExtractor={(item) => item?.name}
              multiple={true}
              onItemSelect={(selectedItem, allSelected) => {
                console.log(allSelected);
                setPartners({ ...partners, partner_id: allSelected });
              }}
            />
          </Col>
        </Row>
        <Row className="py-4 mt-4 justify-content-end">
          <Col>
            <Button
              text="Save Changes"
              onSubmit={handleSubmit}
              rounded={false}
            />
          </Col>
        </Row>
        {/* </form> */}
      </Container>

      <Container>
        <form id="create-new-partner" ref={scrollRef}>
          <Row className="pt-4 mt-4">
            <Col className="pt-4 mt-4">
              <h5 className="theme-color">Create A New Partner </h5>
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <Input
                label="Name"
                placeholder="Enter name of partner here..."
                required={true}
                type="textbox"
                onChange={(val) => {
                  handleFieldChange("name", val);
                }}
              />
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <Input
                label="Email"
                placeholder="Enter email of partner here..."
                required={true}
                type="email"
                onChange={(val) => {
                  handleFieldChange("email", val);
                }}
              />
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <Input
                label="Phone Number "
                placeholder="Enter contact of partner here..."
                required={false}
                type="textbox"
                onChange={(val) => {
                  handleFieldChange("phone_number", val);
                }}
              />
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <Input
                label="Website"
                placeholder="Enter website of partner here..."
                required={false}
                type="textbox"
                onChange={(val) => {
                  handleFieldChange("website", val);
                }}
              />
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <FileUploader
                required={false}
                id="partner_logo"
                text="Upload a logo"
                valueExtractor={(val) => {
                  handleFieldChange("logo", val);
                }}
              />
            </Col>
          </Row>
          <Row className="py-4 mt-4 justify-content-end">
            <Col>
              <Button text="Submit" onSubmit={handleSubmit} rounded={false}/>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default Partners;
