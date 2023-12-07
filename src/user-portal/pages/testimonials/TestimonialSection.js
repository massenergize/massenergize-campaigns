import React from "react";
import TestimonialBox from "./TestimonialBox";
import { Col, Container, Row } from "react-bootstrap";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import CustomTabView from "../../../components/tab-view/CustomTabView";

function TestimonialSection({ sectionId }) {
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
          </div>

          <CustomTabView
            defaultTab="home-solar"
            data={[
              {
                title: (
                  <span
                    style={{
                      color: "var(--app-deep-green)",
                      fontWeight: "bold",
                    }}
                  >
                    <span>
                      <i className=" fa fa-pump" /> Heat Pump
                    </span>
                  </span>
                ),
                key: "heat-pump",
                component: <h1> this bruddah is short as hell</h1>,
              },
              {
                title: (
                  <span
                    style={{
                      color: "var(--app-deep-green)",
                      fontWeight: "bold",
                    }}
                  >
                    <span>
                      <i className=" fa fa-sun-o" /> Home Solar
                    </span>
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
                  <span
                    style={{
                      color: "var(--app-deep-green)",
                      fontWeight: "bold",
                    }}
                  >
                    <span>
                      <i className=" fa fa-home" /> Community Solar
                    </span>
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
