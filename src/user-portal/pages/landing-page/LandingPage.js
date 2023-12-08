import React, { useEffect } from "react";

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
import { connect } from "react-redux";


function LandingPage({ toggleModal, campaign }) {
  console.log("HER EIS THE campaign from redux", campaign);
  const { image, config, key_contact } = campaign || {};

  const technologies = campaign?.technologies || [];

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // var raw = JSON.stringify({
    //   id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
    // });
    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    // };
    // fetch(
    //   "https://2606-154-160-22-219.ngrok-free.app/api/campaigns.info",
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
    // apiCall("campaign.info", {
    //   id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
    // }).then((response) => {
    //   console.log("RESPONSE_FROM_API_REQUEST", response);
    // });
  }, []);

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
  return { campaign: state.campaign };
};
export default connect(mapState)(LandingPage);
