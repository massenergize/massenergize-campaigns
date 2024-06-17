import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate, formatTime, smartString } from "../../../utils/utils";
import { Col, Row } from "react-bootstrap";

function EventBox({ event, campaign_technology }) {
  const { campaign } = campaign_technology || {};

  const { name, image, start_date, end_date, id, event_type } = event || {};
  const navigator = useNavigate();

  function gotoEvent() {
    navigator(`/campaign/${campaign?.slug}/technology/event/${id}`);
  }

  return (
    <div className="card border rounded-4 p-3 bg-white mb-3 h-100 d-flex flex-col justify-content-between">
      <div className="card-body p-0">
        {image?.url ? (
          <img
            className={"rounded-3 w-100 cursor-pointer"}
            style={{ height: 180, objectFit: "contain", borderRadius: 5, background:'grey', backgroundColor:'#f8f8f8' }}
            src={image?.url}
            alt={"event"}
            role={"button"}
            tabIndex={0}
            onClick={gotoEvent}
          />
        ) : (
          <img
            className={"rounded-3 w-100 cursor-pointer"}
            style={{ height: 180, objectFit: "cover", borderRadius: 5 }}
            src="/img/fallback-img.png"
            alt={"event"}
            role={"button"}
            tabIndex={0}
            onClick={gotoEvent}
          />
        )}
        <div>
          <h6
            className="touchable-opacity body-font mt-2 mb-1"
            role={"button"}
            tabIndex={0}
            onClick={() => gotoEvent()}
          >
            {smartString(name, 50) || "..."}
          </h6>
        </div>
      </div>
      <div className="card-footer border-0 bg-transparent p-0">
        <Row>
          <Col className={"pe-0"}>
            <p className="text-sm fw-medium text-accent mb-0">
              <span>{event_type}</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className={"pe-0"}>
            <p className="text-sm fw-medium text-accent-3 mb-0">
              <span>{formatDate(start_date)}</span>
              {/*<span className={"text-dark"}> &mdash; </span>
              <span>{formatDate(end_date)}</span>*/}
            </p>
          </Col>
          <Col sm={"auto ps-0"}>
            <p className="text-sm fw-medium text-accent-3 mb-0">
              <span className={"text-muted"}>{formatTime(start_date, "K:mm aa")}</span>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default EventBox;
