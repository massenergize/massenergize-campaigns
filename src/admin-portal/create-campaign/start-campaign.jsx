import React, { useReducer, useState } from "react";
import { Alert, Button, Col, Container, FormLabel, Row } from "react-bootstrap";
import Input from "../../components/admin-components/Input";
import "../adminStyles.css";
import { isEmpty } from "../../helpers/utils/string";
import Chip from "../../components/admin-components/Chip";
import { createCampaignFromTemplate } from "../../requests/campaign-requests";
import { ProgressButton } from "../../components/progress-button/progress-button";
import { MultiSelect } from "react-multi-select-component";
import { useBubblyBalloons } from "../../components/bubbly-balloon/use-bubbly-balloons";

export function StartCampaign ({ campaignDetails, setCampaignDetails, updateCampaignDetails, step, setStep, lists }) {
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
  const reducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
      case "SET_FIELD_VALUE":
        return { ...state, [payload.field]: payload.value };
      default:
        throw new Error(`Unsupported action type: ${type}`);
    }
  };
  const { blow, pop } = useBubblyBalloons();
  const [formData, dispatch] = useReducer(reducer, initialState);

  const [submitButton, setSubmitButton] = useState({
    text: "Create Campaign",
    variant: "primary",
  });

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      const payload = {
        campaign_account_id: "24b4b3c0-5592-4548-b297-7fd57618a265", // TODO Remove this when the API is fixed
        title: campaignDetails?.title,
        community_ids: campaignDetails?.communities?.map((community) => community?.id),
      }
      let campaign = await createCampaignFromTemplate(payload);

      if (campaign) {
        setLoading(false);
        setSubmitButton({
          ...submitButton,
          text: "Continue",
          variant: "success",
        });

        updateCampaignDetails({
          ...campaign,
          communities: campaign?.communities?.map((community) => {
            return {
              ...community,
              value: community?.id,
              label: community?.name
            }
          }),
          technologies: campaign?.technologies?.map((technology) => {
            return {
              ...technology,
              value: technology?.id,
              label: technology?.name
            }
          }),
          managers: campaign?.managers?.map((manager) => {
            return {
              ...manager,
              value: manager?.id,
              label: manager?.name
            }
          }),
          partners: campaign?.partners?.map((partner) => {
            return {
              ...partner,
              value: partner?.id,
              label: partner?.name
            }
          }),
          events: campaign?.events?.map((event) => {
            return {
              ...event,
              value: event?.id,
              label: event?.name
            }
          })
        })

        console.log(campaign)

        const toast = blow({
          title: "Campaign Created",
          message: "Your campaign has been created successfully",
          type: "success",
          position: "bottom-right",
          timeout: 5000,
        });

        console.log({ toast })

        setStep("COMPLETE");
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const {
    allPartners,
    allManagers,
    allTechnologies,
    allCommunities,
  } = lists


  return (
    <Container className={" flex-col"}>
      <Row className={"justify-content-center"}>
        {
          allCommunities.isLoading && (
            <Col md={6} className={"d-flex vh-100"}>
              <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </Col>
          )
        }
        {
          (!allCommunities.isLoading && !allCommunities.error) ? (
            <Col md={6} className={"d-flex vh-100"}>
              <form className={"my-auto w-100"}>
                <Row className="py-4">
                  <Col>
                    <h5 className={"text-center"}>Create A New Campaign</h5>
                  </Col>
                </Row>

                <Row className="py-4">
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
                        setCampaignDetails("title", val);
                      }}
                    />
                  </Col>
                </Row>
                <Row className="py-4">
                  <Col>
                    <FormLabel>Choose one or more communities for your campaign from the dropdown below.</FormLabel>
                    <MultiSelect
                      options={(allCommunities?.data || []).map((campaign) => {
                        return {
                          ...campaign,
                          value: campaign?.id,
                          label: campaign?.name
                        }
                      })}
                      value={campaignDetails?.communities}
                      onChange={(val) => {
                        setCampaignDetails("communities", val);
                      }}
                      labelledBy="Select"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col className={"d-"}>
                    <Row>
                      {
                        campaignDetails?.communities?.map((community) => {

                          return (
                            <Col sm={"auto mb-2"}>
                              <Chip
                                text={community?.name}
                                icon={community?.icon}
                                id={community?.id}
                                size={"sm"}
                                className="mr-2"
                                onDismiss={(id, text) => {
                                  setCampaignDetails("communities", campaignDetails?.communities?.filter((community) => community?.id !== id))
                                }}
                              />
                            </Col>
                          )
                        })
                      }
                    </Row>
                  </Col>
                </Row>


                <Row className="py-4 justify-content-end">
                  <Col>
                    <ProgressButton
                      loading={loading}
                      disabled={isEmpty(campaignDetails?.title) || campaignDetails?.communities?.length < 1 || loading}
                      onClick={() => {
                        // setStep("COMPLETE");
                        console.log(step)
                        if (step === "START") {
                          handleSubmit();
                        } else {
                          setStep("COMPLETE");
                        }
                      }}
                      variant={submitButton.variant}
                      // variant={"light"}
                    >
                      {submitButton.text}
                    </ProgressButton>
                  </Col>
                </Row>

                <Row className="py-4 my-4">
                  {showError && (
                    <Col>
                      <Alert><p>{allCommunities.error?.message}</p></Alert>
                    </Col>
                  )}
                </Row>
              </form>
            </Col>
          ) : null
        }
        {
          (!allCommunities.isLoading && allCommunities.error) && (
            <Col md={6} className={"d-flex vh-100"}>
              <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <div className="text-center">
                  <h5 className={"text-center"}>Something went wrong</h5>
                  <p className={"text-center"}>Please <Button variant={"link-primary"}>try again</Button> later</p>
                </div>
              </div>
            </Col>
          )
        }
      </Row>
    </Container>
  );
}
