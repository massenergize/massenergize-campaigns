import React, { useRef } from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";
import TestimonialBox from "../testimonials/TestimonialBox";
import EventBox from "../events/EventBox";
import { ArrowButtons } from "../../../components/pieces/ArrowButtons";

function OneTechEventSection({ events, style, wrapperStyle }) {
  const containerRef = useRef();

  if (!events?.length) return <></>;
  return (
    <div
      className="mt-5 g-s-container elevate-float-pro"
      style={{
        background: "white",
        width: "100%",
        ...(style || {}),
      }}
    >
      <OptimumWrapper>
        <div
          className="mb-3"
          style={{
            wdith: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <SectionTitle style={{ margin: 0 }}>Events</SectionTitle>

          <div style={{ marginLeft: "auto" }}>
            <ArrowButtons containerRef={containerRef} />
          </div>
        </div>

        <Row
          ref={containerRef}
          style={{
            overflowX: "auto",
            flexWrap: "nowrap",
            ...(wrapperStyle || {}),
          }}
        >
          {events.map((item, index) => {
            return (
              <Col key={index?.toString()} lg={4} className="mb-2">
                <EventBox {...item} />
              </Col>
            );
          })}
        </Row>
      </OptimumWrapper>
    </div>
  );
}

export default OneTechEventSection;
