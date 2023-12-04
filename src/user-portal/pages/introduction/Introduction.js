import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Introduction() {
  return (
    <div style={{ marginTop: 80 }}>
      <Container className="mt-5">
        <Row>
          <Col xs={3}>
            {/* Content for the first column */}
            <div className="bg-primary text-white p-3">Column 1</div>
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
    </div>
  );
}

export default Introduction;
