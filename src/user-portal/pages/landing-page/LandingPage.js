import React, { useEffect, useRef, useState } from "react";

import AppNavigationBar from "../../../components/navbar/AppNavigationBar";

import { Container } from "react-bootstrap";
import RoamingBox from "./RoamingBox";
import Footer from "../footer/Footer";
import GettingStartedSection from "../getting-started/GettingStartedSection";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import {
  USER_STORAGE_KEY,
  appInnitAction,
  getStaticText,
  loadUserObjAction,
  trackActivity,
} from "../../../redux/actions/actions";
import { LOADING, MOBILE_WIDTH } from "../../../utils/Constants";
import Loading from "../../../components/pieces/Loading";
import NotFound from "../error/404";
import { fetchUrlParams, scrollIntoView, setPageTitle } from "../../../utils/utils";
import RoamingModalSheet from "./RoamingModalSheet";
import DoMore from "./DoMore";
import JoinUsForm from "../forms/JoinUsForm";
import { OTHER, OTHER_JSON } from "../forms/CommunitySelector";
import TestimonialSectionWithFilters from "../testimonials/TestimonialSectionWithFilters";
import EventsSectionWithFilters from "../events/EventsSectionWithFilters";
import CoachesSectionWithFilters from "../coaches/CoachesSectionWithFilters";
import ShareBox from "../sharing/ShareBox";
import Hero from "../banner/Hero";
import { useMediaQuery } from "react-responsive";

function LandingPage({
  toggleModal,
  campaign,
  init,
  menu,
  trackActivity,
  authUser,
  preview,
  updateUserInRedux,
  triggerProtectedFunctionality,
}) {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH });
  const { loader, pages, share: shareStaticT, inPreview: previewStaticT } = getStaticText();
  const homepageStaticT = pages?.homepage || {};

  const coachesRef = useRef();
  const eventsRef = useRef();
  const incentivesRef = useRef();
  const testimonialsRef = useRef();
  const communitiesRef = useRef();
  const homeRef = useRef();
  const technologyRef = useRef();

  const idsToRefMap = {
    coaches: coachesRef,
    incentives: incentivesRef,
    events: eventsRef,
    testimonial: testimonialsRef,
    communities: communitiesRef,
    home: homeRef,
    technologies: technologyRef,
  };
  const salt = fetchUrlParams("salt");
  const heroAB = fetchUrlParams("hero");
  const showHeroV1 = heroAB && heroAB === "v2";

  console.log("Preview static", previewStaticT)
  const { key_contact, is_published, description, technologies_section, coaches_section, about_us_title } =
    campaign || {};

  const technologies = campaign?.technologies || [];
  const { campaignId } = useParams();

  const loggedInAdmin = useSelector((state) => state.authAdmin);

  const scrollToSection = (id) => {
    const ref = idsToRefMap[id];
    scrollIntoView(ref, 100);
  };
  const target = fetchUrlParams("section");
  const show = fetchUrlParams("show");

  useEffect(() => {
    scrollToSection(target?.trim());
  }, [mounted, target, salt]);

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
    let communities = campaign?.communities || [];
    communities = communities?.map((com) => com.community);
    const id = data?.comId;
    let community = communities?.find((com) => com?.id?.toString() === id?.toString());
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
    toggleModal({
      show: true,
      title: `Please tell us where you are from`,
      component: ({ close }) => (
        <JoinUsForm
          close={close}
          confirmText="Okay, Done!"
          cancelText="NO"
          noForm
          onConfirm={(props) => stashUserCommunity({ ...props, campaign: justLoadedCampaign })}
        />
      ),
      fullControl: true,
    });
  };

  const showMoreAboutAdvert = () => {
    const data = { description };
    toggleModal({
      show: true,
      title: `${campaign?.title || ""}`,
      component: ({ close }) => <RoamingModalSheet close={close} data={data} />,
      fullControl: true,
    });
  };

  const handleShareCampaign = () => {
    toggleModal({
      show: true,
      title: homepageStaticT?.share?.title?.text || "Share Campaign",
      // iconName: "fa-comment",
      component: () => <ShareBox campaign={campaign} authUser={authUser} staticT={homepageStaticT?.share} />,
      modalNativeProps: { size: "lg" },
      fullControl: true,
    });
  };

  useEffect(() => {
    if (!preview) init(campaignId);
  }, []);

  if (campaign === LOADING && !preview)
    return <Loading fullPage>{loader?.text || "Fetching campaign details..."}</Loading>;

  if (!campaign) return <NotFound></NotFound>;

  let previewMode = fetchUrlParams("preview");
  previewMode = previewMode?.trim() === "true";

  if (!is_published && !previewMode && !(loggedInAdmin?.is_community_admin || loggedInAdmin?.is_super_admin))
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
      <div ref={homeRef}></div>

      {previewMode && (
        <p
          className="elevate-3"
          style={{
            background: "var(--app-accent-3)",
            padding: "10px 5px 10px 15px",
            position: "fixed",
            right: 0,
            top: 280,
            zIndex: 10,
            fontWeight: "bold",
            color: "white",
            borderTopLeftRadius: 55,
            borderBottomLeftRadius: 55,
          }}
        >
          <span>{previewStaticT?.button?.text || "PREVIEW MODE"}</span>
        </p>
      )}
      <AppNavigationBar menu={menu} campaign={campaign} />

      <Hero v2={showHeroV1 && !isMobile} handleShareCampaign={handleShareCampaign} staticT={{ share: shareStaticT }} />

      <Container>
        <RoamingBox
          id="roaming-box"
          advert={{ description, title: about_us_title || `About ${campaign?.title || ""}` }}
          keyContact={key_contact}
          showMore={showMoreAboutAdvert}
          staticT={{
            learnMore: homepageStaticT?.sections?.about_box,
            keyContact: homepageStaticT?.sections?.key_contact,
          }}
        />
      </Container>

      <div ref={technologyRef}>
        <GettingStartedSection
          customization={technologies_section || {}}
          scrollToCommunities={() => scrollToSection("communities")}
          technologies={technologies}
          sectionId="getting-started-section"
          trackActivity={trackActivity}
          authUser={authUser}
          staticT={homepageStaticT?.sections?.getting_started_section}
        />
      </div>

      <div ref={testimonialsRef}>
        <TestimonialSectionWithFilters
          campaign={campaign}
          // defaultTab={activeTab}
          technologies={technologies}
          sectionId="testimonial-section"
          protectedFunction={(options) => triggerProtectedFunctionality(authUser, options)}
          staticT={homepageStaticT?.sections?.testimonials_section}
        />
      </div>
      {/*<br />*/}

      <div ref={eventsRef}>
        <EventsSectionWithFilters
          technologies={technologies}
          sectionId="event-section"
          staticT={homepageStaticT?.sections?.events_section}
        />
      </div>

      <div ref={coachesRef}>
        <CoachesSectionWithFilters
          customization={coaches_section}
          technologies={technologies}
          toggleModal={toggleModal}
          sectionId="coaches-section"
          staticT={homepageStaticT?.sections?.coaches_section}
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
