import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import OneCoach from "./OneCoach";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import CustomTabView from "../../../components/tab-view/CustomTabView";
import JoinUsForm from "../forms/JoinUsForm";
import GetHelpForm from "../forms/GetHelpForm";

function CoachesSection({ toggleModal, sectionId, technologies }) {
  const coachesForEachTech = technologies?.map(
    ({
      campaign_technology,
      coaches,
      is_icon,
      is_image,
      image,
      icon,
      name,
      id,
    }) => ({
      id,
      campaign_technology,
      coaches,
      is_icon,
      is_image,
      image,
      icon,
      name,
    })
  );
  const firstOne = coachesForEachTech[0];

  const intoTabs = coachesForEachTech?.map(({ id, name, coaches }) => ({
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
      <Row className="coach-main">
        {coaches?.map((item) => {
          return (
            <Col key={item.id} xs={3}>
              <OneCoach {...item} />
            </Col>
          );
        })}
      </Row>
    ),
  }));
  return (
    <div
      id={sectionId}
      className="elevate-float-pro g-s-container"
      style={{
        margin: "40px 0px",
        // padding: "100px 0px",
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
            <p>Click on any of the tabs to see coaches under each technology</p>

            <CustomTabView
              defaultTab={firstOne?.id}
              data={intoTabs}
            ></CustomTabView>

            <div className="coaches-description">
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
                      component: ({ close }) => <GetHelpForm close={close} />,
                      fullControl: true,
                      title: "Get Help",
                    })
                  }
                  className="touchable-opacity elevate-2 mt-5"
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
