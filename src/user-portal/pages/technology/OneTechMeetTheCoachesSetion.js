import React, { useRef, useState } from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Button, Col, Row } from "react-bootstrap";
import OneCoach from "../coaches/OneCoach";
import { ArrowButtons } from "../../../components/pieces/ArrowButtons";

const SCROLL_TRAVEL = 100;
const dummies = [
  {
    icon: "fa-globe",
    title: "ENVIRONMENTALLY FRIENDLY",
    content:
      "1500s, when an unknown printer took a galley of type rised in the 1960s with the release of L1500s, when an unknown printer took a galley of type rised in the 1960s with the release of ",
  },
  {
    icon: "fa-lightbulb-o",
    title: "ECONOMIC BENEFITS ",
    content:
      "1500s, when an unknown printer took a galley of type rised in the 1960s with the release of L1500s, when an unknown printer took a galley of type rised in the 1960s with the release of ",
  },
  {
    icon: "fa-fire",
    title: "HEALTH & WELLNESS",
    content:
      "1500s, when an unknown printer took a galley of type rised in the 1960s with the release of L1500s, when an unknown printer took a galley of type rised in the 1960s with the release of ",
  },
  {
    icon: "fa-cog",
    title: "COMFORT",
    content:
      "1500s, when an unknown printer took a galley of type rised in the 1960s with the release of L1500s, when an unknown printer took a galley of type rised in the 1960s with the release of ",
  },
];
function OneTechMeetTheCoachesSection({
  toggleModal,
  sectionId,
  coaches,
  data,
  ref,
}) {
  const { title, description } = data || {};
  // const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  // const handleScroll = (scrollContainerRef, scrollValue) => {
  //   const maxScroll =
  //     scrollContainerRef.current.scrollWidth -
  //     scrollContainerRef.current.clientWidth;

  //   if (!(scrollValue >= 0 && scrollValue <= maxScroll)) return;
  //   setScrollPosition(scrollValue);
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollLeft = scrollValue;
  //   }
  // };

  const hasScrollableCoaches = coaches?.length > 4;
  return (
    <div
      ref={ref}
      id={sectionId}
      className="mt-5 elevate-float-pro g-s-container"
      style={{
        background: "antiquewhite",
        width: "100%",
        // padding: "80px 0px",
        // minHeight: 200,
      }}
    >
      <OptimumWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div>
            <SectionTitle className="mb-5" style={{ color: "black" }}>
              {title || "Meet the Coaches"}
            </SectionTitle>
            {hasScrollableCoaches && (
              <p style={{ fontSize: "var(--mob-paragraph-font-size)" }}>
                Scroll from left to right, or use the arrow buttons to see all
                coaches
              </p>
            )}
          </div>

          {hasScrollableCoaches && (
            <ArrowButtons
              style={{ marginLeft: "auto" }}
              containerRef={scrollContainerRef}
            />
          )}
        </div>

        <Row
          ref={scrollContainerRef}
          style={{
            flexWrap: "nowrap",
            overflowX: "scroll",
            // justifyContent: "center",
            // scrollBehavior: "smooth",
          }}
          // onScroll={(e) => handleScroll(e.target.scrollLeft)}
        >
          {coaches?.map((coach, index) => {
            return (
              <Col key={index?.toString()} xs={4} lg={3} className="coach-main">
                <OneCoach {...coach} />
              </Col>
            );
          })}
        </Row>

        <div
          // style={{ textTransform: "justify", marginTop: 20 }}
          className="coaches-description"
        >
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              className="touchable-opacity elevate-2 mt-5"
              style={{
                borderRadius: 55,
                padding: "8px 20px",
                fontWeight: "bold",
                background: "var(--app-deep-green)",
                borderWidth: 0,
              }}
              onClick={() => toggleModal()}
            >
              Get Help{" "}
            </Button>
          </div>
        </div>
      </OptimumWrapper>
    </div>
  );
}

export default OneTechMeetTheCoachesSection;
