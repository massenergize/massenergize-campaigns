import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";

function GetAGreatDealSection ({ sectionId, data, image }) {
  const {
    title,
    description,
    first_deal,
    second_deal,
    third_deal,
    description_2,
    first_link,
    second_link,
    third_link,
  } = data || {};
  if (!Object.keys(data || {}).length) return <></>;

  const boxes = [
    { text: first_deal, link: first_link },
    { text: second_deal, link: second_link },
    { text: third_deal, link: third_link },
  ];
  return (
    <div
      id={sectionId}
      className="mt-5 g-s-container"
      style={{
        background: "white",
        width: "100%",
        // padding: "80px 0px",
        // minHeight: 200,
        // marginBottom: 140,
      }}
    >
      <OptimumWrapper>
        <SectionTitle className="mb-3">{title}</SectionTitle>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          style={{ textAlign: "justify" }}
          className="mb-3 paragraph-font"
        ></p>
        <div className="" style={{ position: "relative" }}>
          {/* <img
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
          /> */}
          <div
            style={{
              zIndex: 2,
              // marginTop: -240,
              // marginLeft: -102,
            }}
          >
            <Row style={{ margin: "50px 0px" }}>
              {/* {[first_deal, second_deal, third_deal].map((item, index) => { */}
              {(boxes || []).map((item, index) => {
                if (!item || !item?.text) return <></>;
                return (
                  <Col
                    onClick={() => window.open(item?.link, "_blank")}
                    className="elevate-4 touchable-opacity"
                    key={index?.toString()}
                    lg={{ span: 3 }}
                    style={{
                      height: 150,
                      background: "white",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 5,
                      textAlign: "center",
                      marginRight: 50,
                      marginBottom: 15,
                    }}
                  >
                    <h3 style={{ margin: 0, color: "red" }}>{item.text}</h3>
                  </Col>
                );
              })}
            </Row>
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: description_2 }}
            style={{ textAlign: "justify" }}
            className="mb-3 paragraph-font"
          ></p>
        </div>
      </OptimumWrapper>
    </div>
  );
}

export default GetAGreatDealSection;
