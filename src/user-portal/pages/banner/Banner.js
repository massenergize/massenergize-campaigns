import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Banner() {
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
            src="https://i.pravatar.cc/300"
            style={{
              borderRadius: "100%",
              width: 120,
              height: 120,
              marginBlock: 10,
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
          <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
            WAYLAND ENERGY CHALLENGE
          </h1>
          <h5>A CAMPAIGN TO GUIDE CLIMATE ACTION</h5>
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
            src="https://i.pravatar.cc/300"
            style={{
              borderRadius: "100%",
              width: 120,
              height: 120,
              marginBlock: 10,
            }}
          ></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
