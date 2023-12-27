import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import partnerLogo from "./../../../assets/imgs/me-logo.png";
import partnerLogo from "./../../../assets/imgs/me-round-logo.png";

function Banner({ title, secondary_logo, primary_logo, tagline }) {
  return (
    <Container style={{ marginTop: 70 }}>
      <Row>
        <Col
          lg={3}
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={primary_logo?.url}
            style={{
              borderRadius: "100%",
              width: 190,
              height: 190,
              marginBlock: 10,
              objectFit: "contain",
            }}
          ></img>
        </Col>
        <Col
          lg={6}
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "3rem",
              textTransform: "uppercase",
            }}
          >
            {title}
          </h1>
          <h5 style={{ fontWeight: "400", color: "var(--app-medium-green)" }}>
              {tagline ||"A CAMPAIGN TO GUIDE CLIMATE ACTION"}
          </h5>
        </Col>
        <Col
          lg={3}
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={
              secondary_logo?.url ||
              "https://massenergize-prod-files.s3.amazonaws.com/media/MassEnergize-logo-231130-142610.png"
            }
            style={{
              borderRadius: "100%",
              width: 190,
              height: 190,
              marginBlock: 10,
              objectFit: "contain",
            }}
          ></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
