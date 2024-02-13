import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate, formatTime, formatTimeRange, smartString } from "../../../utils/utils";
import { Col, Row } from "react-bootstrap";

function EventBox({ event, campaign_technology }) {
  const { campaign } = campaign_technology || {};

  const { name, image, start_date, end_date, id, event_type } = event || {};
  const navigator = useNavigate();

  function gotoEvent() {
    navigator(`/campaign/${campaign?.slug}/technology/event/${id}`);
  }

  return (
    <div className="border rounded-4 p-3 bg-white mb-3 h-100">
      {image?.url && (
        <img
          className={"rounded-3 w-100 cursor-pointer"}
          style={{ height: 180, objectFit: "cover", borderRadius: 5 }}
          src={image?.url}
          alt={"event"}
          role={"button"}
          tabIndex={0}
          onClick={gotoEvent}
        />
      )}
      <div>
        <h6
          style={{ textDecoration: "underline" }}
          className="touchable-opacity body-font mt-2 mb-1"
          role={"button"}
          tabIndex={0}
          onClick={() => gotoEvent()}
        >
          {smartString(name, 50) || "..."}
        </h6>

        <Row>
          <Col className={"pe-0"}>
            <p className="text-sm fw-medium text-accent-3">
              <span>{formatDate(start_date)}</span>
              <span className={"text-dark"}> &mdash; </span>
              <span>{formatDate(end_date)}</span>
            </p>
          </Col>
          <Col sm={"auto ps-0"}>
            <p className="text-sm fw-medium text-accent-3">
              <span className={"text-muted"}>{formatTime(start_date)}</span>
            </p>
          </Col>
        </Row>
        {event_type && (
          <Row>
            <p className="text-sm fw-medium" style={{ color: "var(--app-accent-3)" }}>
              <span>{event_type}</span>
            </p>
          </Row>
        )}
      </div>
    </div>
  );
}

export default EventBox;
