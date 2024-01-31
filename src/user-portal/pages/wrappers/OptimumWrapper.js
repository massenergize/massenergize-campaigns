import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function OptimumWrapper ({ children, style }) {
  return (
    <Container style={style || {}}>
      <Row>
        <Col lg={{ span: 10, offset: 1 }}>{children}</Col>
      </Row>
    </Container>
  );
}

export default OptimumWrapper;
