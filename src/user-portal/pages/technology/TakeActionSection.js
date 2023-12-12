import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const dummies = [
  {
    icon: "fa-globe",
    title: "Find A Vendor",
    actionText: "Vendors",
    content: "Get in touch with vendors the vendors!",
    url: "vendors",
  },
  {
    icon: "fa-lightbulb-o",
    title: "Ask A Question ",
    actionText: "Get Help",
    content:
      "Get to know the coaches, and ask all the questions you need to get started!",
    url: "coaches",
  },

  {
    icon: "fa-money",
    title: "Show Me The Money",
    actionText: "Incentives",
    content: "It gets better! See all the incentives available to you.",
    url: "incentives",
  },
];
function TakeAtionSetion({ sectionId, scrollToSection }) {
  const navigator = useNavigate();
  return (
    <div
      id={sectionId}
      className="mt-5 elevate-float-pro"
      style={{
        background: "var(--app-medium-green)",
        width: "100%",
        padding: "80px 0px",
        minHeight: 200,
      }}
    >
      <OptimumWrapper>
        <SectionTitle className="mb-3" style={{ color: "white" }}>
          Take Action!
        </SectionTitle>
        <Row>
          {dummies.map((item, index) => {
            return (
              <Col
                className="elevate-float-pro m-3"
                style={{
                  background: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 310,
                  padding: 30,
                  borderRadius: 3,
                }}
                key={index?.toString()}
                lg={3}
              >
                <i
                  className={`fa ${item.icon} mb-1 mt-2`}
                  style={{ fontSize: 60, color: "var(--app-medium-green)" }}
                />
                <h6
                  className="mt-2 mb-2"
                  style={{
                    color: "var(--app-medium-green)",
                    textTransform: "uppercase",
                    textAlign: "center",
                    fontSize: 13,
                  }}
                >
                  {item.title}
                </h6>
                <p
                  style={{
                    fontSize: "small",
                    textAlign: "center",
                  }}
                >
                  {item.content}
                </p>

                <div
                  onClick={() => scrollToSection(item.url)}
                  className="elevate-2 touchable-opacity"
                  style={{
                    padding: "7px 30px",
                    color: "white",
                    background: "var(--app-deep-green)",
                    borderRadius: 500,
                  }}
                >
                  <p style={{ margin: 0, fontSize: 13, fontWeight: "bold" }}>
                    {item.actionText}
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </OptimumWrapper>
    </div>
  );
}

export default TakeAtionSetion;
