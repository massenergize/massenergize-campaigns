import React from "react";
import OneBox from "./OneBox";
import { Button, Col, Container, Row } from "react-bootstrap";
import people from "./../../../assets/imgs/g_people.png";
import SectionTitle from "../../../components/pieces/SectionTitle";

const dummies = [
  {
    key: "heat-pump",
    icon: "fa-fire",
    text: "Some light paragraph bi here and lets see what is going on",
    title: "Heat Pump",
  },
  {
    key: "home-solar",
    icon: "fa-sun-o",
    text: "Some light paragraph bi here and lets see what is going on",
    title: "Home Solar",
  },
  {
    key: "community-solar",
    icon: "fa-cog",
    text: "Some light paragraph bi here and lets see what is going on",
    title: "Community Solar",
  },
];

function GettingStartedSection({
  sectionId,
  customization,
  technologies,
  scrollToCommunities,
  trackActivity,
  authUser,
}) {
  return (
    <div id={sectionId} className="mt-5 g-s-container">
      <Container>
        <Row>
          <Col lg={{ span: 12 }}>
            <SectionTitle style={{ color: "white" }}>{customization?.title || "Getting Started"}</SectionTitle>

            <p className="body-font" style={{ color: "white", marginBottom: 20 }}>
              {/* This section should be edited via the admin portal */}
              {customization?.description ||
                "Explore the actions we have under these technologies and get started right away!"}
              {/* Explore the actions we have under these technologies and get started right away! */}
            </p>
            <Row
              style={{
                marginLeft: 0,
              }}
            >
              {technologies?.map((box, index) => {
                return (
                  <Col key={box.id} md={4} lg={3} sm={6} xs={6} className="one-tech-wrapper mb-4">
                    <OneBox {...box} trackActivity={trackActivity} authUser={authUser} />
                  </Col>
                );
              })}
              <Col md={3} lg={3} sm={6} xs={6} className="one-tech-wrapper">
                <DoMoreBox scrollToCommunities={() => scrollToCommunities && scrollToCommunities()} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GettingStartedSection;

const DoMoreBox = ({ scrollToCommunities }) => {
  return (
    <div className="elevate-float-pro one-box-container">
      <div className="one-box">
        <img
          // src={"https://placehold.co/100x100"}
          src={people}
          alt="people"
        />
        <h5 className="subheader-font" style={{ color: "var(--app-main-color)" }}>
          Communities
        </h5>
        <p className="body-font" style={{ textAlign: "center" }}>
          Connect with your community and check out other actions
        </p>

        <Button
          variant={"link"}
          onClick={(e) => {
            e.preventDefault();
            scrollToCommunities();
          }}
          className="touchable-opacity  pc-vanish"
          style={{ fontWeight: "bold", color: "var(--app-orange)" }}
        >
          Our Communities
        </Button>
      </div>

      <div className="one-box-footer phone-vanish">
        <Button
          onClick={() => scrollToCommunities()}
          style={{ background: "var(--app-main-color)" }}
          className="tech-btn elevate-2 touchable-opacity"
        >
          <span> Communities</span>
        </Button>
      </div>
    </div>
  );
};
