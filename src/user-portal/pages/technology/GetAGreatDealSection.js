import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";

function GetAGreatDealSection({ sectionId }) {
  return (
    <div
      id={sectionId}
      className="mt-5"
      style={{
        background: "white",
        width: "100%",
        padding: "80px 0px",
        minHeight: 200,
        marginBottom: 140,
      }}
    >
      <OptimumWrapper>
        <SectionTitle className="mb-3">Get A Great Deal</SectionTitle>
        <p style={{ textAlign: "justify" }} className="mb-3">
          {" "}
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing t ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing t ever since the 1500s, when an unknown printer took a
          galley of type rised in the 1960s with the release of Letraset sheets
          containing. when an unknown printer took a galley of type rised in the
          1960s with the release of Letraset
        </p>
        <div className="" style={{ position: "relative" }}>
          <img
            style={{
              width: "100%",
              height: 350,
              objectFit: "cover",
              borderRadius: 10,
            }}
            src="https://picsum.photos/id/870/300/300?grayscale&blur=2"
          />
          <div
            style={{
              zIndex: 2,
              marginTop: -240,
              marginLeft: -90,
            }}
          >
            <Row>
              {[1, 2, 3].map((item, index) => {
                return (
                  <Col
                    className="elevate-4 touchable-opacity"
                    key={index?.toString()}
                    lg={{ span: 3, offset: 1 }}
                    style={{
                      height: 150,
                      background: "white",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 5,
                    }}
                  >
                    <h3 style={{ margin: 0, color: "red" }}>$4000 Rebate</h3>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </OptimumWrapper>
    </div>
  );
}

export default GetAGreatDealSection;
