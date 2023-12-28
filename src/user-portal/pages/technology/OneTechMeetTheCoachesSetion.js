import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Button, Col, Row } from "react-bootstrap";
import OneCoach from "../coaches/OneCoach";

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
function OneTechMeetTheCoachesSection({
  toggleModal,
  sectionId,
  coaches,
  data,
  ref,
}) {
  const { title, description } = data || {};
  return (
    <div
      ref={ref}
      id={sectionId}
      className="mt-5 elevate-float-pro"
      style={{
        background: "antiquewhite",
        width: "100%",
        padding: "80px 0px",
        minHeight: 200,
      }}
    >
      <OptimumWrapper>
        <SectionTitle className="mb-5" style={{ color: "black" }}>
          {title || "Meet the Coaches"}
        </SectionTitle>

        <Row style={{ marginTop: 50 }}>
          {coaches?.map((coach, index) => {
            return (
              <Col key={index?.toString()} xs={4} className="coach-main">
                <OneCoach {...coach} />
              </Col>
            );
          })}
        </Row>

        <div
          // style={{ textTransform: "justify", marginTop: 20 }}
          className="coaches-description"
        >
          <p>{description}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              className="touchable-opacity elevate-2 mt-5"
              style={{
                borderRadius: 55,
                padding: "8px 20px",
                fontWeight: "bold",
                background: "var(--app-deep-green)",
                borderWidth: 0,
              }}
              onClick={() => toggleModal()}
            >
              Get Help{" "}
            </Button>
          </div>
        </div>
      </OptimumWrapper>
    </div>
  );
}

export default OneTechMeetTheCoachesSection;
