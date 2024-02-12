import React from "react";
import EventBox from "./EventBox";
import { Col, Container, Row } from "react-bootstrap";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import CustomTabView from "../../../components/tab-view/CustomTabView";

function EventsSection({ sectionId, technologies }) {
  const eventsOfEachTech = technologies?.map(
    ({ events, id, name, is_icon, is_image, image, icon, campaign_technology }) => ({
      id,
      campaign_technology,
      events,
      is_icon,
      is_image,
      image,
      icon,
      name,
    }),
  );
  const firstOne = eventsOfEachTech[0];

  const intoTabs = eventsOfEachTech?.map(({ id, name, events }) => ({
    key: id,
    title: (
      <span style={{ color: "var(--app-deep-green)", fontWeight: "bold" }}>
        <span>
          <i className=" fa fa-pump" /> {name}
        </span>
      </span>
    ),
    component: (
      <Row style={{ marginTop: 50 }}>
        {events?.map((item) => {
          return (
            <Col key={item.id} xs={12} lg={3}>
              <EventBox {...item} />
            </Col>
          );
        })}
      </Row>
    ),
  }));
  return (
    <div
      id={sectionId}
      className="g-s-container"
      style={{
        margin: "40px 0px",
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
              Events
            </h2>
            <p>Click on any of the tabs to see events under each technology</p>

            <CustomTabView
              defaultTab={firstOne?.id}
              data={intoTabs}
              // data={[
              //   {
              //     title: (
              //       <span
              //         style={{
              //           color: "var(--app-deep-green)",
              //           fontWeight: "bold",
              //         }}
              //       >
              //         <span>
              //           <i className=" fa fa-heat" /> Heat Pump
              //         </span>
              //       </span>
              //     ),
              //     key: "heat-pump",
              //     component: <h1> this bruddah is short as hell</h1>,
              //   },
              //   {
              //     title: (
              //       <span
              //         style={{
              //           color: "var(--app-deep-green)",
              //           fontWeight: "bold",
              //         }}
              //       >
              //         <span>
              //           <i className=" fa fa-sun-o" /> Home Solar
              //         </span>
              //       </span>
              //     ),
              //     key: "home-solar",
              //     component: (
              //       <Row style={{ marginTop: 50 }}>
              //         {[1, 3, 4].map((item, index) => {
              //           return (
              //             <Col key={index?.toString()} xs={3}>
              //               <EventBox />
              //             </Col>
              //           );
              //         })}
              //       </Row>
              //     ),
              //   },
              //   {
              //     title: (
              //       <span
              //         style={{
              //           color: "var(--app-deep-green)",
              //           fontWeight: "bold",
              //         }}
              //       >
              //         <span>
              //           <i className=" fa fa-people" /> Community Solar
              //         </span>
              //       </span>
              //     ),
              //     key: "community-solar",
              //     component: <h1> this is the community solar my geee</h1>,
              //   },
              // ]}
            ></CustomTabView>
          </div>
        </Container>
      </CenteredWrapper>
    </div>
  );
}

export default EventsSection;
