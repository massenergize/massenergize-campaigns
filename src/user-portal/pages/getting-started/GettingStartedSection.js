import React from "react";
import OneBox from "./OneBox";
import { Button, Col, Container, Row } from "react-bootstrap";
import people from "./../../../assets/imgs/g_people.png";

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

function GettingStartedSection({ sectionId, technologies, scrollToCommunities, trackActivity, authUser }) {
  // console.log("these are the technologies", technologies);
  return (
    <div
      id={sectionId}
      className="mt-5 g-s-container"

      // style={{ background: "var(--app-medium-green)", padding: "130px 20px" }}
    >
      <Container>
        <Row>
          <Col lg={{ span: 12 }}>
            <h2 style={{ color: "white", fontWeight: "bold" }}>Getting Started</h2>
            <p style={{ color: "white", marginBottom: 20 }}>
              {/* This section should be edited via the admin portal */}
              'Volt' into solar and heat pump action!
              {/* Explore the actions we have under these technologies and get started right away! */}
            </p>
            <Row
              style={{
                marginLeft: 0,
                // overflowX: "scroll",
                // width: "100%",
                // flexWrap: "nowrap",
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

            {/* <div>
              <h5
                onClick={() => scrollToCommunities && scrollToCommunities()}
                className="touchable-opacity"
                style={{
                  padding: "20px 0px",
                  textDecoration: "underline",
                  display: "inline-block",
                  color: "white",

                  marginTop: 20,
                }}
              >
                Want to do more? Check out other things you can do on our
                community sites!
              </h5>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GettingStartedSection;

const DoMoreBox = ({ scrollToCommunities }) => {
  return (
    <div
      className="elevate-float-pro one-box-container"
      // className="elevate-float-pro"
      // style={{
      //   width: "100%",
      //   minHeight: 320,
      //   borderRadius: 5,
      //   display: "flex",
      //   flexDirection: "column",
      //   background: "white",
      //   minHeight: 390,
      // }}
    >
      <div
        className="one-box"
        // style={{
        //   height: "100%",
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   borderRadius: 5,
        //   padding: "40px 40px 10px 40px",
        // }}
      >
        <img
          // src={"https://placehold.co/100x100"}
          src={people}
          alt="people"
          // style={{
          //   height: 100,
          //   width: 100,
          //   objectFit: "contain",
          //   // marginBottom: 10,
          // }}
        />
        <h5 style={{ color: "var(--app-medium-green)" }}>Communities</h5>
        <p style={{ textAlign: "center" }}>Connect with your community and check out other actions</p>

        <Button
          variant={"link"}
          onClick={(e) => {
            e.preventDefault();
            scrollToCommunities();
          }}
          className="touchable-opacity  pc-vanish"
          // href={`/technology/${campaign_technology_id}`}
          // onClick={() => navigator()}
          style={{ fontWeight: "bold", color: "var(--app-orange)" }}
        >
          Our Communities
        </Button>
      </div>

      <div
        className="one-box-footer phone-vanish"
        // style={{
        //   marginTop: "auto",
        //   display: "flex",
        //   flexDirection: "row",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   padding: 30,
        // }}
      >
        <Button
          onClick={() => scrollToCommunities()}
          style={{ background: "var(--app-medium-green)" }}
          className="tech-btn elevate-2 touchable-opacity"
        >
          <span style={{ fontSize: 15 }}> Communities</span>
        </Button>
      </div>
    </div>
  );
};
