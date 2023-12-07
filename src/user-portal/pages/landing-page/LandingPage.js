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

function LandingPage({ toggleModal }) {
  const campaign = CAMPAIGN_DATA.data;
  return (
    <div style={{}}>
      <AppNavigationBar />
      <Container>
        <Banner />
        <Container>
          <img
            className="elevate-float-pro"
            src={planetB}
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
        <RoamingBox id="roaming-box" />
      </Container>
      <GettingStartedSection sectionId="getting-started-section" />

      <TestimonialSection sectionId="testimonial-section" />
      <br />

      <EventsSection sectionId="event-section" />

      <CoachesSection toggleModal={toggleModal} sectionId="coaches-section" />

      <Footer toggleModal={toggleModal} />
    </div>
  );
}

export default LandingPage;
