import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import {Row} from "react-bootstrap";

function Vendors({sectionId, data, vendors}) {
  const {title, description} = data;

  if (!description && !vendors?.length) return <></>;

  return (
    <div
      id={sectionId}
      className=" g-s-container"
      style={{
        background: "var(--app-accent-1)",
        width: "100%",
      }}
    >
      <OptimumWrapper>
        <SectionTitle className="mb-3" style={{color: "black"}}>
          {title || "Vendors"}
        </SectionTitle>
        <p
          dangerouslySetInnerHTML={{__html: description}}
          style={{textAlign: "justify"}}
          className="mb-4 body-font"
        ></p>

        <Row>
          <ul className="vendor-list-group">
            {vendors?.map(({vendor}) => {

              return (
                <li
                  role={"button"}
                  tabIndex={0}
                  onClick={() => {
                    const link = vendor?.website;
                    if (!link) return;
                    window.open(link, "_blank");
                  }}
                  className="touchable-opacity body-font"
                  key={vendor?.id?.toString()}
                >
                  {vendor?.logo && <img src={vendor?.logo?.url} alt={vendor?.name}
                                        style={{
                                          margin: "0px 20px",
                                          width: "60px",
                                          height: "60px",
                                          objectFit: "contain"
                                        }}/>}
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
