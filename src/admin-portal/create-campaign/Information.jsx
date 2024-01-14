import React, { useContext, useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../components/admin-components/Input";
import FileUploader from "../../components/admin-components/FileUploader";
import "../../assets/styles/admin-styles.scss";
import { ProgressButton } from "../../components/progress-button/progress-button";
import dayjs from "dayjs";
import { updateCampaign } from "../../requests/campaign-requests";
import { useBubblyBalloons } from "../../lib/bubbly-balloon/use-bubbly-balloons";
import { useNamedState } from "../../hooks/useNamedState";
import { isEmpty } from "../../helpers/utils/string";
import { BubblyBalloonContext } from "../../lib/bubbly-balloon/bubbly-balloon-context";

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

  const { blow } = useBubblyBalloons();

  const [errors, setErrors] = useNamedState("Error", {});

  const handleFieldChange = (field, value) => {
    setCampaignDetails(field, value);
  };

  const imageExists = (key) => {
    return typeof campaignDetails[key]?.url !== "undefined";
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setShowError(false);

      const payload = {
        // ...campaignDetails,
        id : campaignDetails.id,
        title: campaignDetails.title,
        tagline: campaignDetails.tagline,
        description: campaignDetails.description,

        ...(campaignDetails.start_date && { start_date: dayjs(campaignDetails.start_date).format("YYYY-MM-DD") }),
        ...(campaignDetails.end_date && { end_date: dayjs(campaignDetails.end_date).format("YYYY-MM-DD") }),
        ...(imageExists("primary_logo")  ? {} : ({ primary_logo: campaignDetails.primary_logo })),
        ...(imageExists("secondary_logo") ? {} : { secondary_logo: campaignDetails.secondary_logo }),
        ...(imageExists("campaign_image") ? {} : (
          typeof campaignDetails?.campaign_image !== "undefined" ? { campaign_image: campaignDetails.campaign_image } : {})),
      };

      let response = await updateCampaign(payload);

      if (response) {
        setLoading(false);
        console.log({ response })
        const balloon = blow({
          title: "Success",
          message: "Campaign information saved successfully",
          type: "success",
          duration: 5000,
        });
      }

    } catch (e) {
      console.log(e);
      setLoading(false);
      setShowError(true);
    }
  };

  return (
      <>
        <Row className="mt-0">
          <Col>
            <Input
              id="title"
              name="title"
              label="Campaign Title"
              placeholder="Enter a Title for this campaign ..."
              required={true}
              error={errors?.title}
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
              error={errors?.tagline}
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
              placeholder="MM-DD-YYYY"
              required={false}
              type="date"
              error={errors?.start_date}
              format="mm-dd-yyyy"
              value={campaignDetails?.start_date}
              onChange={(val) => {
                // startDate cannot be before today
                if (dayjs(val).isBefore(dayjs())) {
                  setErrors({ ...errors, start_date: "Start date cannot be before today" });
                  handleFieldChange("start_date", "");
                  handleFieldChange("end_date", "");
                } else {
                  handleFieldChange("start_date", val);
                  setErrors({ ...errors, start_date: null })
                }
              }}
            />
          </Col>
          <Col>
            <Input
              id="endDate"
              name="endDate"
              label="End Date"
              placeholder="mm-dd-yyyy"
              required={false}
              type="date"
              disabled={isEmpty(campaignDetails?.start_date)}
              error={errors?.end_date}
              format="mm-dd-yyyy"
              value={campaignDetails?.end_date}
              onChange={(val) => {
                if (dayjs(val).isBefore(campaignDetails?.start_date)) {
                  setErrors({ ...errors, end_date: "End date cannot be before start date" });
                  handleFieldChange("end_date", "");
                } else {
                  handleFieldChange("end_date", val);
                  setErrors({ ...errors, end_date: null })
                }
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
              type="richText"
              error={errors?.description}
              value={campaignDetails?.description}
              onChange={(val) => {
                handleFieldChange("description", val);
              }}
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            {
              /*imageExists("primary_logo") ? (
                <img src={campaignDetails?.primary_logo?.url} alt={campaignDetails.primary_logo?.name || "Primary Logo"} />
              ) : */(<FileUploader
              defaultValue={campaignDetails?.primary_logo?.url || ""}
              required={false}
              id="primary_logo"
              text="Upload a primary logo"
              onChange={async (val) => {
                if (val) {
                  handleFieldChange("primary_logo", val);
                }
              }}
            />)
            }
          </Col>
          <Col>
            <FileUploader
              defaultValue={campaignDetails?.secondary_logo?.url || ""}
              required={false}
              id="secondary_logo"
              text="Upload a secondary logo"
              onChange={async (val) => {
                if (val) {
                  handleFieldChange("secondary_logo", val);
                }
              }}
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <FileUploader
              defaultValue={campaignDetails?.campaign_image?.url || ""}
              required={false}
              id="campaign_image"
              text="Add an image for the campaign(optional)"
              onChange={async (val) => {
                if (val) {
                  handleFieldChange("campaign_image", val);
                }
              }}
            />
          </Col>
        </Row>
        <Row className="mt-4 justify-content-end">
          <Col>
            <ProgressButton
              loading={loading}
              disabled={loading}
              onClick={handleSubmit}>Save</ProgressButton>
          </Col>
        </Row>
        <Row className="mt-3 ">
          {showError && (
            <Col>
              <p className="text-center py-3 light-red-background">
                Sorry, you got an error while saving. Please try again.
              </p>
            </Col>
          )}
        </Row>
      </>
  );
};

export default Information;
