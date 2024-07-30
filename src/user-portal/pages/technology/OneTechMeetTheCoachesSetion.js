import React, { useRef, useState } from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Button, Col, Row } from "react-bootstrap";
import OneCoach from "../coaches/OneCoach";
import { ArrowButtons } from "../../../components/pieces/ArrowButtons";


function OneTechMeetTheCoachesSection({ toggleModal, sectionId, coaches, data, ref, staticT }) {
  const { title, description } = data || {};

  const scrollContainerRef = useRef(null);

  const hasScrollableCoaches = coaches?.length > 4;
  return (
    <div
      ref={ref}
      id={sectionId}
      className=" g-s-container"
      style={{ background: "var(--app-accent-1)", width: "100%" }}
    >
      <OptimumWrapper>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <SectionTitle className="mb-5" style={{ color: "black" }}>
              {title || "Meet the Coaches"}
            </SectionTitle>
          </div>

          {hasScrollableCoaches && <ArrowButtons style={{ marginLeft: "auto" }} containerRef={scrollContainerRef} />}
        </div>

        <Row
          ref={scrollContainerRef}
          style={{
            flexWrap: "nowrap",
            overflowX: "auto",
            overflowY: "hidden",
          }}
        >
          {coaches?.map((coach, index) => {
            return (
              <Col key={index?.toString()} xs={4} lg={3} className="coach-main">
                <OneCoach {...coach} />
              </Col>
            );
          })}
        </Row>

        <div className="coaches-description">
          <p className="body-font" dangerouslySetInnerHTML={{ __html: description }}></p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              className="touchable-opacity mt-5 body-font"
              style={{
                borderRadius: 55,
                padding: "12px 35px",
                fontWeight: "bold",
                background: "var(--app-main-color)",
                borderWidth: 0,
              }}
              onClick={() => toggleModal()}
            >
              {staticT?.button?.text || "Get Help"}
            </Button>
          </div>
        </div>
      </OptimumWrapper>
    </div>
  );
}

export default OneTechMeetTheCoachesSection;
