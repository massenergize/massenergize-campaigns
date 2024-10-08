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
import SectionTitle from "../../../components/pieces/SectionTitle";

function CoachesSectionWithFilters({ toggleModal, sectionId, technologies, customization, staticT }) {
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
      data = coaches?.filter((t) => filters.some((f) => f.campaign_technology_id === t.campaign_technology?.id));
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

  if (!coaches?.length) return <></>;

  const hasScrollableCoaches = coaches?.length > 4;
  return (
    <div
      id={sectionId}
      className=" g-s-container"
      style={{
        // margin: "40px 0px",
        // padding: "100px 0px",
        background: "var(--app-accent-1)",
        width: "100%",
      }}
    >
      <CenteredWrapper>
        <Container>
          <div>
            <div className="row-flex t-with-filter-top">
              <div>
                <SectionTitle style={{ color: "black" }}>{customization?.title ||staticT?.title?.text || " Meet the coaches"}</SectionTitle>
                {/* <h2
                  className="header-font"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    marginBottom: 20,
                    // color: "var(--app-main-color)",
                  }}
                >
                  {customization?.title || " Meet the coaches"}
                </h2> */}
                {/* <OurParagraph>
                  Scroll from left to right to see more coaches, or use the arrow buttons(top right) to scroll
                </OurParagraph> */}
              </div>
              {hasScrollableCoaches && <ArrowButtons containerRef={containerRef} style={{ marginLeft: "auto" }} />}
            </div>

            <Filter
              title={staticT?.call_to_filter?.text || "Filter coaches by"}
              filterOptions={technologies}
              labelAccessor={(tech) => tech?.name}
              valueAccessor={(tech) => tech?.campaign_technology_id}
              render={renderCoaches}
            />

            <div className="coaches-description">
              {customization?.description && (
                <div className="body-font" dangerouslySetInnerHTML={{ __html: customization?.description }}></div>
              )}
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
                      title: staticT?.help_modal?.title || "Get Help",
                    })
                  }
                  className="touchable-opacity body-font mt-5"
                  style={{
                    borderRadius: 55,
                    padding: "12px 35px",
                    fontWeight: "bold",
                    background: "var(--app-main-color)",
                    borderWidth: 0,
                  }}
                >
                  {staticT?.get_help?.text || "Get Help"}
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
