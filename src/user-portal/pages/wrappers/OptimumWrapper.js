import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function OptimumWrapper({ children }) {
  return (
    <Container>
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>{children}</Col>
      </Row>
    </Container>
  );
}

export default OptimumWrapper;
