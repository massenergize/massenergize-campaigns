import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";
import { isEmpty } from "../../../helpers/utils/string";

function Vendors({ sectionId, data, vendors, staticT }) {
  const { title, description } = data;

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
        <SectionTitle className="mb-3" style={{ color: "black" }}>
          {title || staticT?.title?.text || "..."}
        </SectionTitle>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          style={{ textAlign: "justify" }}
          className="mb-4 body-font"
        ></p>

        <Row>
          <ul className="vendor-list-group">
            {vendors?.map(({ vendor }) => {
              const NO_LOGO = isEmpty(vendor?.logo?.url);

              return (
                <li
                  role={"button"}
                  tabIndex={0}
                  onClick={() => {
                    const link = vendor?.website;
                    if (!link) return;
                    window.open(link, "_blank");
                  }}
                  className="touchable-opacity body-font mb-3 list-unstyled d-flex"
                  key={vendor?.id?.toString()}
                >
                  <Row className={"m-auto"}>
                    <Col className={"text-center"}>
                      <img
                        src={NO_LOGO ? "/img/store.svg" : vendor?.logo?.url}
                        alt={vendor?.name}
                        className={"mb-2"}
                        style={{
                          width: 100,
                          height: 70,
                          objectFit: "contain",
                          borderRadius: 5,
                          ...(NO_LOGO && {
                            opacity: 0.2,
                            pointerEvents: "none",
                          }),
                        }}
                      />
                      <p>{vendor?.name || "..."}</p>
                    </Col>
                  </Row>
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
