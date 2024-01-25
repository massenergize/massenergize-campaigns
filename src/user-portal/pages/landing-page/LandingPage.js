import React, { useEffect, useRef, useState } from "react";

import AppNavigationBar from "../../../components/navbar/AppNavigationBar";

import { Alert, Container } from "react-bootstrap";
import RoamingBox from "./RoamingBox";
import Footer from "../footer/Footer";
import TestimonialSection from "../testimonials/TestimonialSection";
import EventsSection from "../events/EventsSection";
import GettingStartedSection from "../getting-started/GettingStartedSection";
import CoachesSection from "../coaches/CoachesSection";
import Banner from "../banner/Banner";
import planetB from "./../../../assets/imgs/planet-b.jpeg";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import {
  USER_STORAGE_KEY,
  appInnitAction,
  loadUserObjAction,
  trackActivity,
} from "../../../redux/actions/actions";
import { LOADING } from "../../../utils/Constants";
import Loading from "../../../components/pieces/Loading";
import NotFound from "../error/404";
import { fetchUrlParams, setPageTitle } from "../../../utils/utils";
import RoamingModalSheet from "./RoamingModalSheet";
import DoMore from "./DoMore";
import JoinUsForm from "../forms/JoinUsForm";
import { OTHER, OTHER_JSON } from "../forms/CommunitySelector";
import TestimonialSectionWithFilters from "../testimonials/TestimonialSectionWithFilters";
import EventsSectionWithFilters from "../events/EventsSectionWithFilters";
import CoachesSectionWithFilters from "../coaches/CoachesSectionWithFilters";
import CampaignNotLive from "./CampaignNotLive";

function LandingPage({
  toggleModal,
  campaign,
  init,
  menu,
  trackActivity,
  authUser,
  preview,
  whereIsUserFrom,
  updateUserInRedux,
  triggerProtectedFunctionality,
}) {
  const [mounted, setMounted] = useState(false);
  const coachesRef = useRef();
  const eventsRef = useRef();
  const incentivesRef = useRef();
  const testimonialsRef = useRef();
  const communitiesRef = useRef();

  const idsToRefMap = {
    coaches: coachesRef,
    incentives: incentivesRef,
    events: eventsRef,
    testimonial: testimonialsRef,
    communities: communitiesRef,
  };

  const { image, config, key_contact, advert, is_published, description } =
    campaign || {};

  const technologies = campaign?.technologies || [];
  const { campaignId } = useParams();

  const loggedInAdmin = useSelector((state) => state.authAdmin);

  const scrollToSection = (id) => {
    const ref = idsToRefMap[id];
    if (ref?.current)
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const target = fetchUrlParams("section");
  const show = fetchUrlParams("show");

  useEffect(() => {
    scrollToSection(target?.trim());
  }, [mounted, target]);
 

  useEffect(() => {
    init(campaignId, (justLoadedCampaign, passed) => {
      if (passed) {
        tellUsWhereYouAreFrom(justLoadedCampaign);
        setPageTitle(justLoadedCampaign?.title);
      }
      setMounted(true);
    });
  }, [campaignId]);

  const stashUserCommunity = ({ data, close, campaign }) => {
    // return console.log("THIS IS THE DATA", data)
    let communities = campaign?.communities || [];
    communities = communities?.map((com) => com.community);
    const id = data?.comId;
    let community = communities?.find(
      (com) => com?.id?.toString() === id?.toString(),
    );
    let json = { ...(authUser || {}), community };

    if (id === OTHER) {
      community = OTHER_JSON;
      const { valueForOther, zipcode } = data || {};
      json = { ...json, community, community_name: valueForOther, zipcode };
    }
    if (community) updateUserInRedux(json);
    close && close();
  };
  const tellUsWhereYouAreFrom = (justLoadedCampaign) => {
    const user = authUser || localStorage.getItem(USER_STORAGE_KEY);
    const firstTime = !user || user === "null";

    if (!firstTime) return;
    // console.log("DID YOU RUN THIS THING?");
    // whereIsUserFrom({
    //   show: true,
    //   title: "Please tell us where you are from",
    //   componentProps: { noForm: true, okText: "Okay, Done!" },
    // });
    toggleModal({
      show: true,
      title: `Please tell us where you are from`,
      component: ({ close }) => (
        <JoinUsForm
          close={close}
          confirmText="Okay, Done!"
          cancelText="NO"
          noForm
          onConfirm={(props) =>
            stashUserCommunity({ ...props, campaign: justLoadedCampaign })
          }
        />
      ),
      // modalNativeProps: { size: "md" },
      fullControl: true,
    });
  };

  const showMoreAboutAdvert = () => {
    // const data = advert || {};
    const data = { description };
    toggleModal({
      show: true,
      title: `About ${campaign?.title || ""}`,
      // iconName: "fa-comment",
      component: ({ close }) => <RoamingModalSheet close={close} data={data} />,
      // modalNativeProps: { size: "md" },
      fullControl: true,
    });
  };

  useEffect(() => {
    if (!preview) init(campaignId);
  }, []);

  if (campaign === LOADING && !preview)
    return <Loading fullPage>Fetching campaign details...</Loading>;

  if (!campaign) return <NotFound></NotFound>;

  let previewMode = fetchUrlParams("preview");
  previewMode = previewMode?.trim() === "true";

  if (
    !is_published &&
    !previewMode &&
    !(loggedInAdmin?.is_community_admin || loggedInAdmin?.is_super_admin)
  )
    return (
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <h1>This campaign is not Live. Contact Admin</h1>
      </Container>
    );


  return (
    <div style={{}}>
      {previewMode && (
        <p
          className="elevate-3"
          style={{
            background: "var(--app-orange)",
            padding: "10px 20px",
            position: "fixed",
            right: 0,
            top: 100,
            zIndex: 10,
            fontWeight: "bold",
            color: "white",
            borderTopLeftRadius: 55,
            borderBottomLeftRadius: 55,
          }}
        >
          <span>PREVIEW MODE</span>
        </p>
      )}
      <AppNavigationBar menu={menu} campaign={campaign} />
      <Container>
        <Banner {...campaign} />
        <CampaignNotLive />
        <Container>
          <img
            className="elevate-float-pro campaign-focus-image"
            src={image?.url || planetB}
            alt={"campaign banner"}
          />
        </Container>
        <RoamingBox
          id="roaming-box"
          advert={{ description, title: `About ${campaign?.title || ""}` }}
          keyContact={key_contact}
          showMore={showMoreAboutAdvert}
        />
      </Container>
      <GettingStartedSection
        scrollToCommunities={() => scrollToSection("communities")}
        technologies={technologies}
        sectionId="getting-started-section"
        trackActivity={trackActivity}
        authUser={authUser}
      />

      <div ref={testimonialsRef}>
        <TestimonialSectionWithFilters
          campaign={campaign}
          // defaultTab={activeTab}
          technologies={technologies}
          sectionId="testimonial-section"
          protectedFunction={(options) =>
            triggerProtectedFunctionality(authUser, options)
          }
        />
      </div>
      <br />

      <div ref={eventsRef}>
        <EventsSectionWithFilters
          technologies={technologies}
          sectionId="event-section"
        />
      </div>

      <div ref={coachesRef}>
        <CoachesSectionWithFilters
          technologies={technologies}
          toggleModal={toggleModal}
          sectionId="coaches-section"
        />
      </div>
      <div ref={communitiesRef}>
        <DoMore campaign={campaign} />
      </div>

      <Footer toggleModal={toggleModal} />
    </div>
  );
}

const mapState = (state) => {
  return { campaign: state.campaign, authUser: state.user };
};

const mapDispatch = (dispatch) => {
  return bindActionCreators(
    {
      init: appInnitAction,
      trackActivity,
      updateUserInRedux: loadUserObjAction,
      // whereIsUserFrom: toggleUserInfoModal,
    },
    dispatch,
  );
};
export default connect(mapState, mapDispatch)(LandingPage);
