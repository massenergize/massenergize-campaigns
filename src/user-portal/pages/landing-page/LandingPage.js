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

function LandingPage({ toggleModal }) {
  return (
    <div style={{}}>
      <AppNavigationBar />
      <Container>
        <Banner />
        {/* <Introduction /> */}
        <Container>
          <img
            src="https://picsum.photos/id/870/800/400?grayscale&blur=2"
            style={{ width: "100%", borderRadius: 10, marginTop: 20 }}
          />
          <Button
            onClick={() =>
              toggleModal({ show: true, component: <h3>I'm the goat</h3> })
            }
          >
            Click me
          </Button>
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
