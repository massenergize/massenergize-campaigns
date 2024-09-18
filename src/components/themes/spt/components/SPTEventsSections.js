import React, { useRef } from "react";
import SPTSectionTitle from "./SPTSectionTitle";
import { ArrowButtons } from "../../../pieces/ArrowButtons";
import { Col, Row } from "react-bootstrap";
import EventBox from "../../../../user-portal/pages/events/EventBox";

function SPTEventsSections() {
  const containerRef = useRef();

  return (
    <div className="spt-section-padding spt-section-margin-top">
      <SPTSectionTitle>Events</SPTSectionTitle>

      <div className="row-flex" style={{ padding: "15px 0px" }}>
        <ArrowButtons
          containerRef={containerRef}
          style={{ marginLeft: "auto" }}
          arrowStyle={{ color: "var(--spt-main-color)" }}
        />
      </div>
      <Row ref={containerRef} style={{ flexWrap: "nowrap", overflowX: "auto", overflowY: "hidden" }}>
        {[3, 4, 5, 6, 7, 5].map((event) => {
          return (
            <Col key={event} xs={12} md={4} xl={3}>
              <EventBox />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default SPTEventsSections;
