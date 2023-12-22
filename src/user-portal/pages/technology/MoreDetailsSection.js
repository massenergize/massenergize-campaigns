import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";

function MoreDetailsSection({ sectionId, data }) {
  const { title, description } = data || {};
  if (!title && !description) return <></>;

  return (
    <div
      id={sectionId}
      className="mt-5 mb-2"
      style={{
        background: "white",
        width: "100%",
        padding: "80px 0px",
        minHeight: 200,
      }}
    >
      <OptimumWrapper>
        <SectionTitle className="mb-3">{title}</SectionTitle>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          style={{ textAlign: "justify" }}
          className="mb-4"
        ></p>

        {/* <img
          style={{
            width: "100%",
            height: 350,
            objectFit: "cover",
            borderRadius: 10,
          }}
          src="https://picsum.photos/id/870/300/300?grayscale&blur=2"
        /> */}
      </OptimumWrapper>
    </div>
  );
}

export default MoreDetailsSection;
