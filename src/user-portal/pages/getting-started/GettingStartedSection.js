import React from "react";
import OneBox from "./OneBox";
import { Col, Container, Row } from "react-bootstrap";

const dummies = [
  {
    key: "heat-pump",
    icon: "fa-fire",
    text: "Some light paragraph bi here and lets see what is going on",
    title: "Heat Pump",
  },
  {
    key: "community-solar",
    icon: "fa-sun-o",
    text: "Some light paragraph bi here and lets see what is going on",
    title: "Home Solar",
  },
  {
    key: "heat-pump",
    icon: "fa-cog",
    text: "Some light paragraph bi here and lets see what is going on",
    title: "Community Solar",
  },
];
function GettingStartedSection() {
  return (
    <div
      className="mt-5"
      style={{ background: "var(--app-medium-green)", padding: "130px 20px" }}
    >
      <Container>
        <Row>
          <Col lg={{ span: 12, offset: 1 }}>
            <h2 style={{ color: "white", fontWeight: "bold" }}>
              Getting Started
            </h2>
            <p style={{ color: "white", marginBottom: 20 }}>
              Explore the actions we have under these technologies and get
              started right away!
            </p>
            <Row>
              {dummies.map((box, index) => {
                return (
                  <Col key={index?.toString()} xs={3}>
                    <OneBox {...box} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GettingStartedSection;
