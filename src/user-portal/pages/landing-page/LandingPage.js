import React, { useEffect } from "react";

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

function LandingPage({ toggleModal, campaign, init, preview }) {
  console.log("HER EIS THE campaign from redux", campaign);
  const { image, config, key_contact } = campaign || {};

  const technologies = campaign?.technologies || [];
  const { campaignId } = useParams();

  useEffect(() => {
    if(!preview) init(campaignId);
  }, []);

  if (campaign === LOADING && !preview)
    return <Loading fullPage>Fetching campaign details...</Loading>;

  if (!campaign) return <NotFound></NotFound>;

  return (
    <div style={{}} className={"position-relative"}>
      {!preview && <AppNavigationBar />}
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
            alt={"campaign banner"}
          />
        </Container>
        <RoamingBox id="roaming-box" advert={config?.advert} keyContact={key_contact}/>
      </Container>
      <GettingStartedSection
        technologies={technologies}
        sectionId="getting-started-section"
      />

      <TestimonialSection
        technologies={technologies}
        sectionId="testimonial-section"
      />
      <br />

      <EventsSection technologies={technologies} sectionId="event-section" />

      <CoachesSection
        technologies={technologies}
        toggleModal={toggleModal}
        sectionId="coaches-section"
      />

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
