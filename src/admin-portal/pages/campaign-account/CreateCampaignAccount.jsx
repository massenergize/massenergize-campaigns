import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./campaignAccount.css";
import Input from "../../../components/admin-components/Input";
import { Dropdown } from "@kehillahglobal/ui";
import { fetchCommunitiesList } from "../../../requests/community-routes";
import useSWR from "swr";
import { useDispatch } from "react-redux";
import { setCampaignAccountAction } from "../../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { ProgressButton } from "../../../components/progress-button/progress-button";
import { createCampaignAccount } from "../../../requests/campaign-requests";

export default function CreateCampaignAccount () {
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const {
    // initialData: allCommunitiesInitialData,
    data: allCommunities,
    // error: allCommunitiesError,
    // isValidating: allCommunitiesIsValidating,
    isLoading: allCommunitiesIsLoading,
  } = useSWR("communities.listForCommunityAdmin", async () => {
    return await fetchCommunitiesList("communities.listForCommunityAdmin")
  }, {
    dedupingInterval: 3_600_000,
    revalidateInterval: 3_600_000,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 3_600_000
  });

  const buildQuery = (key, value) => {
    setQuery({ ...query, [key]: value });
  };

  const onSubmit = async function onSubmit (e) {
    try {
      setLoading(true);

      const res = await createCampaignAccount(query);

      if (res) {
        setLoading(false);
        dispatch(setCampaignAccountAction(res));
        navigate("/admin/home")
      }
    } catch (e) {
      setLoading(false);
      setShowError(true);
    }
  };

  return (
    <div className="campaign-account-root">
      <Container className="campaign-account-main">
        <Row className={"justify-content-center"}>
          <Col md={7}>
            <div>
              <h4 className="title">Welcome to massenergize campaigns </h4>
              <p className="description text-sm">
                Create a campaign account and invite people to manage your campaigns
                with you.
              </p>
            </div>
            <form>
              <Row className="mt-3">
                <Col>
                  <Input
                    id="name"
                    name="name"
                    label="Account Name"
                    placeholder="Enter a Title for this account ..."
                    required={true}
                    type="textbox"
                    onChange={(val) => {
                      buildQuery("name", val);
                    }}
                  />
                </Col>
              </Row>

              {/* <Row className="mt-2">
                <Col>
                  <Input
                    id="subdomain"
                    name="subdomain"
                    label="Subdomain"
                    placeholder="Enter a subdomain for this account ..."
                    required={true}
                    type="textbox"
                    onChange={(val) => {
                      buildQuery("subdomain", val);
                    }}
                  />
                </Col>
              </Row> */}
            {allCommunities?.length>1 && (  <Row className="mt-4">
                <Col>
                  <Dropdown
                    data={allCommunities || []}
                    labelExtractor={(item) => item?.name}
                    onItemSelected={(selected, currentItem, parentValueOfCurrentItem) => {
                      buildQuery("community_id", selected?.id);
                    }}
                    valueExtractor={(item) => item?.id}
                    placeholder={"Select a community"}

                  />
                </Col>
              </Row>)}
              <Row className="py-4 justify-content-end">
                <Col>
                  <ProgressButton onClick={onSubmit} loading={loading} disabled={loading} rounded={false}>
                    Create Account
                  </ProgressButton>
                </Col>
              </Row>
            </form>
            {
              showError && (
                <Row className="py-4 my-4">
                  <Col>
                    <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                      <Alert.Heading className>Oh snap!</Alert.Heading>
                      <p>
                        Sorry, an error occurred while saving. Please check your
                        key contact information
                      </p>
                    </Alert>
                  </Col>
                </Row>
              )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
