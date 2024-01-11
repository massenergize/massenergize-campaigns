import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";
import TestimonialBox from "../testimonials/TestimonialBox";
import { ArrowButtons } from "../../../components/pieces/ArrowButtons";
import { AddNewTestimonial } from "../testimonials/TestimonialSection";
import { useNavigate } from "react-router-dom";

const dummies = [
  {
    icon: "fa-globe",
    title: "ENVIRONMENTALLY FRIENDLY",
    content:
      "1500s, when an unknown printer took a galley of type rised in the 1960s with the release of L1500s, when an unknown printer took a galley of type rised in the 1960s with the release of ",
  },
  {
    icon: "fa-lightbulb-o",
    title: "ECONOMIC BENEFITS ",
    content:
      "1500s, when an unknown printer took a galley of type rised in the 1960s with the release of L1500s, when an unknown printer took a galley of type rised in the 1960s with the release of ",
  },
  {
    icon: "fa-fire",
    title: "HEALTH & WELLNESS",
    content:
      "1500s, when an unknown printer took a galley of type rised in the 1960s with the release of L1500s, when an unknown printer took a galley of type rised in the 1960s with the release of ",
  },
  {
    icon: "fa-cog",
    title: "COMFORT",
    content:
      "1500s, when an unknown printer took a galley of type rised in the 1960s with the release of L1500s, when an unknown printer took a galley of type rised in the 1960s with the release of ",
  },
];
function OneTechTestimonialsSection ({ sectionId, testimonials, campaign }) {
  const navigator = useNavigate();
  const firstTestimonial = (testimonials || [])[0];
  const testimonialRoute = `/campaign/${campaign?.id}/technology/testimonial/${firstTestimonial?.id}?open=true`;

  return (
    <div
      id={sectionId}
      className="mt-5 g-s-container"
      style={{
        background: "white",
        width: "100%",
        // padding: "80px 0px",
        // minHeight: 200,
      }}
    >
      <OptimumWrapper>
        <div
          className="mb-5"
          style={{
            wdith: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SectionTitle style={{ margin: 0 }}>Testimonials</SectionTitle>

          <div style={{ marginLeft: "auto" }}>{/* <ArrowButtons /> */}</div>
        </div>

        <AddNewTestimonial onClick={() => navigator(testimonialRoute)} />
        <Row style={{ overflowX: "auto", flexWrap: "nowrap" }}>
          {testimonials.map((item, index) => {
            return (
              <Col key={index?.toString()} lg={4} className="mb-2">
                <TestimonialBox {...item} />
              </Col>
            );
          })}
        </Row>
      </OptimumWrapper>
    </div>
  );
}

export default OneTechTestimonialsSection;
