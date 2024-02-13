import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import partnerLogo from "./../../../assets/imgs/me-logo.png";
import partnerLogo from "./../../../assets/imgs/me-round-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import CampaignNotLive from "../landing-page/CampaignNotLive";

function Banner(props) {
  const { title, secondary_logo, primary_logo, tagline, handleShareCampaign, is_published } = props;
  return (
    <Container>
      <Row>
        <Col
          className="mob-clear-padding"
          lg={3}
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img className="site-logo" src={primary_logo?.url} alt={"logo"} />
        </Col>
        <Col
          lg={6}
          className="mob-clear-padding"
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="page-title">{title}</h1>
          {tagline && (
            <h5 className="page-slogan" style={{}}>
              {tagline}
            </h5>
          )}
          {is_published && (
            <span className="touchable-opacity share-campaign-btn" onClick={() => handleShareCampaign()}>
              <FontAwesomeIcon icon={faShare} /> Share
            </span>
          )}
        </Col>
        <Col
          lg={3}
          className="mob-clear-padding"
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {secondary_logo?.url && <img src={secondary_logo?.url} className="site-logo" alt={"logo"}></img>}
        </Col>
      </Row>
      <CampaignNotLive />
    </Container>
  );
}

export default Banner;
