import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";
import SmartRichText from "../../../components/SmartRichText";
import * as PropTypes from "prop-types";

const dummies = [
  {
    icon: "fa-globe",
    title: "ENVIRONMENTALLY FRIENDLY",
    content:
      "1500s, when an unknown printer took a galley of type rised in the 1960s with the release of L1500s, when an unknown printer took a galley of type rised in the 1960s with the release of ",
  },
  {
    icon: "fa-lightbulb-o",
    title: "ECONOMIC BENEFITS ",
    content:
      "1500s, when an unknown printer took a galley of type rised in the 1960s with the release of L1500s, when an unknown printer took a galley of type rised in the 1960s with the release of ",
  },
  {
    icon: "fa-fire",
    title: "HEALTH & WELLNESS",
    content:
      "1500s, when an unknown printer took a galley of type rised in the 1960s with the release of L1500s, when an unknown printer took a galley of type rised in the 1960s with the release of ",
  },
  {
    icon: "fa-cog",
    title: "COMFORT",
    content:
      "1500s, when an unknown printer took a galley of type rised in the 1960s with the release of L1500s, when an unknown printer took a galley of type rised in the 1960s with the release of ",
  },
];

function ReasonCard(props) {
  return (
    <div className={"w-100 p-3 border h-100 rounded-4"}>
      <Row>
        <Col className={"d-flex"}>
          <img
            src={props.image?.url || "/img/fallback-img.png"}
            className={"rounded-2 mx-auto"}
            style={{ objectFit: "contain", height: 70, width: 70 }}
            alt={props.image?.name}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <h6
            className="mt-3 mb-2 subheader-font"
            style={{
              color: "var(--app-accent-3)",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            {props.title || {}}
          </h6>
          <div
            className="body-font lh-sm"
            dangerouslySetInnerHTML={{ __html: props.html }}
            style={{ textAlign: "justify" }}
          ></div>
        </Col>
      </Row>
    </div>
  );
}

function ReasonCardV2({ image, title, html }) {
  return (
    <div className={"w-100 p-3 border h-100 rounded-4"}>
      <Row>
        <Col sm={"auto"}>
          <img
            src={image?.url || "/img/fallback-img.png"}
            className={"rounded mx-auto"}
            style={{ objectFit: "contain", height: 50, width: 50 }}
            alt={image?.name}
          />
        </Col>
        <Col>
          <h6
            className="mb-2 subheader-font"
            style={{
              color: "var(--app-accent-3)",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            {title || {}}
          </h6>
          <div
            className="body-font lh-sm"
            dangerouslySetInnerHTML={{ __html: html }}
            style={{ textAlign: "justify" }}
          ></div>
        </Col>
      </Row>
    </div>
  );
}

function ReasonCardV3(props) {
  return (
    <div className={"w-100 p-3  h-100 rounded-4"}>
      <Row>
        <Col className={"d-flex"}>
          <img
            src={props.image?.url || "/img/fallback-img.png"}
            className={"rounded-2 mx-auto"}
            style={{ objectFit: "contain", height: 70, width: 70 }}
            alt={props.image?.name}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <h6 className="mt-3 mb-2 subheader-font text-center text-capitalize fw-bold text-accent-3">
            {props.title || {}}
          </h6>
          <div
            className="body-font lh-sm"
            dangerouslySetInnerHTML={{ __html: props.html }}
            style={{ textAlign: "justify" }}
          ></div>
        </Col>
      </Row>
    </div>
  );
}

function WhySection({ sectionId, overview, campaignName, overview_title }) {
  if (!overview?.length) return <></>;
  return (
    <div
      id={sectionId}
      className="mt-5 elevate-float-pro g-s-container"
      style={{
        background: "white",
        width: "100%",
      }}
    >
      <OptimumWrapper>
        {/* <SectionTitle className="mb-5">{overview_title || `Why ${campaignName}?`}</SectionTitle> BRING IT BACK WHEN THERE IS AN ADMIN SECTION TO FIX IT */}
        <SectionTitle className="mb-3">{`Why ${campaignName}?`}</SectionTitle>

        <Row>
          {(overview || []).map((item, index) => {
            const { image, title, description } = item || {};
            return (
              <Col
                lg={6}
                className="overview-item d-flex align-items-center justify-content-center mb-4"
                key={index?.toString()}
              >
                <ReasonCardV3 image={image} title={title} html={description} />
              </Col>
            );
          })}
        </Row>
      </OptimumWrapper>
    </div>
  );
}

export default WhySection;
