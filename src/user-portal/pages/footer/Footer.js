import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <div
      style={{
        background: "var(--app-deep-green)",
        width: "100%",
        height: 310,
        marginTop: 40,
        // padding: 50,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          padding: 50,
          width: "50%",
        }}
      >
        <Container>
          <Col lg={{ span: 6, offset: 3 }}>
            <h4 style={{ color: "white" }}>FOLLOW</h4>
            <p style={{ color: "white" }}>
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset she remaining essen
            </p>
            <Button
              className="elevate-float-pro touchable-opacity"
              style={{
                background: "var(--app-medium-green)",
                borderWidth: 0,
                padding: "10px 30px",
                marginTop: 15,
                borderRadius: 500,
                fontWeight: "bold",
              }}
            >
              I want To Follow
            </Button>
          </Col>
        </Container>
      </div>
      <div
        style={{
          background: "#282828",
          marginLeft: "auto",
          width: "50%",
          height: "100%",
          padding: 50,
        }}
      >
        <Container>
          <Row>
            <Col lg={{ span: 9, offset: 1 }} style={{}}>
              <h4 style={{ color: "white" }}>QUICK LINKS</h4>
              <ul
                style={{
                  listStyleType: "none",
                  maxHeight: 200,
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  paddingLeft: 0,
                }}
              >
                {[2, 3, 3, 4, 4, 5, 5, 5, 64, 7, 8, 10].map((item, index) => {
                  return (
                    <li
                      style={{
                        padding: "10px 20px",
                        color: "white",
                        textDecoration: "underline",
                      }}
                      key={index?.toString()}
                    >
                      Menu Item - {item}
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
