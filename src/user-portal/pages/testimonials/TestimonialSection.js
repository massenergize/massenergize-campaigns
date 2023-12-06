import React from "react";
import TestimonialBox from "./TestimonialBox";
import { Col, Container, Row } from "react-bootstrap";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import CustomTabView from "../../../components/tab-view/CustomTabView";

function TestimonialSection() {
  return (
    <div
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
          </div>

          <CustomTabView
            defaultTab="heat-pump"
            data={[
              {
                title: (
                  <span>
                    <i className=" fa fa-home" /> Home
                  </span>
                ),
                key: "heat-pump",
                component: <h1> this bruddah is a genius</h1>,
              },
              {
                title: (
                  <span>
                    <i className=" fa fa-sun-o" /> Home Solar
                  </span>
                ),
                key: "home-solar",
                component: (
                  <Row style={{ marginTop: 50 }}>
                    {[1, 3, 4].map((item, index) => {
                      return (
                        <Col key={index?.toString()} xs={3}>
                          <TestimonialBox />
                        </Col>
                      );
                    })}
                  </Row>
                ),
              },
              {
                title: (
                  <span>
                    <i className=" fa f" /> Community Solar
                  </span>
                ),
                key: "community-solar",
                component: <h1> this is the community solar my geee</h1>,
              },
            ]}
          ></CustomTabView>
        </Container>
      </CenteredWrapper>
    </div>
  );
}

export default TestimonialSection;
