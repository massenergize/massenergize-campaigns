import React from "react";

import AppNavigationBar from "../../../components/navbar/AppNavigationBar";
import Introduction from "../introduction/Introduction";
import { Button, Container } from "react-bootstrap";
import RoamingBox from "./RoamingBox";
import Footer from "../footer/Footer";
import TestimonialSection from "../testimonials/TestimonialSection";
import EventsSection from "../events/EventsSection";
import GettingStartedSection from "../getting-started/GettingStartedSection";
import CoachesSection from "../coaches/CoachesSection";
import CustomModal from "../../../components/modal/CustomModal";
import CustomTabView from "../../../components/tab-view/CustomTabView";
import Banner from "../banner/Banner";
import JoinUsForm from "../forms/JoinUsForm";
import planetB from "./../../../assets/imgs/planet-b.jpeg";

function LandingPage({ toggleModal }) {
  return (
    <div style={{}}>
      <AppNavigationBar />
      <Container>
        <Banner />
        {/* <Introduction /> */}
        <Container>
          <img
            className="elevate-float-pro"
            src={planetB}
            // src="https://picsum.photos/id/870/800/400?grayscale&blur=2"
            // src="https://massenergize-prod-files.s3.amazonaws.com/media/crowd-of-people-marching-on-a-rally-2975498.jpg"
            style={{
              width: "80%",
              margin: "0px 10%",
              height: 530,
              borderRadius: 10,
              marginTop: 20,
              objectFit: "cover",
            }}
          />
          {/* <Button
            onClick={() =>
              toggleModal({
                show: true,
                component: <JoinUsForm />,
                title: "Welcome to the Wayland Energy Challenge",
              })
            }
          >
            Click me
          </Button> */}
        </Container>
        <RoamingBox />
      </Container>
      <GettingStartedSection />

      <TestimonialSection />
      <br />

      <EventsSection />

      <CoachesSection />

      <Footer />
    </div>
  );
}

export default LandingPage;
