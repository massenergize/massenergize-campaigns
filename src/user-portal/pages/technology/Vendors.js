import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Row } from "react-bootstrap";

function Vendors({ sectionId, data, vendors }) {
  const { title, description } = data;

  if (!description && !vendors?.length) return <></>;

  // if(!vendors?.length)
  return (
    <div
      id={sectionId}
      className="mt-5 elevate-float-pro g-s-container"
      style={{
        background: "antiquewhite",
        width: "100%",
        // padding: "80px 0px",
        // minHeight: 200,
      }}
    >
      <OptimumWrapper>
        <SectionTitle className="mb-3">{title || "Vendors"}</SectionTitle>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          style={{ textAlign: "justify" }}
          className="mb-4 paragraph-font"
        ></p>

        <Row>
          <ul
            // style={{ display: "flex", flexWrap: "wrap" }}
            className="vendor-list-group"
          >
            {vendors?.map(({ vendor }) => {
              console.log("WHAT IS VENDOR", vendor)
              return (
                <li
                  role={"button"}
                  tabIndex={0}
                  onClick={() => {
                    const link = vendor?.website;
                    if (!link) return;
                    window.open(link, "_blank");
                  }}
                  className="touchable-opacity paragraph-font"
                  // style={{
                  //   flexBasis: "calc(33.33% - 10px)",
                  //   margin: "5px",
                  //   fontWeight: "bold",
                  //   textDecoration: "underline",
                  //   color: "black",
                  // }}
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
