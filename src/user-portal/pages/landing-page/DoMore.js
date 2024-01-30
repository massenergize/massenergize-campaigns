import React from "react";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import { Col, Container, Row } from "react-bootstrap";

function DoMore({ campaign }) {
  const { communities, communities_section } = campaign || {};
  const { title, description } = communities_section || {};

  console.log("Here are teh communiteis", communities);
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
              color: "var(--app-accent-3)",
            }}
          >
            {title || " Participating Communities"}
          </h2>
          <p>{description}</p>
          <Row style={{ flexWrap: "wrap", display: "flex" }}>
            {(communities || []).map(({ community, id, alias, extra_links: links }, index) => {
              return (
                <Col
                  key={index?.toString() + id?.toString()}
                  lg={3}
                  style={{
                    display: "flex",
                    flexDirection: "column",
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
                    alt={"logo"}
                  />
                  <ul>
                    <li
                      role={"button"}
                      onClick={() => {
                        window.open(`${COMMUNITY_PORTAL_URL}${community?.subdomain}`);
                      }}
                      className="touchable-opacity"
                      style={{
                        textDecoration: "underline",
                        color: "var(--app-accent-3)",
                        fontWeight: "bold",
                      }}
                    >
                      {alias || community?.name || "..."}
                    </li>
                    {links?.map((linkObj) => {
                      return (
                        <li
                          role={"button"}
                          onClick={() => {
                            window.open(`${linkObj?.link}`);
                          }}
                          className="touchable-opacity"
                          style={{
                            textDecoration: "underline",
                            color: "var(--app-accent-3)",
                            fontWeight: "bold",
                          }}
                        >
                          {linkObj?.label || "..."}
                        </li>
                      );
                    })}
                  </ul>
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
