import React, { useState } from "react";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getStaticText } from "../../../redux/actions/actions";

function CampaignNotLive({ campaign }) {
  const [show, setShow] = useState(true);

  const { inPreview: staticT } = getStaticText();
  if (campaign?.is_published || !show) return <></>;
  return (
    <Alert variant="warning mb-0">
      <Row>
        <Col className={"d-flex"}>
          <p className={"my-auto"}>
            <i className="fa fa-warning" style={{ marginRight: 10 }} />
            <i>{`'${campaign?.title || "..."}' ${staticT?.notice?.text}`}</i>
          </p>
        </Col>
        <Col sm="auto">
          <Button
            className={"close-btn"}
            style={{ borderRadius: "100%", padding: "0px 6px" }}
            variant={"dark"}
            onClick={() => setShow(false)}
          >
            <span className="fa fa-times" style={{ fontSize: 15 }}></span>
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
