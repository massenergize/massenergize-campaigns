import React, { useState } from "react";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";

function CampaignNotLive({ campaign }) {
  const [show, setShow] = useState(true);

  if (campaign?.is_published || !show) return <></>;
  return (
    <Alert variant="warning mb-0">
      <Row>
        <Col className={"d-flex"}>
          <p className={"my-auto"}>
            <i className="fa fa-warning" style={{ marginRight: 10 }} />
            <i>{`This campaign '${
              campaign?.title || "..."
            }' is not published yet. Admins are still working on it. Please come back later when its complete...`}</i>
          </p>
        </Col>
        <Col sm="auto">
          <Button className={"close-btn"} variant={"dark"} onClick={() => setShow(false)}>
            &times;
          </Button>
        </Col>
      </Row>
    </Alert>
  );
}

const mapState = (state) => {
  return { campaign: state.campaign };
};
export default connect(mapState)(CampaignNotLive);
