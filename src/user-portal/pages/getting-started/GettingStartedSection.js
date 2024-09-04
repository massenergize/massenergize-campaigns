import React from "react";
import OneBox from "./OneBox";
import { Button, Col, Container, Row } from "react-bootstrap";
import people from "./../../../assets/imgs/g_people.png";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { useMediaQuery } from "react-responsive";
import { MOBILE_WIDTH } from "../../../utils/Constants";

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
  staticT,
}) {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH });
  return (
    <div id={sectionId} className="g-s-container">
      <Container>
        <Row>
          <Col lg={{ span: 12 }}>
            <SectionTitle style={{ color: "white" }}>{customization?.title ||staticT?.header?.title?.text ||"Getting Started"}</SectionTitle>

            <p className="body-font" style={{ color: "white", marginBottom: 20 }}>
              {/* This section should be edited via the admin portal */}
              {customization?.description || staticT?.header?.description?.text || "Explore the actions we have under these technologies and get started right away!"}
              {/* Explore the actions we have under these technologies and get started right away! */}
            </p>
            <Row>
              {technologies?.map((box) => {
                return (
                  <Col key={box.id} md={6} lg={3} className="one-tech-wrapper mb-4">
                    <OneBox
                      v2={!isMobile}
                      {...box}
                      trackActivity={trackActivity}
                      authUser={authUser}
                      staticT={staticT}
                    />
                  </Col>
                );
              })}
              <Col md={6} lg={3} sm={12} className="one-tech-wrapper mb-4">
                <DoMoreBox
                  isMobile={isMobile}
                  scrollToCommunities={() => scrollToCommunities && scrollToCommunities()}
                  staticT={staticT?.communities}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GettingStartedSection;

const DoMoreBox = ({ scrollToCommunities, isMobile, staticT }) => {
  return (
    <div className="card rounded-4 one-box-container h-100" style={{ height: isMobile ? 287 : 475 }}>
      <div className="one-box">
        <img
          // src={"https://placehold.co/100x100"}
          // src={people}
          src={"/img/diversity.svg"}
          alt="people"
        />
        <h5 className="subheader-font" style={{ color: "var(--app-main-color)" }}>
          {staticT?.title || "Communities"}
        </h5>
        <p className="body-font" style={{ textAlign: "center" }}>
          {staticT?.description || " Connect with your community and check out other actions"}
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
          {staticT?.text || "Our Communities"}
        </Button>
      </div>

      <div className="new-one-box-footer phone-vanish">
        <Button
          onClick={() => scrollToCommunities()}
          style={{ background: "var(--app-main-color)" }}
          className="tech-btn touchable-opacity"
        >
          <span> {staticT?.text || "Communities"}</span>
        </Button>
      </div>
    </div>
  );
};
