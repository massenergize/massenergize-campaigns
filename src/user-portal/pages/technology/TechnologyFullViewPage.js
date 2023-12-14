import React, { forwardRef, useEffect, useRef, useState } from "react";
import PageWrapper from "../wrappers/PageWrapper";
import carPhoto from "./../../../assets/imgs/car.jpeg";
import { Button, Col, Row } from "react-bootstrap";
import InteractionsPanel from "./InteractionsPanel";
import AppNavigationBar from "../../../components/navbar/AppNavigationBar";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import Footer from "../footer/Footer";
import WhySection from "./WhySection";
import TakeActionSection from "./TakeActionSection";
import OneTechTestimonialsSection from "./OneTechTestimonialsSection";
import OneTechMeetTheCoachesSection from "./OneTechMeetTheCoachesSetion";
import GetAGreatDealSection from "./GetAGreatDealSection";
import MoreDetailsSection from "./MoreDetailsSection";
import Vendors from "./Vendors";
import CommentComponentForModal from "../commenting/CommentComponentForModal";
import JoinUsForm from "../forms/JoinUsForm";
import GetHelpForm from "../forms/GetHelpForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { COMMENTS, ONE_TECH_DATA } from "../../data/user-portal-dummy-data";
import { relativeTimeAgo } from "../../../utils/utils";
import { useParams } from "react-router-dom";
import NotFound from "../error/404";
import { LOADING } from "../../../utils/Constants";
import { apiCall } from "../../../api/messenger";
import Loading from "../../../components/pieces/Loading";
import { updateTechnologiesAction } from "../../../redux/actions/actions";

const DEFAULT_READ_HEIGHT = 190;
const COMMENT_LENGTH = 40;
function TechnologyFullViewPage({ toggleModal, techs, updateTechObjs }) {
  const coachesRef = useRef();
  const [technology, setTechnology] = useState(LOADING);
  const [height, setHeight] = useState(DEFAULT_READ_HEIGHT);
  const [error, setError] = useState("");
  const { campaign_technology_id } = useParams();
  const id = campaign_technology_id;

  const scrollToPoint = () => {
    // document
    //   .getElementById("meet-coach")
    //   .scrollIntoView({ behavior: "smooth", block: "start" });
    if (coachesRef.current)
      coachesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const tech = (techs || {})[id];
    // Even if the tech is available locally, set it immediately,
    // But still continue to fetch, so that the user has something to look at
    // while the latest changes on the technology load up
    if (tech) setTechnology(tech);
    apiCall("/campaigns.technologies.info", { campaign_technology_id: id })
      .then((response) => {
        if (!response || !response?.success) {
          setTechnology(null);
          console.log("TECH_FETCH_ERROR_BE:", response?.error);
          return setError("Sorry, could not load the technology...");
        }
        const data = response?.data;
        updateTechObjs({ ...(techs || {}), [id]: data });
        setTechnology(data);
      })
      .catch((e) => {
        setTechnology(null);
        setError("Sorry, could not load the technology you are looking for...");
        console.log("TECH_FETCH_ERROR_SYNT:", e.toString());
      });
  }, []);

  useEffect(() => {
    scrollToPoint();
  }, [coachesRef.current]);

  if (!id || !technology) return <NotFound>{error}</NotFound>;

  if (technology === LOADING)
    return <Loading fullPage>Fetching technology information...</Loading>;

  console.log("Thi sis the technology", technology);

  // console.log("Lets see tecs", techs);
  // const id = "4c74b279-45c4-435a-b05d-11f5f3dcd69d";

  const {
    name,
    coaches,
    testimonials,
    likes,
    views,
    image,
    comments,
    overview,
    description,
    deal_section,
    more_details,
  } = technology;

  const triggerCommentBox = () => {
    toggleModal({
      show: true,
      title: "Add a comment",
      iconName: "fa-comment",
      component: () => <CommentComponentForModal comments={comments} />,
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
          <h2 style={{ color: "var(--app-deep-green)" }}>{name || "..."}</h2>
          <Row>
            <Col lg={9}>
              <img
                className="elevate-float-pro mt-2"
                src={image?.url || carPhoto}
                style={{
                  width: "100%",
                  height: 420,
                  objectFit: "contain",
                  borderRadius: 10,
                }}
              />
              <InteractionsPanel
                openCommentBox={triggerCommentBox}
                likes={likes}
                views={views}
                comments={comments?.length || 0}
              />
              <p className="mt-3" style={{ textAlign: "justify" }}>
                <span dangerouslySetInnerHTML={{ __html: description }} style={{ height, display: "block", overflowY: "hidden" }}/>
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
                      component: () => <JoinUsForm />,
                      fullControl: true,
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
                      Comments({comments?.length})
                    </span>
                  </p>
                </div>
                <div className="mt-2">
                  <small style={{ color: "" }}>This is what people think</small>
                  <div className="mt-2">
                    {comments?.slice(0, 3)?.map((com, index) => {
                      const { user, text, created_at } = com || {};
                      const message = text || "...";
                      return (
                        <div className="mb-1 mt-1" key={index?.toString()}>
                          <h6
                            style={{
                              textDecoration: "underline",
                              fontSize: 14,
                            }}
                          >
                            {user?.full_name || "..."}
                          </h6>
                          <small>
                            {message.substr(0, COMMENT_LENGTH)}
                            {message.length > COMMENT_LENGTH ? (
                              <span
                                className="touchable-opacity"
                                style={{
                                  marginLeft: 5,
                                  textDecoration: "underline",
                                  color: "var(--app-deep-green)",
                                  fontWeight: "bold",
                                }}
                                onClick={() => triggerCommentBox()}
                              >
                                See more...
                              </span>
                            ) : (
                              <></>
                            )}
                          </small>
                          <small
                            style={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <span style={{ marginLeft: "", color: "#cbcbcb" }}>
                              {relativeTimeAgo(created_at)}
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
        <WhySection
          sectionId="why-section"
          overview={overview}
          campaignName={name}
        />
        <TakeActionSection sectionId="take-action-section" />
        <OneTechTestimonialsSection
          testimonials={testimonials}
          sectionId="testimonial-section"
        />
        <div ref={coachesRef}>
          <OneTechMeetTheCoachesSection
            coaches={coaches}
            sectionId="meet-coach"
            toggleModal={() =>
              toggleModal({
                show: true,
                component: () => <GetHelpForm />,
                title: "Get Help",
              })
            }
          />
        </div>
        <GetAGreatDealSection data={deal_section} sectionId="get-a-deal" />
        <Vendors sectionId="vendors" />
        <MoreDetailsSection data={more_details} sectionId="more-detail" />
      </div>
      <Footer toggleModal={toggleModal} />
    </div>
  );
}

const mapState = (state) => {
  return { comments: COMMENTS, techs: state.techs };
};
const mapDispatch = (dispatch) => {
  return bindActionCreators(
    {
      updateTechObjs: updateTechnologiesAction,
    },
    dispatch
  );
};
export default connect(mapState, mapDispatch)(TechnologyFullViewPage);
