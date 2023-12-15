import React, { useReducer, useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import Input from "../../components/admin-components/Input";
import { apiCall } from "../../utils/api_call";
import "../adminStyles.css";
import Dropdown from "../../components/admin-components/Dropdown";
import useSWR from "swr";
import { fetchCommunitiesList } from "../../requests/community-routes";
import { isEmpty } from "../../helpers/utils/string";
import Chip from "../../components/admin-components/Chip";
import { createCampaign, createCampaignFromTemplate } from "../../requests/campaign-requests";
import { ProgressButton } from "../../components/progress-button";

export function StartCampaign ({ campaignDetails, setCampaignDetails, setStep, lists }) {
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

  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    try {
      const payload = {
        title: campaignDetails?.title,
        communities: campaignDetails?.communities?.map((community) => community?.id),
      }
      const response = await createCampaignFromTemplate(campaignDetails);

      if (response?.status === 200) {
        setStep(2);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const [community, setCommunity] = useState(null);

  const {
    allPartners,
    allManagers,
    allTechnologies,
    allCommunities,
  } = lists

  // const {
  //   initialData: allCommunitiesInitialData,
  //   data: allCommunities,
  //   error: allCommunitiesError,
  //   isValidating: allCommunitiesIsValidating,
  //   isLoading: allCommunitiesIsLoading,
  // } = useSWR("communities.list", fetchCommunitiesList);

  // console.log(allCommunities)

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
                    <Dropdown
                      displayTextToggle={
                       campaignDetails?.communities?.length > 0 ? "Add more communities this campaign" : "Select one more communities for this campaign"
                      }
                      data={(allCommunities?.data || []).map((campaign) => {
                        return { ...campaign, value: campaign?.id, }
                      })}
                      defaultValue={campaignDetails?.communities}
                      value={campaignDetails?.communities}
                      valueExtractor={(item) => item}
                      labelExtractor={(item) => item?.name}
                      multiple={true}

                      onItemSelect={(selectedItem, allSelected) => {
                        setCampaignDetails("communities", allSelected)
                      }}
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
                      disabled={isEmpty(campaignDetails?.title) || campaignDetails?.communities?.length < 1}
                      onClick={() => {
                        setStep("COMPLETE");
                        // handleSubmit();
                      }}
                      >
                      Create Campaign
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
