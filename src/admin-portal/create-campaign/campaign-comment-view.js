import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Comments from "src/components/admin-components/Comments";

export const CampaignCommentView = ({ campaign }) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Comments campaign={campaign} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
