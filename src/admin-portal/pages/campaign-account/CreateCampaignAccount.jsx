import React, { useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from 'react-bootstrap/Spinner';

import "./campaignAccount.css";
import { motion as m } from "framer-motion";
import Input from "../../../components/admin-components/Input";
import { Dropdown } from "@kehillahglobal/ui";
import Button from "../../../components/admin-components/Button";
import { fetchCommunitiesList } from "../../../requests/community-routes";
import useSWR from "swr";
import { apiCall } from "../../../api/messenger";
import { useDispatch } from "react-redux";
import { setCampaignAccountAction } from "../../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

export default function CreateCampaignAccount() {
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
  } = useSWR("communities.list", async () => {
    return await fetchCommunitiesList("communities.list")
  }, {
    dedupingInterval:3_600_000,
    revalidateInterval:3_600_000,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval:3_600_000
  });

  const buildQuery = (key, value) => {
    setQuery({ ...query, [key]: value });
  };

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    apiCall("campaign.accounts.create", query).then((res) => {
      setLoading(false);
      if (res?.success) {
        dispatch(setCampaignAccountAction(res?.data));
        navigate("/admin/home")
      }else{
        setShowError(true);
      }
      
    });
  };
  return (
    <div className="campaign-account-root">
      <Container className="campaign-account-main elevate-float">
        <div>
          <h1 className="title">WELCOME TO MASSENERGIZE CAMPAIGNS </h1>
          <p className="description">
            Create a campaign account and invite people to manage your campaigns
            with you.
          </p>
        </div>

        <m.div className="container">
          <Container>
            <form>
              <Row className="py-4">
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

              <Row className="py-4">
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
              </Row>
              <Row className="py-4">
                <Col>
                  <Dropdown
                    data={allCommunities || []}
                    labelExtractor={(item)=>item?.name}
                    onItemSelected={(selected, currentItem, parentValueOfCurrentItem)=>{
                      buildQuery("community_id", selected?.id);
                    }}
                    valueExtractor={(item)=>item?.id}
                    placeholder={"Select a community"}

                  />
                </Col>
              </Row>
              <Row className="py-4 justify-content-end">
                <Col>
                {loading ? <Spinner animation="border" variant="primary" />:(
                  <Button
                    text="Create Account"
                    onSubmit={onSubmit}
                    rounded={false}
                  />

                )}
                </Col>
              </Row>

              <Row className="py-4 my-4">
                {showError && (
                  <Col>
                    <p className="text-center py-3 light-red-background">
                      Sorry, you got an error while saving. Please check your
                      key contact information
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Container>
        </m.div>
      </Container>
    </div>
  );
}
