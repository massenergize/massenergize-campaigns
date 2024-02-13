import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import partnerLogo from "./../../../assets/imgs/me-logo.png";
import partnerLogo from "./../../../assets/imgs/me-round-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import CampaignNotLive from "../landing-page/CampaignNotLive";

function Banner(props) {
  const { title, secondary_logo, primary_logo, tagline, handleShareCampaign, is_published } = props;
  return (
    <Container>
      <Row>
        {/* <Col
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
        </Col> */}
        <Col
          lg={12}
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

          <div style={{ position: "relative" }}>
            <div
              onClick={() => handleShareCampaign && handleShareCampaign()}
              role="button"
              tabIndex={0}
              className="touchable-opacity elevate-5 camp-share-btn-v2 row-flex"
              style={{ alignItems: "center" }}
            >
              <FontAwesomeIcon icon={faShareNodes} />
              <small className="body" style={{ marginLeft: 6 }}>
                {" "}
                Share
              </small>
              {/* <i className="fa fa-share-nodes" /> <small className="body"> Share</small> */}
            </div>
          </div>
          {/* {is_published && (
            <span className="touchable-opacity share-campaign-btn" onClick={() => handleShareCampaign()}>
              <FontAwesomeIcon icon={faShare} /> Share
            </span>
          )} */}
        </Col>
        {/* <Col
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
        </Col> */}
      </Row>
      <CampaignNotLive />
    </Container>
  );
}

export default Banner;
