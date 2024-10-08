import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import JoinUsForm from "../forms/JoinUsForm";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MOBILE_WIDTH } from "../../../utils/Constants";
import { useMediaQuery } from "react-responsive";
import { generateUniqueRandomString } from "../../../utils/utils";
import URLS from "../../../api/urls";
import CONFIG from "../../../config/config.json";
import { getStaticText } from "../../../redux/actions/actions";

const EXCLUDED_FOOTER_MENU_KEYS = ["deals", "vendors"];
export const TRANSLATION_HELPERS_LINK =
  "https://docs.google.com/forms/d/1ay2paNG3x_gZL8hhzmghIYSEuHDA_I4MRZJf7cEt_00/viewform?edit_requested=true";
function Footer({ toggleModal, campaign, authUser, staticT }) {
  const { footer } = getStaticText();
  const navigator = useNavigate();
  const { navigation, newsletter_section: customization, communities } = campaign || {};
  const { user } = authUser || {};
  const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH });
  const renderMenus = (styles = {}) => {
    const coms =
      communities?.map((com) => {
        const comName = com?.alias || com?.community?.name || "";
        const url = `${URLS.COMMUNITIES}/${com?.community?.subdomain}`;
        return {
          text: comName,
          key: com?.id,
          url,
          newTab: true,
        };
      }) || [];
    return [...(navigation || []), ...coms].map(({ text, key, url, newTab }) => {
      const isExcluded = EXCLUDED_FOOTER_MENU_KEYS.includes(key);
      if (isExcluded) return <></>;
      const salt = generateUniqueRandomString(6);
      return (
        <li
          role={"button"}
          tabIndex={0}
          className="touchable-opacity small-font"
          onClick={() => {
            if (newTab) return window.open(url, "_blank");
            navigator(`${url}&salt=${salt}`);
          }}
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
          confirmText={footer?.modal?.ok?.text || "Subscribe"}
          callbackOnSubmit={({ close }) => close && close()}
        />
      ),
      title: `${footer?.modal?.title?.prefix || "Follow"} ${campaign?.title}` || "...",
      fullControl: true,
    });
  };
  if (isMobile)
    return (
      <MobileFooter
        staticT={footer}
        signUpForNewsletter={signUpForNewsletter}
        renderMenus={renderMenus}
        customization={customization}
      />
    );
  return (
    <div
      className="phone-vanish"
      style={{
        background: "var(--app-main-color)",
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
            {/* We should be able to change this part tooo from the admin portal */}
            <h4 className="subheader-font" style={{ color: "white" }}>
              {customization?.title ||footer?.header?.title?.text||"Newsletter"}
            </h4>
            <p className="body-font" style={{ color: "white" }}>
              {customization?.description ||footer?.header?.description?.text || "Sign up for email updates with the latest info on events and incentives!"}
            </p>
            <Button
              className=" touchable-opacity"
              style={{
                background: "white",
                borderWidth: 0,
                padding: "8px 30px",
                marginTop: 15,
                marginBottom: 15,
                borderRadius: 5,
                fontWeight: "bold",
                width: "100%",
                color: "black",
              }}
              onClick={() => signUpForNewsletter()}
            >
              {footer?.news_letter?.subscribe_button?.text || " Subscribe to our Newsletter"}
            </Button>
            {user?.email && (
              <p
                className="small-font"
                style={{
                  marginTop: 10,
                  // fontSize: 12,
                  color: "#e1efce",
                }}
              >
                <i>
                  {" "}
                  {footer?.news_letter?.subscribe_message?.text || "You've already subscribed with"}{" "}
                  <b style={{}}>'{user?.email || ""}' </b>
                </i>
              </p>
            )}

            <a target="_blank" href={TRANSLATION_HELPERS_LINK} style={{ margin: "10px 0px", fontWeight: "bold" }}>
              <small style={{ color: "white" }}>{footer?.help_us_translate?.text|| "Would you like to help translate this site?"}</small>
            </a>
          </Col>

          <small style={{ color: "white", fontWeight: "bold", width: "100%", opacity: 0.6 }}>
            Build Version {CONFIG.BUILD_VERSION}
          </small>
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
              <h4 className="subheader-font" style={{ color: "white" }}>
                {footer?.quick_links?.text || " Quick Links"}
              </h4>
              <ul
                style={{
                  listStyleType: "none",
                  maxHeight: 200,
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  paddingLeft: 0,
                  overflow: "scroll",
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

const MobileFooter = ({ signUpForNewsletter, renderMenus, customization, staticT }) => {
  return (
    <div style={{ minHeight: 250, margin: 0 }}>
      <div
        style={{
          padding: 20,
          background: "var(--app-main-color)",
          height: "80%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h5 className="subheader-font" style={{ color: "white" }}>
          {customization?.title|| staticT?.header?.title?.text || "Newsletter"}
        </h5>
        <p className="body-font" style={{ color: "white" }}>
          {customization?.description ||staticT?.header?.description?.text || "Sign up for email updates with the latest info on events and incentives!"}
        </p>
        <Button
          className="elevate-float-pro touchable-opacity"
          style={{
            background: "white",
            borderWidth: 0,
            padding: "8px 30px",
            marginTop: 5,
            borderRadius: 5,
            fontWeight: "bold",
            color: "black",
            width: "100%",
          }}
          onClick={() => signUpForNewsletter()}
        >
          {staticT?.subscribe_button?.text || " Subscribe"}
        </Button>
        <a target="_blank" href={TRANSLATION_HELPERS_LINK} style={{ margin: "10px 0px " }}>
          <small style={{ color: "white" }}>{staticT?.help_us_translate?.text || "Would you like to help translate this site?"}</small>
        </a>
        <small
          style={{
            marginTop: 15,
            color: "white",
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
            opacity: 0.6,
          }}
        >
          Build Version {CONFIG.BUILD_VERSION}
        </small>
      </div>
      <div style={{ display: "flex", background: "#000010", minHeight: "20%", padding: 20 }}>
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
