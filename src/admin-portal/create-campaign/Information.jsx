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
import { getImageValue } from "../../helpers/utils";
import CustomAccordion from "src/components/admin-components/CustomAccordion";
import LandingPageCustomization from "./LandingPageCustomization";
import Button from "src/components/admin-components/Button";
import { useCampaignContext } from "src/hooks/use-campaign-context";
import SectionForm from "./create-technology/SectionsForm";
import {SINGLE_TECHNOLOGY_CAMPAIGN_SPT} from "../../utils/Constants";
import {Button as BTN} from "react-bootstrap";

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

  const [openedAccordion, setOpenedAccordion] = useState(null);

  const [campaignCallToAction, setCampaignCallToAction] = useState(campaignDetails?.call_to_action || {});

  const { setNewCampaignDetails } = useCampaignContext();

  const handleFieldChange = (field, value) => {
    setCampaignDetails(field, value);
  };

  const toggleAccordion = (section) => {
    setOpenedAccordion(openedAccordion === section ? null : section);
  }

  const handleSaveCallToAction = async () => {
      let data = {id: campaignDetails.id, call_to_action: JSON.stringify(campaignCallToAction)};
      let res = await updateCampaign(data);
        if (res) {
             blow({
                title: "Success",
                message: "Call to action saved successfully",
                type: "success",
                duration: 5000,
            });
        }else{
            blow({
                title: "Error",
                message: "An error occurred while saving call to action",
                type: "error",
                duration: 5000,
            });
        }
  }


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setShowError(false);

      const payload = {
        id: campaignDetails.id,
        title: campaignDetails.title,
        tagline: campaignDetails.tagline,
        description: campaignDetails.description,
        about_us_title: campaignDetails.about_us_title ,
        featured_summary: campaignDetails.featured_summary,
        ...(campaignDetails.start_date && { start_date: dayjs(campaignDetails.start_date).format("YYYY-MM-DD") }),
        ...(campaignDetails.end_date && { end_date: dayjs(campaignDetails.end_date).format("YYYY-MM-DD") }),
        ...getImageValue(campaignDetails, "primary_logo"),
        ...getImageValue(campaignDetails, "secondary_logo"),
        ...getImageValue(campaignDetails, "campaign_image"),
      };

      let response = await updateCampaign(payload);
      setNewCampaignDetails({ ...(campaignDetails || {}), ...response });

      if (response) {
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
      <>
          {
              campaignDetails?.template_key !== SINGLE_TECHNOLOGY_CAMPAIGN_SPT ? (
                  <div style={{marginBottom: 20}}>
                      <CustomAccordion title="Add other page customizations to your main campaign page">
                          <LandingPageCustomization/>
                      </CustomAccordion>
                  </div>
              ):(
                  <>
                      <div className="mb-3">
                          <CustomAccordion
                              title="Add Call to Action on Hero Section"
                              component={
                                  <Row className="py-4">
                                      <Col>
                                          <Input
                                              label="Call to Action Text"
                                              placeholder="Enter call to action text..."
                                              required={false}
                                              type="textbox"
                                              onChange={(val) => setCampaignCallToAction({...campaignCallToAction, text: val})}
                                              value={campaignCallToAction?.text}
                                          />
                                      </Col>
                                      <Col>
                                          <Input
                                              label="Call to Action URL"
                                              placeholder="Enter call to action URL..."
                                              required={false}
                                              type="textbox"
                                              onChange={(val) =>setCampaignCallToAction({...campaignCallToAction, url: val})}
                                              value={campaignCallToAction?.url}
                                          />
                                      </Col>
                                      <Row>
                                          <Col className="py-4">
                                              <Button
                                                  text="Save Section"
                                                  onSubmit={() => handleSaveCallToAction()}
                                                  rounded={false}
                                                  loading={loading}
                                                  disabled={loading}
                                              />
                                          </Col>
                                      </Row>

                                  </Row>
                              }
                              isOpen={openedAccordion === "call_to_action"}
                              onClick={() => toggleAccordion("call_to_action")}
                          />
                      </div>
                      <div className="mb-3">
                          <CustomAccordion
                              title="Add Content to Banner Section"
                              component={
                                  <SectionForm
                                      section="banner_section"
                                      data={campaignDetails?.banner_section}
                                      updateExistingObject={setCampaignDetails}
                                      item_id={campaignDetails?.id}
                                      apiUpdateFunc={updateCampaign}
                                      version={"v2"}
                                  />
                              }
                              isOpen={openedAccordion === "banner_section"}
                              onClick={() => toggleAccordion("banner_section")}
                          />
                      </div>
                      <div className="mb-3">
                          <CustomAccordion
                              title={"Add Content to Goal Section"}
                              component={
                                  <SectionForm
                                      section="goal_section"
                                      data={campaignDetails?.goal_section}
                                      updateExistingObject={setCampaignDetails}
                                      item_id={campaignDetails?.id}
                                      apiUpdateFunc={updateCampaign}
                                      version={"v2"}
                                  />
                              }
                              isOpen={openedAccordion === "goal_section"}
                              onClick={() => toggleAccordion("goal_section")}
                          />
                      </div>
                      <div className="mb-3">
                          <CustomAccordion
                              title={"Add Content to Call Us Section"}
                              component={
                                  <SectionForm
                                      section="callout_section"
                                      data={campaignDetails?.callout_section}
                                      updateExistingObject={setCampaignDetails}
                                      item_id={campaignDetails?.id}
                                      apiUpdateFunc={updateCampaign}
                                      version={"v2"}
                                  />
                              }
                              isOpen={openedAccordion === "callout_section"}
                              onClick={() => toggleAccordion("callout_section")}
                          />
                      </div>
                      <div className="mb-3">
                          <CustomAccordion
                              title={"Add Content to Footer Call Us"}
                              component={
                                  <SectionForm
                                      section="contact_section"
                                      data={campaignDetails?.contact_section}
                                      updateExistingObject={setCampaignDetails}
                                      item_id={campaignDetails?.id}
                                      apiUpdateFunc={updateCampaign}
                                      version={"v2"}
                                  />
                              }
                              isOpen={openedAccordion === "contact_section"}
                              onClick={() => toggleAccordion("contact_section")}
                          />
                      </div>
                  </>
              )
          }


          <Row className="mt-4">
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
                      label="Tagline (100 Chars)"
                      error={errors?.tagline}
                      placeholder="Enter a tagline for this campaign ..."
                      required={false}
                      type="textbox"
                      value={campaignDetails?.tagline}
                      maxLength={100}
                      onChange={(val) => {
                          handleFieldChange("tagline", val);
                      }}
                  />
              </Col>
          </Row>
          <Row className="py-4">
              <Col>
                  <Input
                      id="startDate"
                      name="startDate"
                      label="Start Date"
                      placeholder="MM-DD-YYYY"
                      required={false}
                      type="date"
                      inputType="date"
                      error={errors?.start_date}
                      format="mm-dd-yyyy"
                      value={campaignDetails?.start_date}
                      onChange={(val) => {
                          // // startDate cannot be before today
                          // if (dayjs(val).isBefore(dayjs())) {
                          //   setErrors({ ...errors, start_date: "Start date cannot be before today" });
                          //   handleFieldChange("start_date", "");
                          //   handleFieldChange("end_date", "");
                          // } else {
                          handleFieldChange("start_date", val);
                          //   setErrors({ ...errors, start_date: null })
                          // }
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
                      inputType="date"
                      disabled={isEmpty(campaignDetails?.start_date)}
                      error={errors?.end_date}
                      format="mm-dd-yyyy"
                      value={campaignDetails?.end_date}
                      onChange={(val) => {
                          if (dayjs(val).isBefore(campaignDetails?.start_date)) {
                              setErrors({...errors, end_date: "End date cannot be before start date"});
                              handleFieldChange("end_date", "");
                          } else {
                              handleFieldChange("end_date", val);
                              setErrors({...errors, end_date: null});
                          }
                      }}
                  />
              </Col>
          </Row>
          <Row className="py-3">
              <Col style={{marginBottom: 10}}>
                  <Input
                      id="about-us-title"
                      name="about_us_title"
                      label="About us title"
                      placeholder="Add a custom title for the about us section..."
                      required={false}
                      // type="richText"
                      error={errors?.about_us_title}
                      value={campaignDetails?.about_us_title}
                      onChange={(val) => {
                          handleFieldChange("about_us_title", val);
                      }}
                  />
              </Col>
          </Row>
          <Row className="py-3">
              <Col style={{marginBottom: 10}}>
                  <Input
                      id="featured-summary"
                      name="featured_summary"
                      label="Featured Summary"
                      placeholder="Add a short summary of your campaign..."
                      required={false}
                      error={errors?.featured_summary}
                      value={campaignDetails?.featured_summary}
                      onChange={(val) => {
                          handleFieldChange("featured_summary", val);
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
                        ) : */ <FileUploader
                      defaultValue={campaignDetails?.primary_logo?.url || ""}
                      required={false}
                      id="primary_logo"
                      text="Upload a primary logo"
                      onChange={(val) => {
                          handleFieldChange("primary_logo", val);
                      }}
                  />
                  }
              </Col>
              <Col>
                  <FileUploader
                      defaultValue={campaignDetails?.secondary_logo?.url || ""}
                      required={false}
                      id="secondary_logo"
                      text="Upload a secondary logo"
                      onChange={(val) => {
                          handleFieldChange("secondary_logo", val);
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
                      onChange={(val) => {
                          handleFieldChange("campaign_image", val);
                      }}
                  />
              </Col>
          </Row>
          <Row className="mt-4 justify-content-end">
              <Col>
                  <Button loading={loading} disabled={loading} onClick={handleSubmit}>
                      Save
                  </Button>
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
