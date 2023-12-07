import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";

function MoreDetailsSection({ sectionId }) {
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
        <SectionTitle className="mb-3">More Details</SectionTitle>
        <p style={{ textAlign: "justify" }} className="mb-4">
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

        <img
          style={{
            width: "100%",
            height: 350,
            objectFit: "cover",
            borderRadius: 10,
          }}
          src="https://picsum.photos/id/870/300/300?grayscale&blur=2"
        />
      </OptimumWrapper>
    </div>
  );
}

export default MoreDetailsSection;
