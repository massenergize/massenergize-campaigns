import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Row } from "react-bootstrap";

function Vendors({ sectionId }) {
  return (
    <div
      id={sectionId}
      className="mt-5 elevate-float-pro"
      style={{
        background: "antiquewhite",
        width: "100%",
        padding: "80px 0px",
        minHeight: 200,
      }}
    >
      <OptimumWrapper>
        <SectionTitle className="mb-3">Vendors</SectionTitle>
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

        <Row>
          <ul style={{ display: "flex", flexWrap: "wrap" }}>
            {[
              1, 2, 3, 4, 5, 5, 6, 7, 6, 54, 43, 3, 33, 3, 2, 2, 2, 3, 4, 5, 5,
              6, 6,
            ].map((item, index) => {
              return (
                <li
                  style={{
                    flexBasis: "calc(33.33% - 10px)",
                    margin: "5px",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    color: "black",
                  }}
                  key={index?.toString()}
                >
                  Vendor Number - {index}
                </li>
              );
            })}
          </ul>
        </Row>
      </OptimumWrapper>
    </div>
  );
}

export default Vendors;
