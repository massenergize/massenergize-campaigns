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
    key: "home-solar",
    icon: "fa-sun-o",
    text: "Some light paragraph bi here and lets see what is going on",
    title: "Home Solar",
  },
  {
    key: "community-solar",
    icon: "fa-cog",
    text: "Some light paragraph bi here and lets see what is going on",
    title: "Community Solar",
  },
];
function GettingStartedSection({ sectionId, technologies }) {
  // console.log("these are the technologies", technologies);
  return (
    <div
      id={sectionId}
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
              {technologies?.map((box, index) => {
                return (
                  <Col key={box.id} xs={3}>
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
