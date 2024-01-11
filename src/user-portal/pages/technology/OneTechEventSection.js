import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";
import TestimonialBox from "../testimonials/TestimonialBox";
import EventBox from "../events/EventBox";

function OneTechEventSection({ events, style, wrapperStyle }) {
  if (!events?.length) return <></>;
  return (
    <div
      //   id={sectionId}
      className="mt-5 g-s-container elevate-float-pro"
      style={{
        background: "white",
        width: "100%",
        // padding: "80px 0px",
        // minHeight: 200,
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
          <SectionTitle style={{ margin: 0 }}>Featured Events</SectionTitle>

          {/* <div style={{ marginLeft: "auto" }}><ArrowButtons /></div> */}
        </div>

        <Row
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
