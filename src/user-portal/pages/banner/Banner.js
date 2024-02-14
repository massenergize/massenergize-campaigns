import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import partnerLogo from "./../../../assets/imgs/me-logo.png";
import partnerLogo from "./../../../assets/imgs/me-round-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import CampaignNotLive from "../landing-page/CampaignNotLive";
import PropTypes from "prop-types";

/**
 * @param showPrimaryLogo {boolean}
 * @param showSecondaryLogo {boolean}
 * @param props
 * @returns {Element}
 * @constructor
 */
function Banner(props) {
  const {
    showPrimaryLogo = true,
    showSecondaryLogo = true,
    title,
    secondary_logo,
    primary_logo,
    tagline,
    handleShareCampaign,
    is_published,
  } = props;
  return (
    <Container className="nav-top-margin">
      <Row>
        <Col>
          <CampaignNotLive />
        </Col>
      </Row>
      <Row>
        {showPrimaryLogo && (
          <Col
            className="mob-clear-padding"
            sm={"auto"}
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
        )}
        <Col
          className="mob-clear-padding"
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 className="page-title mt-2">{title}</h2>
          {tagline && (
            <h5 className="page-slogan mb-0" style={{}}>
              {tagline}
            </h5>
          )}
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
          {/*{is_published && (*/}
          {/*  <span className="touchable-opacity share-campaign-btn" onClick={() => handleShareCampaign()}>*/}
          {/*    <FontAwesomeIcon icon={faShare} /> Share*/}
          {/*  </span>*/}
          {/*)}*/}
        </Col>
        {showSecondaryLogo && (
          <Col
            sm={"auto"}
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
        )}
      </Row>
    </Container>
  );
}

Banner.prototype = {
  showPrimaryLogo: PropTypes.Boolean,
  showSecondaryLogo: PropTypes.Boolean,
  title: PropTypes.String,
  secondary_logo: PropTypes.Object,
  primary_logo: PropTypes.Object,
  tagline: PropTypes.String,
  handleShareCampaign: PropTypes.Function,
  is_published: PropTypes.Boolean,
};

export default Banner;
