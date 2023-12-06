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

function LandingPage({}) {
  console.log("HERE IS THE TEST STUFF", test);
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
          <Button onClick={() => null}>Click me</Button>
        </Container>
        <RoamingBox />
      </Container>
      <GettingStartedSection />

      {/* <CustomTabView /> */}

      <TestimonialSection />
      <br />

      <EventsSection />

      <CoachesSection />
      {/* <CustomModal show /> */}
      <Footer />
    </div>
  );
}

export default LandingPage;
