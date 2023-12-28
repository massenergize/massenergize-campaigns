import React from "react";
import TestimonialBox from "./TestimonialBox";
import { Col, Container, Row } from "react-bootstrap";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import CustomTabView from "../../../components/tab-view/CustomTabView";

function TestimonialSection({ sectionId, technologies, defaultTab }) {
  const testimonialsOfEachTech = technologies?.map(
    ({
      campaign_technology,
      testimonials,
      is_icon,
      is_image,
      image,
      icon,
      name,
      id,
    }) => ({
      id,
      campaign_technology,
      testimonials,
      is_icon,
      is_image,
      image,
      icon,
      name,
    })
  );
  const firstOne = testimonialsOfEachTech[0];

  const intoTabs = testimonialsOfEachTech?.map(
    ({ id, name, testimonials }) => ({
      key: id,
      title: (
        <span
          style={{
            color: "var(--app-deep-green)",
            fontWeight: "bold",
          }}
        >
          <span>
            <i className=" fa fa-pump" /> {name}
          </span>
        </span>
      ),
      component: (
        <Row style={{ marginTop: 50 }}>
          {testimonials?.map((item) => {
            return (
              <Col key={item.id} xs={12}>
                <TestimonialBox {...item} />
              </Col>
            );
          })}
        </Row>
      ),
    })
  );

  return (
    <div
      id={sectionId}
      className="elevate-float-pro"
      style={{
        margin: "40px 0px",
        padding: "100px 0px",
        background: "white",
        width: "100%",
      }}
    >
      <CenteredWrapper>
        <Container>
          <div>
            <h2
              style={{
                color: "var(--app-medium-green)",
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Testimonials
            </h2>
            <p>
              Click on any of the tabs to see testimonials under each technology
            </p>
          </div>

          <CustomTabView
            defaultTab={defaultTab || firstOne?.id}
            data={intoTabs}
          ></CustomTabView>
        </Container>
      </CenteredWrapper>
    </div>
  );
}

export default TestimonialSection;
