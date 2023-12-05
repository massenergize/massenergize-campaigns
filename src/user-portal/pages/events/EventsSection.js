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
                            <EventBox />
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
          </div>
        </Container>
      </CenteredWrapper>
    </div>
    // <Container className="mt-5">
    //   <Row>
    //     <Col xs={3}>
    //       {/* Content for the first column */}
    //       <EventBox />
    //     </Col>
    //     <Col xs={6}>
    //       {/* Content for the second column */}
    //       <div className="bg-secondary text-white p-3">Column 2</div>
    //     </Col>
    //     <Col xs={3}>
    //       {/* Content for the third column */}
    //       <div className="bg-info text-white p-3">Column 3</div>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default EventsSection;
