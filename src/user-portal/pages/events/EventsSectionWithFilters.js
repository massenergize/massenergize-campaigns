import React, { useRef } from "react";
import EventBox from "./EventBox";
import { Col, Container, Row } from "react-bootstrap";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import CustomTabView from "../../../components/tab-view/CustomTabView";
import Filter from "../../../components/Filter";
import { mergeArrays } from "../../../utils/utils";
import { ArrowButtons } from "../../../components/pieces/ArrowButtons";
import OurParagraph from "../../../components/OurParagraph";

function EventsSectionWithFilters({ sectionId, technologies }) {
  const containerRef = useRef();
  // const eventsOfEachTech = technologies?.map(
  //   ({
  //     events,
  //     id,
  //     name,
  //     is_icon,
  //     is_image,
  //     image,
  //     icon,
  //     campaign_technology,
  //   }) => ({
  //     id,
  //     campaign_technology,
  //     events,
  //     is_icon,
  //     is_image,
  //     image,
  //     icon,
  //     name,
  //   })
  // );
  // const firstOne = eventsOfEachTech[0];

  let events = technologies?.map((tech) => tech?.events);
  events = mergeArrays(events);

  const renderEvents = (filters) => {
    let data = [];
    if (filters?.length)
      data = events?.filter((ev) => {
        const techsRelatedToEvent = ev?.campaign_technology?.map((t) => t.id); // pick only the campaign technology ids
        return filters.some((f) =>
          techsRelatedToEvent.includes(f.campaign_technology_id),
        );
      });
    else data = events;

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
              <EventBox {...item} />
            </Col>
          );
        })}
      </Row>
    );
  };

  // const intoTabs = eventsOfEachTech?.map(({ id, name, events }) => ({
  //   key: id,
  //   title: (
  //     <span
  //       style={{
  //         color: "var(--app-deep-green)",
  //         fontWeight: "bold",
  //       }}
  //     >
  //       <span>
  //         <i className=" fa fa-pump" /> {name}
  //       </span>
  //     </span>
  //   ),
  //   component: (
  //     <Row style={{ marginTop: 50 }}>
  //       {events?.map((item) => {
  //         return (
  //           <Col key={item.id} xs={12} lg={3}>
  //             <EventBox {...item} />
  //           </Col>
  //         );
  //       })}
  //     </Row>
  //   ),
  // }));

  const hasScrollableEvents = events?.length > 4;
  return (
    <div
      id={sectionId}
      className="g-s-container"
      style={{
        margin: "40px 0px",
        // padding: "100px 0px",
        background: "white",
        width: "100%",
      }}
    >
      <CenteredWrapper>
        <Container>
          <div className="row-flex t-with-filter-top">
            <h2
              style={{
                color: "var(--app-medium-green)",
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Featured Events
            </h2>

            {hasScrollableEvents && (
              <ArrowButtons
                containerRef={containerRef}
                style={{ marginLeft: "auto" }}
              />
            )}
          </div>
          <OurParagraph>
            Scroll from left to right to see more testimonials, or use the arrow
            buttons(top right) to scroll
          </OurParagraph>
          <Filter
            title="Filter events by"
            filterOptions={technologies}
            labelAccessor={(tech) => tech?.name}
            valueAccessor={(tech) => tech?.campaign_technology_id}
            render={renderEvents}
          />
        </Container>
      </CenteredWrapper>
    </div>
  );
}

export default EventsSectionWithFilters;
