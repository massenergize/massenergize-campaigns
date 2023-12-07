import React from "react";
import PageWrapper from "../wrappers/PageWrapper";
import carPhoto from "./../../../assets/imgs/car.jpeg";
import { Col, Row } from "react-bootstrap";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { useNavigate } from "react-router-dom";
function OneTestimonial() {
  const navigator = useNavigate();
  return (
    <PageWrapper>
      <SectionTitle>One Testimonial of Technology</SectionTitle>
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
          </p>
        </Col>
        <Col lg={3} className="mt-2">
          <div
            style={{
              border: "solid 1px var(--app-deep-green)",
              padding: 10,
              //   marginBottom: 10,
              background: "var(--app-deep-green)",
            }}
          >
            <h6
              style={{
                color: "white",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              Other Testimonials
            </h6>
          </div>

          <ul
            style={{
              listStyleType: "",
              padding: "15px 15px",
              border: "solid 1px green",
              listStyle: "none",
            }}
          >
            {[2, 3, 4, 3, 2, 2, 3, 4, 5, 5, 5].map((item, index) => {
              return (
                <li
                  style={{
                    color: "var(--app-medium-green)",

                    fontWeight: "bold",
                    fontSize: 14,
                    textDecoration: "underline",
                    marginBottom: 8,
                  }}
                >
                  Testimonial Number - {index}
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </PageWrapper>
  );
}

export default OneTestimonial;
