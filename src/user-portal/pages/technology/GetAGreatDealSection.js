import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";

function GetAGreatDealSection({ sectionId, data, image, deals, toggleDealModal }) {
  const { title, description, description_2 } = data || {};
  if (!Object.keys(data || {}).length) return <></>;

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
          className="mb-3 body-font"
        ></p>
        <div className="" style={{ position: "relative" }}>
          <div
            style={{
              zIndex: 2,
            }}
          >
            <Row style={{ margin: "50px 0px" }}>
              {(deals || []).map((item, index) => {
                if (!item || !item?.title) return <></>;
                return (
                  <Col
                    onClick={() => {
                      if (item?.link) return window.open(item?.link, "_blank");
                      if (item?.description) return toggleDealModal && toggleDealModal(item);
                    }}
                    className="elevate-4 touchable-opacity"
                    key={item?.id?.toString()}
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
                    <h3 className="body-font" style={{ margin: 0, color: "var(--app-accent-3)" }}>
                      {item.title}
                    </h3>
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
