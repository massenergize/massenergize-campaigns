import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SmartRichText from "../../../components/SmartRichText";
const LEN = 250;
function RoamingBox({ advert, managersSection, keyContact, showMore, staticT }) {
  const desc = advert?.description;
  const preview = desc?.substr(0, LEN);
  const isLong = desc?.length > LEN;


  const { phone_number, email } = keyContact || {};
  return (
    <div className="roaming-container my-5">
      <Container>
        {/*<Col lg={{ span: 10,}}>*/}
        <Row>
          <Col lg={8}>
            <div
              className={"rounded-4 overflow-hidden"}
              style={{
                border: "solid 2px var(--app-main-color)",
              }}
            >
              <div className="roaming-header">
                <h3 className="m-0 subheader-font">{advert?.title}</h3>
              </div>
              <div
                className="flex-column"
                style={{
                  minHeight: 200,
                }}
              >
                {/*<div className={"px-3 h-100"}>*/}
                <SmartRichText
                  className={"px-3"}
                  maxHeight={120}
                  renderSeeMore={(_, isLong) => {
                    if (!isLong) return <></>;
                    return (
                      <Button
                        style={{ marginTop: 10 }}
                        onClick={() => showMore && showMore()}
                        className=" touchable-opacity app-btn body-font ms-3 mt-4"
                      >
                        {staticT?.learnMore?.button || "Learn More"}
                      </Button>
                    );
                  }}
                >
                  {advert?.description}
                </SmartRichText>

                {/*</div>*/}
                {/* <p className="roaming-text" style={{ padding: "15px 25px" }}>
                    {preview}
                    {isLong ? "..." : ""}
                  </p> */}
                {/* <div
                    style={{
                      display: "flex",
                      padding: "20px 35px",
                      marginTop: "auto",
                    }}
                  >
                    <Button
                      // className="app-btn"
                      onClick={() => showMore && showMore()}
                      // style={{
                      //   marginLeft: "auto",
                      //   borderRadius: 100,
                      //   background: "var(--app-deep-green)",
                      //   borderWidth: 0,
                      //   padding: "9px 19px",
                      // }}
                      className="elevate-2 touchable-opacity app-btn"
                    >
                      Learn More
                    </Button>
                  </div> */}
              </div>
            </div>
          </Col>

          <Col
            lg={{ span: 3, offset: 1 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <img
              className="mb-2"
              src={keyContact?.image?.url || "/img/customer-support.svg"}
              style={{
                borderRadius: "100%",
                width: 90,
                height: 90,
                objectFit: "cover",
              }}
              alt={keyContact?.image?.name || "Key Contact"}
            ></img>
            <span className="mb-1 small-font text-muted">{managersSection?.title || staticT?.keyContact?.text || "Key Contact"}</span>
            <h6
              className="mb-1 body-font"
              style={{
                color: "var(--app-accent-3)",
                fontWeight: "800",
                textTransform: "capitalize",
                textAlign: "center",
                // fontSize: 15,
              }}
            >
              <span>{keyContact?.name || "..."}</span>
            </h6>
            {email && (
              <p
                role={"button"}
                tabIndex={0}
                onClick={() => {
                  window.open(`mailto:${keyContact?.email}`, "_blank");
                }}
                className="mb-1 touchable-opacity small-font"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textDecoration: "underline",
                  alignItems: "center",
                  fontWeight: "bold",
                }}
              >
                <i className=" fa fa-envelope" style={{ marginRight: 6 }} />
                <span> {keyContact?.email}</span>
              </p>
            )}
            {phone_number && (
              <p
                role={"button"}
                tabIndex={0}
                className="touchable-opacity small-font"
                onClick={() => {
                  window.open(`tel:${keyContact?.phone_number}`, "_blank");
                }}
                style={{ textDecoration: "underline" }}
              >
                <i className="fa fa-phone" /> <span>{keyContact?.phone_number}</span>
              </p>
            )}
          </Col>
        </Row>
        {/*</Col>*/}
      </Container>
    </div>
  );
}

export default RoamingBox;
