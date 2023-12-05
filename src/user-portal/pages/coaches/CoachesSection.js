import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OneCoach from "./OneCoach";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import CustomTabView from "../../../components/tab-view/CustomTabView";

function CoachesSection() {
  return (
    <div
      style={{
        margin: "40px 0px",
        padding: "100px 0px",
        background: "antiquewhite",
        width: "100%",
      }}
    >
      <CenteredWrapper>
        <Container>
          <div>
            <h2
              style={{
                color: "black",
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Meet The Coaches
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
                            <OneCoach />
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
            <p style={{ width: "80%", marginTop: 10 }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is availa a typeface
              without relying on meaningful content. Lorem ipsum may be used as
              a placeholder before final copy is availa
            </p>
          </div>
        </Container>
      </CenteredWrapper>
    </div>
  );
}

export default CoachesSection;
