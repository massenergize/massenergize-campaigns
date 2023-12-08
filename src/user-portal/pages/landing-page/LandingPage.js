import React from "react";

import AppNavigationBar from "../../../components/navbar/AppNavigationBar";

import { Container } from "react-bootstrap";
import RoamingBox from "./RoamingBox";
import Footer from "../footer/Footer";
import TestimonialSection from "../testimonials/TestimonialSection";
import EventsSection from "../events/EventsSection";
import GettingStartedSection from "../getting-started/GettingStartedSection";
import CoachesSection from "../coaches/CoachesSection";
import Banner from "../banner/Banner";
import planetB from "./../../../assets/imgs/planet-b.jpeg";
import { CAMPAIGN_DATA } from "../../data/user-portal-dummy-data";
import { connect } from "react-redux";
import Loading from "../../../components/pieces/Loading";

function LandingPage({ toggleModal, campaign }) {
  console.log("HER EIS THE campaign from redux", campaign);
  const { image, config, key_contact } = campaign || {};

  const technologies = campaign?.technologies || [];
  return (
    <div style={{}}>
      <AppNavigationBar />
      {/* <Loading fullPage /> */}
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
  return { campaign: CAMPAIGN_DATA.data };
};
export default connect(mapState)(LandingPage);
