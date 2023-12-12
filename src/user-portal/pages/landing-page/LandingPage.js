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
import { connect } from "react-redux";
import { apiCall } from "../../../api/messenger";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { appInnitAction } from "../../../redux/actions/actions";
import { LOADING } from "../../../utils/Constants";
import Loading from "../../../components/pieces/Loading";
import NotFound from "../error/404";
import { fetchUrlParams } from "../../../utils/utils";

function LandingPage({ toggleModal, campaign, init, menu }) {
  const coachesRef = useRef();
  const eventsRef = useRef();
  const incentivesRef = useRef();
  const testimonialsRef = useRef();

  const idsToRefMap = {
    coaches: coachesRef,
    incentives: incentivesRef,
    events: eventsRef,
    testimonial: testimonialsRef,
  };

  // const [activeTab, setActiveTab] = useState("");

  const { image, config, key_contact } = campaign || {};

  const technologies = campaign?.technologies || [];
  const { campaignId } = useParams();

  // const section = fetchUrlParams("section");
  // const tab = fetchUrlParams("tab");

  // const scrollToSection = (id) => {
  //   const ref = idsToRefMap[id];
  //   if (ref?.current)
  //     ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  // };

  // useEffect(() => {
  //   setActiveTab(tab);
  //   console.log("HERE ARE THE TABS", tab);
  // }, [tab]);
  // useEffect(() => {
  //   scrollToSection(section);
  // }, [section]);

  useEffect(() => {
    init(campaignId);
  }, [campaignId]);

  if (campaign === LOADING)
    return <Loading fullPage>Fetching campaign details...</Loading>;

  if (!campaign) return <NotFound></NotFound>;

  return (
    <div style={{}}>
      <AppNavigationBar menu={menu} />
      <Container>
        <Banner {...campaign} />
        <Container>
          <img
            className="elevate-float-pro"
            src={image?.url || planetB}
            style={{
              width: "80%",
              margin: "0px 10%",
              height: 530,
              borderRadius: 10,
              marginTop: 20,
              objectFit: "cover",
            }}
          />
        </Container>
        <RoamingBox
          id="roaming-box"
          advert={config?.advert}
          keyContact={key_contact}
        />
      </Container>
      <GettingStartedSection
        technologies={technologies}
        sectionId="getting-started-section"
      />

      <div ref={testimonialsRef}>
        <TestimonialSection
          // defaultTab={activeTab}
          technologies={technologies}
          sectionId="testimonial-section"
        />
      </div>
      <br />

      <div ref={eventsRef}>
        <EventsSection technologies={technologies} sectionId="event-section" />
      </div>

      <div ref={coachesRef}>
        <CoachesSection
          technologies={technologies}
          toggleModal={toggleModal}
          sectionId="coaches-section"
        />
      </div>

      <Footer toggleModal={toggleModal} />
    </div>
  );
}

const mapState = (state) => {
  return { campaign: state.campaign };
};

const mapDispatch = (dispatch) => {
  return bindActionCreators(
    {
      init: appInnitAction,
    },
    dispatch
  );
};
export default connect(mapState, mapDispatch)(LandingPage);
