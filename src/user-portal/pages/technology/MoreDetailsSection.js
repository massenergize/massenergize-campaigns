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
      className=" g-s-container"
      style={{
        background: "white",
        width: "100%",
      }}
    >
      <OptimumWrapper>
        <SectionTitle className="mb-3">{title}</SectionTitle>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          style={{ textAlign: "justify" }}
          className="mb-4 body-font"
        ></p>
      </OptimumWrapper>
    </div>
  );
}

export default MoreDetailsSection;
