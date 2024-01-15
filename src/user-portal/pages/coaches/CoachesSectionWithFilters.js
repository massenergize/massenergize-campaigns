import React, { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import OneCoach from "./OneCoach";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import CustomTabView from "../../../components/tab-view/CustomTabView";
import JoinUsForm from "../forms/JoinUsForm";
import GetHelpForm from "../forms/GetHelpForm";
import Filter from "../../../components/Filter";
import OurParagraph from "../../../components/OurParagraph";
import { ArrowButtons } from "../../../components/pieces/ArrowButtons";
import { mergeArrays } from "../../../utils/utils";

function CoachesSectionWithFilters({ toggleModal, sectionId, technologies }) {
  const containerRef = useRef();

  let coaches = technologies?.map((tech) => {
    return tech?.coaches?.map((c) => ({
      ...c,
      campaign_technology: { id: tech?.campaign_technology_id },
    }));
  });
  coaches = mergeArrays(coaches);

  const renderCoaches = (filters) => {
    let data = [];
    if (filters?.length)
      data = coaches?.filter((t) =>
        filters.some((f) => f.campaign_technology_id === t.campaign_technology?.id),
      );
    else data = coaches;

    return (
      <Row
        className="coach-main"
        style={{
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
        ref={containerRef}
      >
        {data?.map((item) => {
          return (
            <Col key={item.id} xs={3}>
              <OneCoach {...item} />
            </Col>
          );
        })}
      </Row>
    );
  };

  const hasScrollableCoaches = coaches?.length > 4;
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
            <div className="row-flex t-with-filter-top">
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
                <OurParagraph>
                  Scroll from left to right to see more testimonials, or use the
                  arrow buttons(top right) to scroll
                </OurParagraph>
              </div>
              {hasScrollableCoaches && (
                <ArrowButtons
                  containerRef={containerRef}
                  style={{ marginLeft: "auto" }}
                />
              )}
            </div>

            <Filter
              title="Filter coaches by"
              filterOptions={technologies}
              labelAccessor={(tech) => tech?.name}
              valueAccessor={(tech) => tech?.campaign_technology_id}
              render={renderCoaches}
            />

            <div className="coaches-description">
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may be
                used as a placeholder before final copy is availa a typeface without
                relying on meaningful content. Lorem ipsum may be used as a
                placeholder before final copy is availa
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

export default CoachesSectionWithFilters;
