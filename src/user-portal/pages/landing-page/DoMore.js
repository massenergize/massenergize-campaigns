import React from "react";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import { Col, Container, Row } from "react-bootstrap";

function DoMore({ campaign }) {
  const { communities, communities_section } = campaign || {};
  const { title, description } = communities_section || {};

  const COMMUNITY_PORTAL_URL = "https://communities.massenergize.org/";
  return (
    <div className="do-more-root">
      <CenteredWrapper>
        <Container>
          <h2
            style={{
              color: "black",
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            {title || " Participating Communities"}
          </h2>
          <p>{description}</p>
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
                    src={community?.logo?.url}
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
