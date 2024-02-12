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
import { fetchUrlParams, relativeTimeAgo, scrollIntoView, setPageTitle } from "../../../utils/utils";
import { useParams } from "react-router-dom";
import NotFound from "../error/404";
import { LOADING, MOBILE_WIDTH } from "../../../utils/Constants";
import { apiCall } from "../../../api/messenger";
import Loading from "../../../components/pieces/Loading";
import {
  appInnitAction,
  loadUserObjAction,
  setCommentsAction,
  trackActivity,
  updateTechnologiesAction,
  updateUserAction,
} from "../../../redux/actions/actions";
import ShareBox from "../sharing/ShareBox";
import CommentDeleteConfirmation from "./CommentDeleteConfirmation";
import DoMore from "../landing-page/DoMore";
import OneTechEventSection from "./OneTechEventSection";
import { useMediaQuery } from "react-responsive";
import CampaignNotLive from "../landing-page/CampaignNotLive";
import SmartRichText from "../../../components/SmartRichText";
import SectionTitle from "../../../components/pieces/SectionTitle";

const DEFAULT_READ_HEIGHT = 190;
const PREVIEW_TEXT_LENGHT = 1000;
const MOBILE_PREVIEW_TEXT_LENGTH = 200;
const COMMENT_LENGTH = 40;

function TechnologyFullViewPage({
  toggleModal,
  techs,
  updateTechObjs,
  campaign,
  init,
  user,
  updateUser,
  trackActivity,
  updateUserInRedux,
  navigation,
}) {
  const authUser = user;
  // const hasUser = authUser?.user;
  const [mounted, setMounted] = useState(false);
  // const [idsToRefMap, setidsToRefMap] = useState({});
  const coachesRef = useRef();
  const vendorsRef = useRef();
  const incentivesRef = useRef();
  const detailsRef = useRef();
  const testimonialsRef = useRef();
  const communitiesRef = useRef();
  const eventsRef = useRef();

  const targetSection = fetchUrlParams("section");
  const salt = fetchUrlParams("salt");

  const idsToRefMap = {
    coaches: coachesRef,
    vendors: vendorsRef,
    incentives: incentivesRef,
    details: detailsRef,
    testimonials: testimonialsRef,
    communities: communitiesRef,
    events: eventsRef,
  };

  const [technology, setTechnology] = useState(LOADING);
  const [height, setHeight] = useState(DEFAULT_READ_HEIGHT);
  const [error, setError] = useState("");
  const { campaign_technology_id, campaign_id } = useParams();
  const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH });

  const id = campaign_technology_id;

  const scrollToSection = (id) => {
    const ref = idsToRefMap[id];
    scrollIntoView(ref, 100);
  };
  const recorderAView = () => {
    const { user } = authUser || {};
    apiCall("/campaigns.technology.view", {
      campaign_technology_id: technology?.campaign_technology_id,
      url: window.location.href,
      email: user?.email,
    }).then((response) => {
      if (!response || !response.success) return console.log("ERROR_RECORDING_A_VIEW: ", response.error);
    });
  };

  useEffect(() => {
    scrollToSection(targetSection);
  }, [mounted, campaign_technology_id, campaign_id, salt]);

  useEffect(() => {
    if (technology?.campaign_technology_id) recorderAView();
  }, [technology?.campaign_technology_id]);

  const campaignExists = campaign && campaign !== LOADING;

  const updateTechList = (data, id) => {
    setTechnology(data);
    updateTechObjs({ ...(techs || {}), [id]: data });
  };

  useEffect(() => {
    if (!campaignExists) init(campaign_id);

    const tech = (techs || {})[id];
    // Even if the tech is available locally, set it immediately,
    // But still continue to fetch, so that the user has something to look at
    // while the latest changes on the technology load up
    if (tech) {
      setPageTitle(tech?.name);
      setTechnology(tech);
    }
    apiCall("/campaigns.technologies.info", {
      campaign_technology_id: id,
      email: authUser?.email,
    })
      .then((response) => {
        if (!response || !response?.success) {
          setTechnology(null);
          console.log("TECH_FETCH_ERROR_BE:", response?.error);
          return setError("Sorry, could not load the technology...");
        }
        const data = response?.data;
        setPageTitle(data?.name);
        updateTechList(data, id);
        // setTechnology(data);
        setMounted(true);
      })
      .catch((e) => {
        setTechnology(null);
        setError("Sorry, could not load the technology you are looking for...");
        console.log("TECH_FETCH_ERROR_SYNT:", e.toString());
      });
  }, [id, campaign_id]);

  if (!id || !technology) return <NotFound>{error}</NotFound>;

  if (technology === LOADING) return <Loading fullPage>Fetching technology information...</Loading>;

  const {
    name,
    coaches,
    testimonials,
    likes,
    campaign_technology_views,
    image,
    comments,
    overview,
    description,
    deal_section,
    deals,
    more_info_section,
    deal_section_image,
    vendors_section,
    coaches_section,
    vendors,
    events,
  } = technology;

  const like = (userObject) => {
    const { community, user } = userObject || {};
    // if (!user) return triggerRegistrationForLike();

    const payload = {
      campaign_technology_id: technology?.campaign_technology_id,
      // user_id: user?.id,
      // email: user?.email,
      // zipcode: authUser?.zipcode,
      // community_id: community?.id,
      // community_name: authUser?.community_name || community?.name,
    };

    apiCall("/campaigns.technology.like", payload).then((response) => {
      if (!response || !response?.success) return console.log("ERROR_LIKING: ", response?.error);
      updateTechList(response?.data, id);
    });
  };

  // NB: Dont worry, I will merge the two trigger fxns into one, when there is more time
  const triggerRegistration = () => {
    toggleModal({
      show: true,
      title: `Before you continue, we would like to know you`,
      iconName: "fa-comment",
      component: ({ close }) => (
        <JoinUsForm
          close={close}
          confirmText="Continue"
          callbackOnSubmit={({ user }) => {
            close && close();
            triggerCommentBox(user);
          }}
        />
      ),
      // modalNativeProps: { size: "md" },
      fullControl: true,
    });
  };

  const triggerCommentBox = (userObject) => {
    const { user } = userObject || {};
    if (!user) return triggerRegistration();
    toggleModal({
      show: true,
      title: "Read comments or add yours",
      iconName: "fa-comment",
      component: () => (
        <CommentComponentForModal
          updateUserInRedux={updateUserInRedux}
          comments={[...comments]}
          authUser={userObject}
          updateUser={updateUser}
          technology={technology}
          commentIsForUser={commentIsForUser}
          onDelete={deleteComment}
          updateTechList={(data) => {
            // setTechnology(data);
            updateTechList(data, id);
          }}
        />
      ),
      modalNativeProps: { size: "md" },
      fullControl: true,
    });
  };
  const readMore = height !== "100%";

  const openShareBox = () => {
    toggleModal({
      show: true,
      title: "Share",
      // iconName: "fa-comment",
      component: () => <ShareBox campaign={campaign} authUser={authUser} />,
      modalNativeProps: { size: "lg" },
      fullControl: true,
    });
  };

  const commentIsForUser = (comment, userFromAuth) => {
    const { user } = userFromAuth || {};
    // console.log("AUTH USER, COMMENT USER", user, comment);

    if (!user) return false;

    return comment?.user?.id === user?.id;
  };

  const deleteComment = (comment, cb) => {
    let comments = technology?.comments || [];
    comments = comments.filter((c) => c.id !== comment?.id);
    const updated = { ...(technology || {}), comments };
    updateTechList(updated, id);
    cb && cb(comments); // KULULU: lets us send the remaining comments back to the modal  to give a quick deletion feel, before the api req runs
    // return;
    apiCall("/campaigns.technologies.comments.delete", {
      id: comment?.id || null,
      user_id: comment?.user?.id || null,
    })
      .then((response) => {
        const { data, error, success } = response || {};
        if (!success) return console.log("COMMENT_DELETION_ERROR_BE:", error);
        updateTechList({ ...(technology || {}), comments: data }, id);
        cb && cb(data);
      })
      .catch((e) => console.log("COMMENT_DELETION_ERROR_SYNT: ", e?.toString()));
  };

  const READ_HEIGHT = DEFAULT_READ_HEIGHT;
  const LENGTH = isMobile ? MOBILE_PREVIEW_TEXT_LENGTH : PREVIEW_TEXT_LENGHT;

  return (
    <div>
      <AppNavigationBar />
      <div style={{ marginTop: 100 }} className="one-tech-wrapper">
        <OptimumWrapper>
          <CampaignNotLive />
          <SectionTitle>{name || "..."}</SectionTitle>

          <Row>
            <Col lg={9} className="one-tech-main">
              {image?.url && <img className="mt-2" src={image?.url || carPhoto} alt={"event"} />}
              <InteractionsPanel
                openShareBox={openShareBox}
                openCommentBox={() => triggerCommentBox(authUser)}
                liked={technology?.has_liked}
                likes={likes}
                like={() => like(authUser?.user)}
                views={campaign_technology_views}
                comments={comments?.length || 0}
              />

              <SmartRichText className="body-font">{description}</SmartRichText>
            </Col>
            <Col lg={3}>
              <div
                className="mt-2"
                style={{
                  border: "solid 2px black",
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
                    className="body-font"
                    style={{
                      alignSelf: "center",
                      justifySelf: "center",
                      textAlign: "center",
                      margin: 0,
                      // fontSize: 13,
                      fontWeight: "bold",
                      width: "83%",
                    }}
                  >
                    {`Get updates on ${technology?.name || "..."}`}
                  </p>
                </div>
                <div
                  onClick={() =>
                    toggleModal({
                      show: true,
                      title: `Get updates on ${technology?.name || "..."}`,
                      component: ({ close }) => (
                        <JoinUsForm
                          close={close}
                          confirmText="Get Updates"
                          apiURL="/campaigns.technology.follow"
                          processPayload={(payload) => {
                            const data = {
                              ...(payload || {}),
                              campaign_technology_id,
                            };

                            delete data?.campaign_id;
                            return data;
                          }}
                          callbackOnSubmit={({ close }) => close && close()}
                          // onConfirm={finaliseGetUpdates}
                        />
                      ),
                      fullControl: true,
                    })
                  }
                  className="touchable-opacity"
                  style={{
                    background: "black",
                    padding: "10px 20px",
                    marginTop: "auto",
                  }}
                >
                  <p
                    className="body-font"
                    style={{
                      color: "white",
                      margin: 0,
                      textAlign: "center",
                      // fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Get Updates!
                  </p>
                </div>
              </div>

              <div className="mt-3">
                <div
                  style={{
                    border: "solid 1px var(--app-main-color)",
                    padding: "10px 8px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className="body-font" style={{ margin: 0 }}>
                    <i
                      className="fa fa-comment"
                      style={{
                        marginRight: 2,
                        color: "var(--app-main-color)",
                      }}
                    />{" "}
                    <span
                      style={{
                        color: "var(--app-main-color)",
                        fontWeight: "bold",
                      }}
                    >
                      Comments {comments?.length ? `(${comments?.length})` : ""}
                    </span>
                  </p>
                </div>
                <div className="mt-2">
                  {/* <small className="small-font" style={{ color: "" }}>
                    This is what people think
                  </small> */}
                  <div className="mt-3">
                    {comments?.slice(0, 3)?.map((com, index) => {
                      const isForCurrentUser = commentIsForUser(com, authUser);

                      const { user, text, created_at } = com || {};
                      const message = text || "...";
                      return (
                        <div
                          className="mb-1 mt-1"
                          style={{
                            border: "solid 0px #eae9e9",
                            borderBottomWidth: 1,
                            paddingBottom: 10,
                          }}
                          key={com?.id}
                        >
                          <h6
                            className="small-font"
                            style={{
                              // textDecoration: "underline",
                              // fontSize: 14,
                              fontWeight: "bold",
                              color: !isForCurrentUser ? "var(--app-main-color)" : "var(--app-accent-3)",
                            }}
                          >
                            {user?.full_name || "..."} {isForCurrentUser ? " (Yours)" : ""}
                          </h6>
                          <small className="small-font">
                            {message.substr(0, COMMENT_LENGTH)}
                            {message.length > COMMENT_LENGTH ? (
                              <span
                                className="touchable-opacity"
                                style={{
                                  marginLeft: 5,
                                  textDecoration: "underline",
                                  color: "var(--app-accent-3)",
                                  fontWeight: "bold",
                                }}
                                onClick={() => triggerCommentBox(authUser)}
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
                            <CommentDeleteConfirmation show={isForCurrentUser} onDelete={() => deleteComment(com)} />
                            <span
                              style={{
                                color: "#cbcbcb",
                                // marginRight: 10,
                                marginLeft: "auto",
                                fontSize: 12,
                              }}
                            >
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
                    border: "solid 1px var(--app-main-color)",
                    padding: "10px 8px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => triggerCommentBox(authUser)}
                >
                  <p
                    className="body-font"
                    style={{
                      margin: 0,
                      color: "var(--app-main-color)",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    See More Comments
                  </p>
                </div>
                <div
                  className="touchable-opacity mt-2 body-font"
                  style={{
                    background: "var(--app-main-color)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                    color: "white",
                  }}
                  onClick={() => triggerCommentBox(authUser)}
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
          overview_title={technology?.overview_title}
        />
        <div className="phone-vanish">
          <TakeActionSection
            campaign={campaign}
            sectionId="take-action-section"
            scrollToSection={scrollToSection}
            trackActivity={trackActivity}
            authUser={authUser}
            vendors={vendors}
          />
        </div>
        <div ref={testimonialsRef}>
          <OneTechTestimonialsSection
            testimonials={testimonials}
            sectionId="testimonial-section"
            campaign={campaign}
            links={navigation}
          />
        </div>
        <div ref={coachesRef}>
          <OneTechMeetTheCoachesSection
            coaches={coaches}
            sectionId="meet-coach"
            data={coaches_section}
            toggleModal={() =>
              toggleModal({
                show: true,
                component: (props) => <GetHelpForm {...props} />,
                fullControl: true,
                title: "Get Help",
              })
            }
          />
        </div>
        <div ref={incentivesRef}>
          <GetAGreatDealSection
            image={deal_section_image}
            data={deal_section}
            deals={deals}
            sectionId="get-a-deal"
            toggleDealModal={(deal) =>
              toggleModal({
                show: true,
                component: (props) => (
                  <div
                    style={{ padding: 20 }}
                    className="body-font"
                    dangerouslySetInnerHTML={{ __html: deal?.description }}
                  />
                ),
                fullControl: true,
                title: deal?.title,
              })
            }
          />
        </div>
        <div ref={vendorsRef}>
          <Vendors sectionId="vendors" data={vendors_section || {}} vendors={vendors} />
        </div>

        <MoreDetailsSection data={more_info_section} sectionId="more-detail" />

        <div ref={eventsRef}>
          <OneTechEventSection style={{ background: "white" }} wrapperStyle={{ padding: 24 }} events={events} />
        </div>
        <div ref={communitiesRef} className="mt-3">
          <DoMore optimum />
        </div>
      </div>
      <Footer toggleModal={toggleModal} />
    </div>
  );
}

const mapState = (state) => {
  return {
    comments: COMMENTS,
    techs: state.techs,
    campaign: state.campaign,
    user: state.user,
    commentsList: state.comments,
    navigation: state.navigation,
  };
};
const mapDispatch = (dispatch) => {
  return bindActionCreators(
    {
      updateTechObjs: updateTechnologiesAction,
      init: appInnitAction,
      updateUser: updateUserAction,
      updateCommentList: setCommentsAction,
      trackActivity,
      updateUserInRedux: loadUserObjAction,
    },
    dispatch,
  );
};
export default connect(mapState, mapDispatch)(TechnologyFullViewPage);
