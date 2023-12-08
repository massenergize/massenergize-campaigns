import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import OneCoach from "./OneCoach";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import CustomTabView from "../../../components/tab-view/CustomTabView";
import JoinUsForm from "../forms/JoinUsForm";
import GetHelpForm from "../forms/GetHelpForm";

function CoachesSection({ toggleModal, sectionId }) {
  return (
    <div
      id={sectionId}
      className="elevate-float-pro"
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
                            <OneCoach />
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

            <div style={{ width: "80%" }}>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is availa a
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is availa
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={() =>
                    toggleModal({
                      show: true,
                      icon: "fa-help",
                      component: () => <GetHelpForm />,
                      title: "Get Help",
                    })
                  }
                  className="touchable-opacity elevate-2 mt-2"
                  style={{
                    borderRadius: 55,
                    padding: "8px 27px",
                    fontWeight: "bold",
                    background: "var(--app-deep-green)",
                    borderWidth: 0,
                  }}
                >
                  Get Help
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </CenteredWrapper>
    </div>
  );
}

export default CoachesSection;
