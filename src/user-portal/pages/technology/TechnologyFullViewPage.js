import React from "react";
import PageWrapper from "../wrappers/PageWrapper";
import carPhoto from "./../../../assets/imgs/car.jpeg";
import { Col, Row } from "react-bootstrap";
import InteractionsPanel from "./InteractionsPanel";

function TechnologyFullViewPage() {
  return (
    <PageWrapper>
      <h2 style={{ color: "var(--app-deep-green)" }}>Drive Electric Cars</h2>
      <Row>
        <Col lg={9}>
          <img
            className="elevate-float-pro mt-2"
            src={carPhoto}
            style={{
              width: "100%",
              height: 420,
              objectFit: "cover",
              borderRadius: 10,
            }}
          />
          <InteractionsPanel />
          <p className="mt-3" style={{ textAlign: "justify" }}>
            t ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing t ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing t ever since the
            1500s, when an unknown printer took a galley of type rised in the
            1960s with the release of Letraset sheets containing. when an
            unknown printer took a galley of type rised in the 1960s with the
            release of Letraset sheets containing. when an unknown printer took
            a galley of type rised in the 1960s with the release of Letraset
            sheets containing.{" "}
            <span
              style={{
                fontWeight: "bold",
                color: "var(--app-orange)",
                textDecoration: "underline",
              }}
            >
              Read More...
            </span>
          </p>
        </Col>
        <Col lg={3}>
          <div
            className="mt-2"
            style={{
              border: "solid 2px var(--app-deep-green)",
              height: 150,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "100%",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  alignSelf: "center",
                  justifySelf: "center",
                  textAlign: "center",
                  margin: 0,
                  fontSize:13, 
                  fontWeight:'bold', 
                  width:"83%"
                }}
              >
                Get all deals and updates on this technology
              </p>
            </div>
            <div
              className="touchable-opacity"
              style={{
                background: "var(--app-deep-green)",
                padding: "10px 20px",

                // borderBottomRightRadius: 5,
                marginTop: "auto",
              }}
            >
              <p
                style={{
                  color: "white",
                  margin: 0,
                  //   padding: "7px 30px",
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                GET UPDATES
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </PageWrapper>
  );
}

export default TechnologyFullViewPage;
