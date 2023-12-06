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
function OneTechMeetTheCoachesSection() {
  return (
    <div
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
          Meet the Coaches
        </SectionTitle>

        <Row style={{ marginTop: 50 }}>
          {[1, 3, 4].map((item, index) => {
            return (
              <Col key={index?.toString()} xs={4}>
                <OneCoach />
              </Col>
            );
          })}
        </Row>

        <div style={{}}>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is availa a typeface without
            relying on meaningful content. Lorem ipsum may be used as a
            placeholder before final copy is availa
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              className="touchable-opacity"
              style={{
                borderRadius: 55,
                padding: "8px 20px",
                fontWeight: "bold",
                background: "var(--app-deep-green)",
                borderWidth: 0,
              }}
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
