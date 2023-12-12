import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";

function GetAGreatDealSection({ sectionId, data, image }) {
  const { title, description, first_deal, second_deal, third_deal } =
    data || {};
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
        <SectionTitle className="mb-3">{title}</SectionTitle>
        <p style={{ textAlign: "justify" }} className="mb-3">
          {description}
        </p>
        <div className="" style={{ position: "relative" }}>
          <img
            style={{
              width: "100%",
              height: 350,
              objectFit: "cover",
              borderRadius: 10,
            }}
            src={
              image?.url ||
              "https://picsum.photos/id/870/300/300?grayscale&blur=2"
            }
          />
          <div
            style={{
              zIndex: 2,
              marginTop: -240,
              marginLeft: -90,
            }}
          >
            <Row>
              {[first_deal, second_deal, third_deal].map((item, index) => {
                if (!item) return <></>;
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
                      textAlign: "center",
                    }}
                  >
                    <h3 style={{ margin: 0, color: "red" }}>{item}</h3>
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
