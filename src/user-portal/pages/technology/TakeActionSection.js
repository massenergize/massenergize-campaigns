import React from "react";
import OptimumWrapper from "../wrappers/OptimumWrapper";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FULL_TECHNOLOGY } from "../../../utils/Constants";

const dummies = [
  {
    icon: "fa-question",
    title: "Ask A Question ",
    actionText: "Get Help",
    content: "Community volunteers are ready to answer questions, big or small",
    url: "coaches",
    type: "help",
  },
  {
    icon: "fa-money",
    title: "Show Me The Money",
    actionText: "Incentives",
    content: "It gets better! See all the incentives available to you.",
    url: "incentives",
    type: "incentives",
  },
  {
    icon: "fa-handshake-o",
    title: "Find A Vendor",
    actionText: "Vendors",
    content: "The critical question - who should you have quote your project?",
    url: "vendors",
    type: "vendors",
  },
];
function TakeAtionSetion({ sectionId, scrollToSection, authUser, trackActivity, campaign, vendors }) {
  const navigator = useNavigate();
  const { user } = authUser || {};
  const common = {
    campaign_id: campaign?.id,
    source: FULL_TECHNOLOGY,
    // target: name,
    email: user?.email,
  };

  const thereAreNoVendors = !vendors?.length;

  return (
    <div
      id={sectionId}
      className="elevate-float-pro"
      style={{
        background: "var(--app-main-color)",
        width: "100%",
        padding: "30px 0px",
        minHeight: 200,
      }}
    >
      <OptimumWrapper>
        <SectionTitle className="mb-3" style={{ color: "white" }}>
          Take Action!
        </SectionTitle>
        <Row>
          {dummies.map((item, index) => {
            return (
              <Col
                className="elevate-float-pro m-3 rounded-4"
                style={{
                  background: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 310,
                  padding: 30,
                  borderRadius: 3,
                  opacity: thereAreNoVendors && item?.type === "vendors" ? 0.3 : 1,
                }}
                key={index?.toString()}
                md={4} lg={3}
              >
                <i className={`fa ${item.icon} mb-1 mt-2`} style={{ fontSize: 60, color: "var(--app-main-color)" }} />
                <h6
                  className="mt-2 mb-2 body-font"
                  style={{
                    color: "black",
                    textTransform: "uppercase",
                    textAlign: "center",
                    // fontSize: 13,
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </h6>
                <p
                  className="body-font"
                  style={{
                    // fontSize: "medium",
                    textAlign: "center",
                    marginBottom: 20,
                  }}
                >
                  {item.content}
                </p>

                <div
                  onClick={() => {
                    if (thereAreNoVendors && item?.type === "vendors") return <></>;
                    trackActivity({
                      ...common,
                      target: item?.actionText,
                      button_type: item?.type,
                    });
                    scrollToSection(item.url);
                  }}
                  className="elevate-2 touchable-opacity"
                  style={{
                    padding: "7px 30px",
                    color: "white",
                    background: "var(--app-main-color)",
                    borderRadius: 500,
                  }}
                >
                  <p className="small-font" style={{ margin: 0, fontWeight: "bold" }}>
                    {item.actionText}
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </OptimumWrapper>
    </div>
  );
}

export default TakeAtionSetion;
