import React from "react";
import EventBox from "./EventBox";
import { Col, Container, Row } from "react-bootstrap";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import CustomTabView from "../../../components/tab-view/CustomTabView";

function EventsSection() {
  return (
    <div
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
              Featured Events
            </h2>

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
                        <i className=" fa fa-heat" /> Heat Pump
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
                            <EventBox />
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
                        <i className=" fa fa-people" /> Community Solar
                      </span>
                    </span>
                  ),
                  key: "community-solar",
                  component: <h1> this is the community solar my geee</h1>,
                },
              ]}
            ></CustomTabView>
          </div>
        </Container>
      </CenteredWrapper>
    </div>
  );
}

export default EventsSection;
