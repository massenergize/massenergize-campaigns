import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import JoinUsForm from "../forms/JoinUsForm";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MOBILE_WIDTH } from "../../../utils/Constants";
import { useMediaQuery } from "react-responsive";

const EXCLUDED_FOOTER_MENU_KEYS = ["incentives", "vendors"];
function Footer ({ toggleModal, campaign, authUser }) {
  const navigator = useNavigate();
  const { navigation } = campaign || {};
  const { user } = authUser || {};
  const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH });

  const renderMenus = (styles = {}) => {
    return (navigation || []).map(({ text, key, url }, index) => {
      const isExcluded = EXCLUDED_FOOTER_MENU_KEYS.includes(key);
      if (isExcluded) return <></>;
      return (
        <li
          role={"button"}
          tabIndex={0}
          className="touchable-opacity"
          onClick={() => navigator(url)}
          style={{
            padding: "10px 20px",
            color: "white",
            fontSize: 17,
            textDecoration: "underline",
            ...(styles || {}),
          }}
          key={key}
        >
          {text}
        </li>
      );
    });
  };

  const signUpForNewsletter = () => {
    toggleModal({
      show: true,
      component: (props) => (
        <JoinUsForm
          {...(props || {})}
          confirmText="Subscribe"
          callbackOnSubmit={({ close }) => close && close()}
        />
      ),
      title: `Follow ${campaign?.title}` || "...",
      fullControl: true,
    });
  };

  if (isMobile)
    return (
      <MobileFooter
        signUpForNewsletter={signUpForNewsletter}
        renderMenus={renderMenus}
      />
    );
  return (
    <div
      className="phone-vanish"
      style={{
        background: "var(--app-deep-green)",
        width: "100%",
        height: 310,
        marginTop: 40,
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
            <h4 style={{ color: "white" }}>Newsletter</h4>
            <p style={{ color: "white" }}>
              Unlock all the exclusive deals from our vendors, and stay updated
              with all actions you can take to help save the planet!
            </p>
            <Button
              className="elevate-float-pro touchable-opacity"
              style={{
                background: "var(--app-medium-green)",
                borderWidth: 0,
                padding: "8px 30px",
                marginTop: 15,
                borderRadius: 5,
                fontWeight: "bold",
                width: "100%",
              }}
              onClick={() => signUpForNewsletter()}
            >
              Subscribe to our Newsletter
            </Button>
            {user?.email && (
              <p
                style={{
                  marginTop: 10,
                  fontSize: 12,
                  color: "#e1efce",
                }}
              >
                <i>
                  {" "}
                  You've already subscribed with{" "}
                  <b style={{}}>'{user?.email || ""}' </b>
                </i>
              </p>
            )}
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
              <h4 style={{ color: "white" }}>Quick Links</h4>
              <ul
                style={{
                  listStyleType: "none",
                  maxHeight: 200,
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  paddingLeft: 0,
                }}
              >
                {renderMenus()}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

const mapState = (state) => {
  return { campaign: state.campaign, authUser: state.user };
};
export default connect(mapState)(Footer);

const MobileFooter = ({ signUpForNewsletter, renderMenus }) => {
  return (
    <div style={{ height: 250, margin: 0 }}>
      <div
        style={{
          padding: 20,
          background: "var(--app-deep-green)",
          height: "80%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h5 style={{ color: "white" }}>Newsletter</h5>
        <p style={{ color: "white", fontSize: "var(--mob-normal-font-size" }}>
          Unlock all the exclusive deals from our vendors, and stay updated with
          all actions you can take to help save the planet!
        </p>
        <Button
          className="elevate-float-pro touchable-opacity"
          style={{
            background: "var(--app-medium-green)",
            borderWidth: 0,
            padding: "8px 30px",
            marginTop: 5,
            borderRadius: 5,
            fontWeight: "bold",
            width: "100%",
          }}
          onClick={() => signUpForNewsletter()}
        >
          Subscribe
        </Button>
      </div>
      <div style={{ display: "flex", background: "#000010", minHeight: "20%" }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyleType: "none",
            flexWrap: "wrap",
            margin: "auto",
            paddingLeft: 0,
          }}
        >
          {renderMenus({
            padding: 5,
            fontSize: "var(--mob-normal-font-size)",
            fontWeight: "bold",
          })}
        </ul>
      </div>
    </div>
  );
};
