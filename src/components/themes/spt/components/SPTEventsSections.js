import React, { useRef } from "react";
import SPTSectionTitle from "./SPTSectionTitle";
import { ArrowButtons } from "../../../pieces/ArrowButtons";
import { Col, Row } from "react-bootstrap";
import EventBox from "../../../../user-portal/pages/events/EventBox";
import { getStaticText } from "../../../../redux/actions/actions";

function SPTEventsSections({ campaign, technology }) {
  const { pages } = getStaticText();
  const { sections } = pages?.homepage || {};
  const { title } = sections?.events_section || {};
  const containerRef = useRef();
  const { events } = technology || {};
  const hasScrollableEvents = events?.length > 4;

  return (
    <div className="spt-section-padding spt-section-margin-top">
      <SPTSectionTitle>{title?.text}</SPTSectionTitle>

      <div className="row-flex" style={{ padding: "15px 0px" }}>
        {hasScrollableEvents && (
          <ArrowButtons
            containerRef={containerRef}
            style={{ marginLeft: "auto" }}
            arrowStyle={{ color: "var(--spt-main-color)" }}
          />
        )}
      </div>
      <Row ref={containerRef} style={{ flexWrap: "nowrap", overflowX: "auto", overflowY: "hidden" }}>
        {events?.map((event, index) => {
          return (
            <Col key={event?.id || index?.toString()} xs={12} md={4} xl={3}>
              <EventBox {...event} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default SPTEventsSections;
