import React from "react";
import PageWrapper from "../wrappers/PageWrapper";
import carPhoto from "./../../../assets/imgs/car.jpeg";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../../../components/pieces/SectionTitle";
function OneEvent({ event }) {
  const { title, start_date, description } = event || {};
  return (
    <PageWrapper>
      <SectionTitle>One Event of Technology</SectionTitle>
      <Row>
        <Col lg={9}>
          <img
            className="elevate-float-pro mt-3"
            src={
              "https://massenergize-prod-files.s3.amazonaws.com/media/new_image-231024-210048"
            }
            style={{
              width: "100%",
              height: 420,
              objectFit: "cover",
              borderRadius: 10,
            }}
          />

          <p className="mt-4" style={{ textAlign: "justify" }}>
            <span style={{ display: "block", overflowY: "hidden" }}>
              t ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing t ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing t ever since the 1500s, when an unknown printer took a
              galley of type rised in the 1960s with the release of Letraset
              sheets containing. when an unknown printer took a galley of type
              rised in the 1960s with the release of Letraset sheets containing.
              when an unknown printer took a galley of type rised in the 1960s
              with the release of Letraset sheets containing. the 1960s with the
              release of Letraset sheets containing. when an unknown printer
              took a galley of type rised in the 1960s with the release of
              Letraset sheets containing. when an unknown printer took a galley
              of type rised in the 1960s with the release of Letraset sheets
              containing.{" "}
            </span>
            {/* <span
              //   onClick={() => setHeight(readMore ? "100%" : 100)}
              className="touchable-opacity"
              style={{
                fontWeight: "bold",
                color: "var(--app-orange)",
                textDecoration: "underline",
              }}
            >
              Read More...
            </span> */}
          </p>
        </Col>
        <Col lg={3} className="mt-2">
          <div>
            <h6
              style={{ color: "var(--app-medium-green)", fontWeight: "bold" }}
            >
              Date
            </h6>
            <small>September 27th 2023, 4:00 pm-5:00 pm</small>
          </div>

          <div
            className="mt-2 touchable-opacity"
            style={{
              background: "var(--app-medium-green)",
              padding: 10,
              color: "white",
              textAlign: "center",
              borderRadius: 5,
            }}
          >
            <p style={{ margin: 0 }}>Register</p>
          </div>
        </Col>
      </Row>
    </PageWrapper>
  );
}

export default OneEvent;
