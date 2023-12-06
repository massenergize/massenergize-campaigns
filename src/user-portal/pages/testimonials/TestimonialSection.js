import React from "react";
import TestimonialBox from "./TestimonialBox";
import { Col, Container, Row } from "react-bootstrap";

function TestimonialSection() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={3}>
          {/* Content for the first column */}
          <TestimonialBox />
        </Col>
        <Col xs={6}>
          {/* Content for the second column */}
          <div className="bg-secondary text-white p-3">Column 2</div>
        </Col>
        <Col xs={3}>
          {/* Content for the third column */}
          <div className="bg-info text-white p-3">Column 3</div>
        </Col>
      </Row>
    </Container>
  );
}

export default TestimonialSection;
