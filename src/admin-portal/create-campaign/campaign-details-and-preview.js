import { useState } from "react";
import { campaignPages } from "../../utils/Constants";
import { Button, Col, Row } from "react-bootstrap";
import classes from "classnames";
import LandingPage from "../../user-portal/pages/landing-page/LandingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export function CampaignDetailsAndPreview ({ campaignDetails, setCampaignDetails, setStep, lists }) {
  const [activeTab, setActiveTab] = useState(campaignPages[0].name);
  const [preview, setPreview] = useState(false);

  return (
    <>
      <Row className="justify-content-between mb-2">
        <Col>
          <h4 className="mb-0">Campaign Details</h4>
        </Col>
        <div className="text-right col-auto">
          {/*<Link to={`/${campaignDetails.id}?preview=true`} >*/}
          <Button variant="primary" onClick={() => setPreview(!preview)}>
            <FontAwesomeIcon icon={faEye}/> {preview ? "Hide Preview" : "Show Preview"}
          </Button>
          {/*</Link>*/}
        </div>
      </Row>
      <Row>
        <Col md={preview ? 5 : 12}>
          {/*<Container>*/}
          {/*region Header*/}
          <Row className="pb-2 overflow-scroll">
            <Col>
              <div className="nav-tabs-container">
                {campaignPages?.map((page) => (
                  <div
                    key={page?.name}
                    className={classes("nav-tabs-main tab", { "tab-active": activeTab === page?.name })}
                    onClick={() => setActiveTab(page?.name)}
                  >
                    <h5 className={classes("nav-tabs",)}>
                      {page?.name}
                    </h5>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
          {/*endregion*/}

          {/*region Body: Content goes here*/}
          <Row className="mt-4 pt-4">
            <Col>
              {
                campaignPages?.map((tab) => {
                  return (
                    activeTab === tab?.name && (
                      <tab.component
                        key={tab?.name}
                        setStep={setStep}
                        campaignDetails={campaignDetails}
                        setCampaignDetails={setCampaignDetails}
                        lists={lists}
                      />
                    )
                  );
                })}
            </Col>
          </Row>
          {/*endregion*/}

          {/*region Footer*/}

          {/*endregion*/}
          {/*</Container>*/}
        </Col>
        {
          preview && (
            <Col className={"position-relative"}>
              <LandingPage campaign={campaignDetails} preview/>
            </Col>
          )
        }
      </Row>
    </>
  )
}