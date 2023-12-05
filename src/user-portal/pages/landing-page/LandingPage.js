import React from "react";

import AppNavigationBar from "../../../components/navbar/AppNavigationBar";
import Introduction from "../introduction/Introduction";
import { Container } from "react-bootstrap";
import RoamingBox from "./RoamingBox";
import Footer from "../footer/Footer";
import TestimonialSection from "../testimonials/TestimonialSection";
import EventsSection from "../events/EventsSection";

function LandingPage() {
  return (
    <div style={{}}>
      <AppNavigationBar />
      <Container>
        <Introduction />
        <Container>
          <img
            src="https://picsum.photos/id/870/800/400?grayscale&blur=2"
            style={{ width: "100%", borderRadius: 10, marginTop: 20 }}
          />
        </Container>
      </Container>
      {/* <RoamingBox /> */}
      {/* <TestimonialSection/>  */}
      <EventsSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
