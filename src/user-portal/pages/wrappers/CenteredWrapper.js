import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function CenteredWrapper ({ children }) {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={{ span: 12, offset: 1 }}>{children}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default CenteredWrapper;
