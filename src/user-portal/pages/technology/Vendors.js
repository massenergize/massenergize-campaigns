import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Row } from "react-bootstrap";

function Vendors({ sectionId, data, vendors }) {
  const { title, description } = data;

  // if(!vendors?.length)
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
        <SectionTitle className="mb-3">{title || "Vendors"}</SectionTitle>
        <p style={{ textAlign: "justify" }} className="mb-4">
          {description}
        </p>

        <Row>
          <ul style={{ display: "flex", flexWrap: "wrap" }}>
            {vendors?.map(({ vendor }, index) => {
              console.log("VENDORHERE", vendor)
              return (
                <li
                  onClick={() => {
                    window.open("http://www.google.com", "_blank");
                  }}
                  className="touchable-opacity"
                  style={{
                    flexBasis: "calc(33.33% - 10px)",
                    margin: "5px",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    color: "black",
                  }}
                  key={vendor?.id?.toString()}
                >
                  {vendor?.name || "..."}
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
