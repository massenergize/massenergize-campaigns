import React from "react";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import { Col, Container, Row } from "react-bootstrap";

function DoMore({ campaign }) {
  const { communities } = campaign || {};

  console.log("LE COMMUNITIES", communities);
  const COMMUNITY_PORTAL_URL = "https://communities.massenergize.org/";
  return (
    <div style={{ padding: "20vh 0px" }}>
      <CenteredWrapper>
        <Container>
          <h2
            style={{
              color: "black",
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Do More In Your Community (Editable)
          </h2>
          <p>
            (Editable) There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing hidden
            in the middle of text.
          </p>
          <Row>
            {(communities || []).map(({ community, id }, index) => {
              return (
                <Col
                  key={index?.toString() + id?.toString()}
                  lg={4}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    // justifyContent: "center",
                    flexWrap: "wrap",
                    margin: "10px 5px",

                    // flexBasis:"30%"
                  }}
                >
                  <img
                    style={{
                      width: 100,
                      height: 60,
                      marginRight: 10,
                      objectFit: "contain",
                    }}
                    src={communities?.logo?.url}
                  />
                  <h6
                    onClick={() => {
                      window.open(
                        `${COMMUNITY_PORTAL_URL}${community?.subdomain}`
                      );
                    }}
                    className="touchable-opacity"
                    style={{
                      textDecoration: "underline",
                      color: "var(--app-deep-green)",
                      fontWeight: "bold",
                    }}
                  >
                    {community?.name || "..."}
                  </h6>
                </Col>
              );
            })}
          </Row>
        </Container>
      </CenteredWrapper>
    </div>
  );
}

export default DoMore;
