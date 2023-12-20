import React, { useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../components/admin-components/Input";
import FileUploader from "../../components/admin-components/FileUploader";
import "../adminStyles.css";
import { ProgressButton } from "../../components/progress-button/progress-button";
import dayjs from "dayjs";
import { updateCampaign } from "../../requests/campaign-requests";
import { useBubblyBalloons } from "../../components/bubbly-balloon/use-bubbly-balloons";

const Information = ({ campaignDetails, setCampaignDetails, setStep, lists }) => {
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialState = {
    title: "",
    primary_logo: "",
    secondary_logo: "",
    campaign_image: "",
    tagline: "",
    start_date: "",
    end_date: "",
    description: "",
    campaign_account_id: "583c96c5-7fb4-488f-ac54-2558252ae535",
    is_template: false,
    full_name: "",
    email: "",
    phone_number: "",
    key_contact_image: "",
  };
  const { blow, pop } = useBubblyBalloons();

  const reducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
      case "SET_FIELD_VALUE":
        return { ...state, [payload.field]: payload.value };
      default:
        throw new Error(`Unsupported action type: ${type}`);
    }
  };

  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleFieldChange = (field, value) => {
    setCampaignDetails(field, value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      let response = await updateCampaign({
        ...campaignDetails,
        title: campaignDetails.title,
        tagline: campaignDetails.tagline,
        description: campaignDetails.description,
        start_date: dayjs(campaignDetails.start_date).format("YYYY-MM-DD"),
        end_date: dayjs(campaignDetails.end_date).format("YYYY-MM-DD"),
      });

      if (response.success) {
        setLoading(false);

        const balloon = blow({
          title: "Success",
          message: "Campaign information saved successfully",
          type: "success",
          duration: 5000,
        });
      }

    } catch (e) {
      setLoading(false);
      setShowError(true);
    }
  };

  return (
    <Container>
      <form>
        <Row className="mt-0">
          <Col>
            <Input
              id="title"
              name="title"
              label="Campaign Title"
              placeholder="Enter a Title for this campaign ..."
              required={true}
              type="textbox"
              value={campaignDetails?.title}
              onChange={(val) => {
                handleFieldChange("title", val);
              }}
            />
          </Col>
        </Row>
        <Row className="py-4">
          <Col>
            <Input
              id="Tagline"
              name="Tagline"
              label="Tagline"
              placeholder="Enter a tagline for this campaign ..."
              required={false}
              type="textbox"
              value={campaignDetails?.tagline}
              onChange={(val) => {
                handleFieldChange("tagline", val);
              }}
            />
          </Col>
        </Row>
        {/* <Row className="py-4">
						<Col>
							<Input
								id="slogan"
								name="slogan"
								label="Campaign Slogan"
								placeholder="Enter a slogan for this campaign ..."
								required={false}
								type="textbox"
								onChange={(val) => {
									handleFieldChange("slogan", val);
								}}
							/>
						</Col>
					</Row> */}
        <Row className="py-4">
          <Col>
            <Input
              id="startDate"
              name="startDate"
              label="Start Date"
              placeholder="mm/dd/yyyy"
              required={false}
              type="date"
              format="mm/dd/yyyy"
              value={campaignDetails?.start_date ? dayjs(campaignDetails?.start_date).format("MM/DD/YYYY") : ""}
              onChange={(val) => {
                // startDate cannot be before today
                if (dayjs(val).isBefore(dayjs())) {
                } else {
                  handleFieldChange("start_date", val);
                }
              }}
            />
          </Col>
          <Col>
            <Input
              id="endDate"
              name="endDate"
              label="End Date"
              placeholder="mm/dd/yyyy"
              required={false}
              type="date"
              format="mm/dd/yyyy"
              value={campaignDetails?.end_date ? dayjs(campaignDetails?.end_date).format("MM/DD/YYYY") : ""}
              onChange={(val) => {
                handleFieldChange("end_date", val);
              }}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Input
              id="description"
              name="description"
              label="Description"
              placeholder="Add a more detailed description of your campaign..."
              required={false}
              type="textarea"
              value={campaignDetails?.description}
              onChange={(val) => {
                handleFieldChange("description", val);
              }}
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <FileUploader
              required={false}
              id="primary_logo"
              text="Upload a primary logo"
              valueExtractor={(val) => {
                handleFieldChange("primary_logo", val);
              }}
            />
          </Col>
          <Col>
            <FileUploader
              required={false}
              id="secondary_logo"
              text="Upload a secondary logo"
              valueExtractor={(val) => {
                handleFieldChange("secondary_logo", val);
              }}
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <FileUploader
              required={false}
              id="campaign_image"
              text="Add an image for the campaign(optional)"
              valueExtractor={(val) => {
                handleFieldChange("campaign_image", val);
              }}
            />
          </Col>
        </Row>
        <Row className="mt-4 justify-content-end">
          <Col>
            <ProgressButton loading={loading} onClick={handleSubmit}>
              Save and Continue
            </ProgressButton>
          </Col>
        </Row>
        <Row className="mt-3 ">
          {showError && (
            <Col>
              <p className="text-center py-3 light-red-background">
                Sorry, you got an error while saving. Please check your key
                contact information
              </p>
            </Col>
          )}
        </Row>
      </form>
    </Container>
  );
};

export default Information;
