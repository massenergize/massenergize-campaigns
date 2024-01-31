import { useState } from "react";
import { campaignPages } from "../../utils/Constants";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import classes from "classnames";
import LandingPage from "../../user-portal/pages/landing-page/LandingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { useCampaignContext } from "../../hooks/use-campaign-context";

export function CampaignDetailsAndPreview ({setStep,}) {
  const [activeTab, setActiveTab] = useState(campaignPages[0].name);
  const [preview, setPreview] = useState(false);

  const {campaignDetails,originalCampaignDetails,lists,handleCampaignDetailsChange : setCampaignDetails} = useCampaignContext();

  return (
    <>
      <Row className="justify-content-between mb-4 mt-4">
        <Col className={"px-4"}>
          <h4 className="mb-0">{campaignDetails.title}</h4>
        </Col>
        <div className="text-right col-auto px-4">
          <ButtonGroup className="mr-2">
            <Button variant="primary" onClick={() => {
              window.open(`/campaign/${campaignDetails.slug}?preview=true`, "_blank")
            }}>
              Preview <FontAwesomeIcon icon={faExternalLink}/>
            </Button>
          </ButtonGroup>
        </div>
      </Row>
      <Row>
        <Col md={preview ? 5 : 12}>
          {/*<Container>*/}
          {/*region Header*/}
          <Row className="pb-2 overflow-x-auto">
            <Col className={"px-4"}>
              <div className="nav-tabs-container">
                {
                  campaignPages?.map((page) => (
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
          <Row className=" pt-4">
            <Col className={"px-4"}>
              {
                campaignPages?.map((tab) => {
                  return (
                    activeTab === tab?.name && (
                      <tab.component
                        key={tab?.name}
                        setStep={setStep}
                        campaignDetails={campaignDetails}
                        originalCampaignDetails={originalCampaignDetails}
                        setCampaignDetails={setCampaignDetails}
                        lists={lists}
                      />
                    )
                  );
                })}
            </Col>
          </Row>

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
