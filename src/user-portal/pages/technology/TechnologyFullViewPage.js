import React, { useEffect, useRef, useState } from "react";
import PageWrapper from "../wrappers/PageWrapper";
import carPhoto from "./../../../assets/imgs/car.jpeg";
import { Col, Row } from "react-bootstrap";
import InteractionsPanel from "./InteractionsPanel";
import AppNavigationBar from "../../../components/navbar/AppNavigationBar";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import Footer from "../footer/Footer";
import WhySection from "./WhySection";
import TakeAtionSetion from "./TakeActionSection";
import OneTechTestimonialsSection from "./OneTechTestimonialsSection";
import OneTechMeetTheCoachesSection from "./OneTechMeetTheCoachesSetion";
import GetAGreatDealSection from "./GetAGreatDealSection";
import MoreDetailsSection from "./MoreDetailsSection";
import Vendors from "./Vendors";
import CommentComponentForModal from "../commenting/CommentComponentForModal";
import JoinUsForm from "../forms/JoinUsForm";
import GetHelpForm from "../forms/GetHelpForm";

const DEFAULT_READ_HEIGHT = 190;
function TechnologyFullViewPage({ toggleModal }) {
  const [height, setHeight] = useState(DEFAULT_READ_HEIGHT);
  const descriptionRef = useRef();
  const triggerCommentBox = () => {
    toggleModal({
      show: true,
      title: "Add a comment",
      iconName: "fa-comment",
      component: <CommentComponentForModal />,
      modalNativeProps: { size: "md" },
      fullControl: true,
    });
  };
  const readMore = height !== "100%";

  return (
    <div>
      <AppNavigationBar />
      <div style={{ marginTop: 100 }}>
        <OptimumWrapper>
          <h2 style={{ color: "var(--app-deep-green)" }}>
            Drive Electric Cars
          </h2>
          <Row>
            <Col lg={9}>
              <img
                className="elevate-float-pro mt-2"
                src={carPhoto}
                style={{
                  width: "100%",
                  height: 420,
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
              <InteractionsPanel />
              <p className="mt-3" style={{ textAlign: "justify" }}>
                <span
                  ref={descriptionRef}
                  style={{ height, display: "block", overflowY: "hidden" }}
                >
                  t ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It
                  was popularised in the 1960s with the release of Letraset
                  sheets containing t ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing t ever since the
                  1500s, when an unknown printer took a galley of type rised in
                  the 1960s with the release of Letraset sheets containing. when
                  an unknown printer took a galley of type rised in the 1960s
                  with the release of Letraset sheets containing. when an
                  unknown printer took a galley of type rised in the 1960s with
                  the release of Letraset sheets containing.{" "}
                  the 1960s with the release of Letraset sheets containing. when
                  an unknown printer took a galley of type rised in the 1960s
                  with the release of Letraset sheets containing. when an
                  unknown printer took a galley of type rised in the 1960s with
                  the release of Letraset sheets containing.{" "}
                </span>
                <span
                  onClick={() =>
                    setHeight(readMore ? "100%" : DEFAULT_READ_HEIGHT)
                  }
                  className="touchable-opacity"
                  style={{
                    fontWeight: "bold",
                    color: "var(--app-orange)",
                    textDecoration: "underline",
                  }}
                >
                  {readMore ? "Read More..." : "Hide"}
                </span>
              </p>
            </Col>
            <Col lg={3}>
              <div
                className="mt-2"
                style={{
                  border: "solid 2px var(--app-deep-green)",
                  height: 140,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: "100%",

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      alignSelf: "center",
                      justifySelf: "center",
                      textAlign: "center",
                      margin: 0,
                      fontSize: 13,
                      fontWeight: "bold",
                      width: "83%",
                    }}
                  >
                    Get all deals and updates on this technology!
                  </p>
                </div>
                <div
                  onClick={() =>
                    toggleModal({
                      show: true,
                      title: "Get updates about this technology",
                      component: <JoinUsForm />,
                    })
                  }
                  className="touchable-opacity"
                  style={{
                    background: "var(--app-deep-green)",
                    padding: "10px 20px",

                    // borderBottomRightRadius: 5,
                    marginTop: "auto",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      margin: 0,
                      //   padding: "7px 30px",
                      textAlign: "center",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Get Updates!
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <div
                  style={{
                    border: "solid 1px var(--app-medium-green)",
                    padding: "10px 8px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <i
                      className="fa fa-comment"
                      style={{
                        marginRight: 2,
                        color: "var(--app-medium-green)",
                      }}
                    />{" "}
                    <span
                      style={{
                        color: "var(--app-deep-green",
                        fontWeight: "bold",
                      }}
                    >
                      Comments(25)
                    </span>
                  </p>
                </div>
                <div className="mt-2">
                  <small style={{ color: "" }}>
                    This is what people think about this action
                  </small>
                  <div className="mt-2">
                    {[1, 2, 3].map((item, index) => {
                      return (
                        <div className="mb-1 mt-1" key={index?.toString()}>
                          <h6
                            style={{
                              textDecoration: "underline",
                              fontSize: 14,
                            }}
                          >
                            Akwesi Frimpong
                          </h6>
                          <small>
                            It has survived not only five was popularised
                            <span
                              style={{
                                marginLeft: 5,
                                textDecoration: "underline",
                                color: "var(--app-deep-green)",
                                fontWeight: "bold",
                              }}
                            >
                              See more...
                            </span>
                          </small>
                          <small
                            style={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <span
                              style={{ marginLeft: "auto", color: "#cbcbcb" }}
                            >
                              10 Seconds ago
                            </span>
                          </small>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className="mt-2 touchable-opacity"
                  style={{
                    border: "solid 1px var(--app-medium-green)",
                    padding: "10px 8px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => triggerCommentBox()}
                >
                  <p
                    style={{
                      margin: 0,
                      color: "var(--app-deep-green",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    See More Comments
                  </p>
                </div>
                <div
                  className="touchable-opacity mt-2"
                  style={{
                    background: "var(--app-medium-green)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                    color: "white",
                  }}
                  onClick={() => triggerCommentBox()}
                >
                  <i className=" fa fa-plus" style={{ marginRight: 4 }}></i>
                  <p style={{ margin: 0, fontWeight: "bold" }}>Add a Comment</p>
                </div>
              </div>
            </Col>
          </Row>
        </OptimumWrapper>
        <WhySection />
        <TakeAtionSetion />
        <OneTechTestimonialsSection />
        <OneTechMeetTheCoachesSection
          toggleModal={() =>
            toggleModal({
              show: true,
              component: <GetHelpForm />,
              title: "Get Help",
            })
          }
        />
        <GetAGreatDealSection />
        <Vendors />
        <MoreDetailsSection />
      </div>
      <Footer toggleModal={toggleModal} />
    </div>
  );
}

export default TechnologyFullViewPage;
