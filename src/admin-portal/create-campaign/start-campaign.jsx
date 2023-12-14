import React, { useReducer, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/admin-components/Input";
import { apiCall } from "../../utils/api_call";
import "../adminStyles.css";
import Dropdown from "../../components/admin-components/Dropdown";
import useSWR from "swr";
import { fetchCommunitiesForCommunityAdmins } from "../../requests/community-routes";

export function StartCampaign ({ campaignDetails, setCampaignDetails, setStep }) {
  const [showError, setShowError] = useState(false);

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

  const handleFieldChange = (field, value) => {
    dispatch({ type: "SET_FIELD_VALUE", payload: { field, value } });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    apiCall("campaigns.create", formData)
      .then((res) => {
        // localStorage.setItem("campaign_id", res?.data?.id);
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [community, setCommunity] = useState(null);

  const {
    initialData: communitiesInitialData,
    data: communities,
    error: communitiesError,
    isValidating: communitiesIsValidating,
    isLoading: communitiesIsLoading,
  } = useSWR("communities.listForCommunityAdmin", fetchCommunitiesForCommunityAdmins);

  return (
    <Container className={" flex-col"}>
      <Row className={"justify-content-center"}>
        {
          communitiesIsLoading && (
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
          (!communitiesIsLoading && !communitiesError) ? (
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
                        handleFieldChange("title", val);
                      }}
                    />
                  </Col>
                </Row>
                <Row className="py-4">
                  <Col>
                    <Dropdown
                      displayTextToggle="Select technologies for this campaign"
                      data={communities}
                      defaultValue={community}
                      value={community}
                      valueExtractor={(item) => item}
                      labelExtractor={(item) => item?.name}
                      multiple={true}
                      onItemSelect={(selectedItem, allSelected) => {
                        setCampaignDetails("technologies", allSelected)
                      }}
                    />
                  </Col>
                </Row>

                <Row className="py-4 justify-content-end">
                  <Col>
                    <Button
                      text="Save & Continue"
                      onSubmit={handleSubmit}
                      rounded={false}
                    />
                  </Col>
                </Row>
                <Row className="py-4 my-4">
                  {showError && (
                    <Col>
                      <p className="text-center py-3 light-red-background">

                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </Col>
          ) : null
        }
        {
          (!communitiesIsLoading && communitiesError) && (
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
