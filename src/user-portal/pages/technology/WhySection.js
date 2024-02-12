import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";
import SmartRichText from "../../../components/SmartRichText";

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
      }}
    >
      <OptimumWrapper>
        {/* <SectionTitle className="mb-5">{overview_title || `Why ${campaignName}?`}</SectionTitle> BRING IT BACK WHEN THERE IS AN ADMIN SECTION TO FIX IT */}
        <SectionTitle className="mb-5">{`Why ${campaignName}?`}</SectionTitle>

        <Row>
          {(overview || []).map((item, index) => {
            const { image, title, description } = item || {};
            return (
              <Col lg={6} className="overview-item d-flex align-items-center justify-content-center mb-4" key={index?.toString()}>
                <div className={"w-100 p-3 border h-100 rounded-4"}>
                  <img src={image?.url || "/img/fallback-img.png"} className={"w-100 rounded-2"} style={{ objectFit: "cover", minHeight : 150, maxHeight : 220 }} alt={image?.name}/>
                  <h6
                    className="mt-3 mb-2 subheader-font"
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
                    dangerouslySetInnerHTML={{ __html: description }}
                    style={{ textAlign: "justify", }}
                  ></div>
                </div>
              </Col>
            );
          })}
        </Row>
      </OptimumWrapper>
    </div>
  );
}

export default WhySection;
