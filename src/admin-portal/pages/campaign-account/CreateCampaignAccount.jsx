import React, { useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./campaignAccount.css";
import { motion as m } from "framer-motion";
import Input from "../../../components/admin-components/Input";
import Dropdown from "../../../components/admin-components/Dropdown";
import Button from "../../../components/admin-components/Button";

export default function CreateCampaignAccount() {

    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState({});

   
    const buildQuery = (key, value) => {
        setQuery({ ...query, [key]: value });
    }


    const onSubmit = (e) => {
        e.preventDefault();

        console.log("=== query ===", query)
    }
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
                    displayTextToggle="Select a community this account is associated with"
                    data={[
                      { name: "Community 1" },
                      { name: "Community 2" },
                      { name: "Community 3" },
                      { name: "Community 4" },
                    ]}
                    valueExtractor={(item) => item}
                    labelExtractor={(item) => item?.name}
                    multiple={false}
                    onItemSelect={(selectedItem, allSelected) => {
                      buildQuery("community", allSelected);
                    }}
                    label={"Community"}
                    defaultValue={[]}
                  />
                </Col>
              </Row>
              <Row className="py-4 justify-content-end">
                <Col>
                  <Button
                    text="Create Account"
                    onSubmit={onSubmit}
                    rounded={false}
                  />
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
