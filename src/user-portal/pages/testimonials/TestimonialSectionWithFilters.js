import React, { useEffect, useRef, useState } from "react";
import TestimonialBox from "./TestimonialBox";
import { Col, Container, Row } from "react-bootstrap";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import CustomTabView from "../../../components/tab-view/CustomTabView";
import { useNavigate } from "react-router-dom";
import Filter from "../../../components/Filter";
import { AddNewTestimonial } from "./TestimonialSection";
import { fetchUrlParams, mergeArrays } from "../../../utils/utils";
import { ArrowButtons } from "../../../components/pieces/ArrowButtons";
import OurParagraph from "../../../components/OurParagraph";
import NewTestimonialForm from "./NewTestimonialForm";
import SectionTitle from "../../../components/pieces/SectionTitle";

export const TESTIMONIAL_FORM_SHOW_KEY = "testimonial-form";
function TestimonialSectionWithFilters({ staticT, sectionId, technologies, defaultTab, campaign, protectedFunction }) {
  const [showForm, setShowForm] = useState(false);
  const containerRef = useRef();
  const navigator = useNavigate();
  const testimonialsOfEachTech = technologies?.map(
    ({ campaign_technology, testimonials, is_icon, is_image, image, icon, name, id }) => ({
      id,
      campaign_technology,
      testimonials,
      is_icon,
      is_image,
      image,
      icon,
      name,
    }),
  );
  const firstOne = testimonialsOfEachTech[0];
  const firstTestimonial = (firstOne?.testimonials || [])[0];
  // const testimonialRoute = `/campaign/${campaign?.slug}/technology/testimonial/${firstTestimonial?.id}?open=true`;

  let allTestimonials = technologies?.map((tech) => tech?.testimonials);
  allTestimonials = mergeArrays(allTestimonials);

  const show = fetchUrlParams("show");

  const addTestimonial = () => {
    const options = {
      cb: () => setShowForm(!showForm),
      registrationOptions: {
        callbackOnSubmit: ({ close }) => {
          setShowForm(!showForm);
          close && close();
        },
      },
    };
    protectedFunction(options);
  };

  useEffect(() => {
    if (show === TESTIMONIAL_FORM_SHOW_KEY) return addTestimonial();
  }, [show]);

  const renderTestimonials = (filters) => {
    let data = [];
    if (filters?.length)
      data = allTestimonials?.filter((t) =>
        filters.some((f) => f.campaign_technology_id === t.campaign_technology?.id),
      );
    else data = allTestimonials;

    return (
      <Row
        ref={containerRef}
        style={{
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        {data?.map((item) => {
          return (
            <Col key={item.id} xs={12} lg={3}>
              <TestimonialBox {...item} staticT={staticT} />
            </Col>
          );
        })}
      </Row>
    );
  };

  const noTestimonials = !allTestimonials?.length;
  const hasScrollableTestimonials = allTestimonials?.length > 4;

  return (
    <div
      id={sectionId}
      className="elevate-float-pro g-s-container"
      style={{
        margin: "0px",
        background: "white",
        width: "100%",
      }}
    >
      <CenteredWrapper>
        <Container>
          <div className="row-flex t-with-filter-top">
            <div>
              <SectionTitle>{staticT?.title?.text || "Testimonials"}</SectionTitle>
              {/* <h2
                className="header-font"
                style={{
                  color: "var(--app-accent-3)",
                  fontWeight: "bold",
                  marginBottom: 20,
                }}
              >
                Testimonials
              </h2> */}
              <AddNewTestimonial
                icon={showForm ? "minus" : "plus"}
                text={
                  showForm
                    ? staticT?.call_to_hide_testimonial?.text || "Hide testimonial form"
                    : staticT?.call_to_add_testimonial?.text || "Add your testimonial here"
                }
                onClick={() => {
                  addTestimonial();
                }}
              />
            </div>

            {!noTestimonials && !showForm && hasScrollableTestimonials && (
              <ArrowButtons containerRef={containerRef} style={{ marginLeft: "auto" }} />
            )}
          </div>

          {showForm && <NewTestimonialForm cancel={() => setShowForm(!showForm)} />}

          {!showForm && !noTestimonials && (
            <>
              {hasScrollableTestimonials && (
                <OurParagraph>
                  {staticT?.scrollable?.text ||
                    " Scroll from left to right to see more testimonials, or use the arrow buttons(top right) to scroll"}
                </OurParagraph>
              )}
              <Filter
                title={staticT?.call_to_filter?.text || "Filter testimonials by"}
                filterOptions={technologies}
                labelAccessor={(tech) => tech?.name}
                valueAccessor={(tech) => tech?.campaign_technology_id}
                render={renderTestimonials}
              />
            </>
          )}
        </Container>
      </CenteredWrapper>
    </div>
  );
}

export default TestimonialSectionWithFilters;
