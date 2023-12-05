import React from "react";
import OneBox from "./OneBox";
import { Col, Container, Row } from "react-bootstrap";

function GettingStartedSection() {
  return (
    <div
      className="mt-5"
      style={{ background: "var(--app-medium-green)", padding: "50px 20px" }}
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
              {[1, 2, 3].map((item, index) => {
                return (
                  <Col key={index?.toString()} xs={3}>
                    <OneBox />
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
