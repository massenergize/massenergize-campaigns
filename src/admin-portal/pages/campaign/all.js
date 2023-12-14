import { Button, Col, Row } from "react-bootstrap";
import { AdminLayout } from "../../../layouts/admin-layout";
import { AllCampaignsView } from "../../../views/all-campaigns-view";
import React from "react";
import { Link } from "react-router-dom";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AllCampaigns () {
  return (
    <AdminLayout>
      <Row className={"px-4"}>
        <Col>
          {/*region Header*/}
          <Row lg={{ gutter: 0 }} className="py-4 overflow-scroll gap-0 no-gutters g justify-content-between">
            <Col>
              <div className="nav-tabs-container">

              </div>
            </Col>
            <Col md="auto">
              <Link to={"/admin/campaign/new"}>
                <Button primary className="rounded-1 primary">
                  <FontAwesomeIcon icon={faPlus}/> New Campaign
                </Button>
              </Link>
            </Col>
          </Row>
          {/*endregion*/}

          {/*region Body: Content goes here*/}
          <Row className=" pt-4">
            <Col>
              <AllCampaignsView/>
            </Col>
          </Row>
          {/*endregion*/}

          {/*region Footer*/}

          {/*endregion*/}
        </Col>
      </Row>
    </AdminLayout>
  );
}
