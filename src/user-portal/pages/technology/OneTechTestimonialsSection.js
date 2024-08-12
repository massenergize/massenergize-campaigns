import React, { useRef } from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";
import TestimonialBox from "../testimonials/TestimonialBox";
import { ArrowButtons } from "../../../components/pieces/ArrowButtons";
import { AddNewTestimonial } from "../testimonials/TestimonialSection";
import { useNavigate } from "react-router-dom";
import { TESTIMONIAL_FORM_SHOW_KEY } from "../testimonials/TestimonialSectionWithFilters";
import { addUrlSearchParams } from "../../../utils/utils";

function OneTechTestimonialsSection({ sectionId, testimonials, campaign, links, staticT }) {
  const containerRef = useRef();
  const navigator = useNavigate();

  const home = links?.find((item) => item?.key === "home");
  const testimonialRoute = addUrlSearchParams(home?.url, {
    section: "testimonial",
    show: TESTIMONIAL_FORM_SHOW_KEY,
  });
  // const testimonialRoute = `${home?.url}?section=testimonial&show=${TESTIMONIAL_FORM_SHOW_KEY}`;
  // const testimonialRoute = `/campaign/${campaign?.slug}/technology/testimonial/${firstTestimonial?.id}?open=true`;

  const hasScrollableTestimonials = testimonials?.length > 3;
  return (
    <div
      id={sectionId}
      className="g-s-container"
      style={{
        background: "white",
        width: "100%",
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
            // justifyContent: "center",
          }}
        >
          <SectionTitle style={{ margin: 0 }}>{staticT?.title?.text || "Testimonials"}</SectionTitle>

          {hasScrollableTestimonials && (
            <div style={{ marginLeft: "auto" }}>
              <ArrowButtons containerRef={containerRef} />
            </div>
          )}
        </div>

        <AddNewTestimonial
          onClick={() => navigator(testimonialRoute)}
          text={staticT?.call_to_add_testimonial?.text || ""}
        />
        <Row ref={containerRef} style={{ overflowX: "auto", flexWrap: "nowrap" }}>
          {testimonials.map((item, index) => {
            return (
              <Col key={index?.toString()} lg={4} className="mb-2">
                <TestimonialBox {...item} staticT={staticT} />
              </Col>
            );
          })}
        </Row>
      </OptimumWrapper>
    </div>
  );
}

export default OneTechTestimonialsSection;
