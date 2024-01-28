import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";

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
function WhySection({ sectionId, overview, campaignName, overview_title }) {
  if (!overview?.length) return <></>;
  return (
    <div
      id={sectionId}
      className="mt-5 elevate-float-pro g-s-container"
      style={{
        background: "white",
        width: "100%",
        // padding: "80px 0px",
        // minHeight: 200,
      }}
    >
      <OptimumWrapper>
        {/* <SectionTitle className="mb-5">{overview_title || `Why ${campaignName}?`}</SectionTitle> BRING IT BACK WHEN THERE IS AN ADMIN SECTION TO FIX IT */}
        <SectionTitle className="mb-5">{`Why ${campaignName}?`}</SectionTitle>

        <Row>
          {(overview || []).map((item, index) => {
            const { image, title, description } = item || {};
            return (
              <Col
                className="overview-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={index?.toString()}
                lg={6}
                gap={3}
              >
                <img src={image?.url} style={{ height: 70, width: 70, objectFit: "contain" }} alt={image?.name} />
                <h6
                  className="mt-3 mb-3"
                  style={{
                    color: "var(--app-accent-3)",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {title || {}}
                </h6>
                <p
                  dangerouslySetInnerHTML={{ __html: description }}
                  style={{ textAlign: "justify", lineHeight: "1.5" }}
                ></p>
              </Col>
            );
          })}
        </Row>
      </OptimumWrapper>
    </div>
  );
}

export default WhySection;
