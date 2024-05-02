import React, { useRef } from "react";
import EventBox from "./EventBox";
import { Col, Container, Row } from "react-bootstrap";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import CustomTabView from "../../../components/tab-view/CustomTabView";
import Filter from "../../../components/Filter";
import { mergeArrays, sortEvents } from "../../../utils/utils";
import { ArrowButtons } from "../../../components/pieces/ArrowButtons";
import OurParagraph from "../../../components/OurParagraph";
import SectionTitle from "../../../components/pieces/SectionTitle";

function EventsSectionWithFilters({ sectionId, technologies }) {
  const containerRef = useRef();

  let events = technologies?.map((tech) => tech?.events);
  events = mergeArrays(events, (item, obj) => item?.event?.id === obj?.event?.id);
  const renderEvents = (filters) => {
    let data = [];
    if (filters?.length)
      data = events?.filter((ev) => {
        return filters.some((f) => f.campaign_technology_id === ev?.campaign_technology?.id);
      });
    else data = events;

    data = sortEvents(data)
    return (
      <Row
        ref={containerRef}
        style={{
          flexWrap: "nowrap",
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        {data?.map((item) => {
          return (
            <Col key={item.id} xs={12} md={4} xl={3}>
              <EventBox {...item} />
            </Col>
          );
        })}
      </Row>
    );
  };

  if (!events?.length) return <></>;

  const hasScrollableEvents = events?.length > 4;
  return (
    <div
      id={sectionId}
      className="g-s-container"
      style={{
        background: "white",
        width: "100%",
      }}
    >
      <CenteredWrapper>
        <Container>
          <div className="row-flex t-with-filter-top">
            <SectionTitle>Events</SectionTitle>
            {hasScrollableEvents && <ArrowButtons containerRef={containerRef} style={{ marginLeft: "auto" }} />}
          </div>
          {hasScrollableEvents && (
            <OurParagraph>
              Scroll from left to right to see more events, or use the arrow buttons(top right) to scroll
            </OurParagraph>
          )}
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
