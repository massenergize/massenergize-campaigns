import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function RoamingBox({ advert, keyContact }) {
  const preview = advert?.description?.substr(0, 250);
  return (
    <div style={{ margin: "100px 0px" }}>
      <Container>
        <Col lg={{ span: 9, offset: 1 }}>
          <Row>
            <Col lg={8}>
              <div className="elevate-float-pro">
                <div
                  style={{
                    padding: "10px 30px",
                    background: "var(--app-kicking-yellow)",
                    borderRadius: 5,
                  }}
                >
                  <h3 className="m-0" style={{ fontSize: 23 }}>
                    {advert?.title}
                  </h3>
                </div>
                <div
                  style={{
                    minHeight: 200,
                    background: "antiquewhite",
                  }}
                >
                  <p style={{ padding: "15px 25px", fontSize: 18 }}>
                    {preview}...
                  </p>
                  <div style={{ display: "flex", padding: "20px 35px" }}>
                    <Button
                      onClick={() => window.open("http://google.com", "_blank")}
                      style={{
                        marginLeft: "auto",
                        borderRadius: 100,
                        background: "var(--app-deep-green)",
                        borderWidth: 0,
                        padding: "9px 19px",
                      }}
                      className="elevate-2 touchable-opacity"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              //   lg={3}
              lg={{ span: 2, offset: 2 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className="mb-2"
                src={keyContact?.image?.url || "https://i.pravatar.cc/300"}
                style={{ borderRadius: "100%", width: 120, height: 120 }}
              ></img>
              <span className="mb-1" style={{ fontSize: 12, color: "#c8c8c8" }}>
                KEY CONTACT
              </span>
              <h6
                className="mb-1"
                style={{
                  color: "var(--app-medium-green)",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  textAlign: "center",
                  fontSize: 15,
                }}
              >
                <span>{keyContact?.name || "..."}</span>
              </h6>
              <p
                className="mb-1"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <i className=" fa fa-envelope" style={{ marginRight: 6 }} />
                <span> {keyContact?.email}</span>
              </p>
              <p>
                <i className="fa fa-phone" />{" "}
                <span>{keyContact?.phone_number}</span>
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default RoamingBox;
