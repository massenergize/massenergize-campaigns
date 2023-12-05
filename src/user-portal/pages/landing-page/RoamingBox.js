import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function RoamingBox() {
  return (
    <div style={{ margin: "100px 0px" }}>
      <Container>
        <Col lg={{ span: 9, offset: 1 }}>
          <Row>
            <Col lg={8}>
              <div className="elevate-float">
                <div
                  style={{
                    padding: "10px 30px",
                    background: "var(--app-kicking-yellow)",
                    borderRadius: 5,
                  }}
                >
                  <h3 className="m-0" style={{ fontSize: 23 }}>
                    What is Kicking Gas?
                  </h3>
                </div>
                <div
                  style={{
                    minHeight: 200,
                    background: "antiquewhite",
                  }}
                >
                  <p style={{ padding: "15px 25px", fontSize: 18 }}>
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset she remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset she
                  </p>
                  <div style={{ display: "flex", padding: "20px 35px" }}>
                    <Button
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
                src="https://i.pravatar.cc/300"
                style={{ borderRadius: "100%", width: 120, height: 120 }}
              ></img>
              <span style={{ fontSize: 12, color: "grey" }}>KEY CONTACT</span>
              <h6 className="m-0">ELLEN TOHN</h6>
              <p className="m-0">kaatbradamie@gmail.com</p>
              <p>+200 456 789 45</p>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default RoamingBox;
