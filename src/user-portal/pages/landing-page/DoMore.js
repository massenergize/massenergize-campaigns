import React from "react";
import CenteredWrapper from "../wrappers/CenteredWrapper";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { useSelector } from "react-redux";
import OptimumWrapper from "../wrappers/OptimumWrapper";

const DoMore = (props) => {
  const { optimum } = props;

  if (optimum) return <OptimumWrapper>{<DoMoreComponent {...props} />}</OptimumWrapper>;

  return (
    <CenteredWrapper>
      {" "}
      <DoMoreComponent {...props} />{" "}
    </CenteredWrapper>
  );
};

function DoMoreComponent() {
  const campaign = useSelector((state) => state.campaign);
  const { communities, communities_section } = campaign || {};
  const { title, description } = communities_section || {};

  const COMMUNITY_PORTAL_URL = "https://communities.massenergize.org/";
  return (
    <div className="do-more-root">
      {/* <OptimumWrapper> */}
      <Container>
        <Row>
          <Col className={"pt-3"}>
            <SectionTitle>{title || " Participating Communities"}</SectionTitle>
            {/* <h2
            style={{
              color: "black",
              fontWeight: "bold",
              marginBottom: 20,
              color: "var(--app-accent-3)",
            }}
          >
            {title || " Participating Communities"}
          </h2> */}
            <p>{description}</p>
          </Col>
        </Row>
        <Row style={{ flexWrap: "wrap", display: "flex", marginTop: 20 }}>
          {(communities || []).map(({ community, id, alias, extra_links: links }, index) => {
            return (
              <Col
                key={index?.toString() + id?.toString()}
                lg={3}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  // justifyContent: "center",
                  flexWrap: "wrap",
                  margin: "10px 0px",

                  // flexBasis:"30%"
                }}
              >
                <center className="m-for-center" style={{ display: "inline" }}>
                  <img
                    style={{
                      width: 100,
                      height: 60,
                      marginBottom: 10,
                      objectFit: "contain",
                    }}
                    src={community?.logo?.url}
                    alt={"logo"}
                  />
                  <ul style={{ padding: 0, listStyleType: "none" }}>
                    <li
                      role={"button"}
                      onClick={() => {
                        window.open(`${COMMUNITY_PORTAL_URL}${community?.subdomain}`);
                      }}
                      className="touchable-opacity body-font"
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
                </center>
              </Col>
            );
          })}
        </Row>
      </Container>
      {/* </OptimumWrapper> */}
    </div>
  );
}

export default DoMore;
