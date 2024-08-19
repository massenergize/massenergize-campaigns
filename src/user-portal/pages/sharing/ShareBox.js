import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { apiCall } from "../../../api/messenger";
import copy from "clipboard-copy";
import URLS, { API_HOST } from "../../../api/urls";
const items = [
  { key: "facebook", text: "acebook", icon: "fa-facebook", alias: "facebook" },
  { key: "twitter", text: "Twitter", icon: "fa-twitter", alias: "twitter" },
  { key: "email", text: "Email", icon: "fa-envelope", alias: "email" },
  { key: "whatsapp", text: "Whatsapp", icon: "fa-whatsapp", alias: "whatsapp" },
  { key: "other", text: "Other", icon: "", alias: "" },
];
function ShareBox({ data, onChange, campaign, authUser, staticT }) {
  const [copied, setCopied] = useState(false);
  const [state, setState] = useState({});
  const [error, setError] = useState({});
  const [link, setLink] = useState("");
  data = data || {};

  const { user } = authUser || {};
  const generateLink = (obj) => {
    const path = new URL(window.location.href);
    const SHARE_HOST = URLS.SHARE;
    let backendVersionOfURL = `${SHARE_HOST}${path?.pathname}`;
    backendVersionOfURL = backendVersionOfURL?.split("api/").join("");
    const payload = {
      campaign_id: campaign?.id,
      email: user?.email,
      utm_source: campaign?.account?.subdomain || "unknown",
      url: backendVersionOfURL,
      utm_medium: obj.platform,
    };

    // return console.log("LEts see values", payload, campaign);
    apiCall("/campaigns.links.generate", payload).then((response) => {
      const { success, data, error } = response || {};
      if (!response || !success) {
        console.log("LINK_GENERATION_ERROR_BE: ", error);
        return setError(error);
      }

      setLink(data?.link || "");
    });
  };
  const updateState = (obj) => {
    const newValue = { ...state, ...obj };
    setState(newValue);
    onChange && onChange(newValue);
    generateLink(obj);
    setCopied(false);
  };

  useEffect(() => {
    const initObj = { platform: "other" };
    setState(initObj); // First time of opening, it should always choose "other"
    generateLink(initObj);
  }, []);

  const { platform } = state;

  const handleCopy = () => {
    copy(link);
    setCopied(true);
  };

  return (
    <div>
      <div style={{ padding: 20 }}>
        <div style={{ marginBottom: 10 }}>
          <Form.Text className="small-font">
            {staticT?.instruction?.text || "Please select a platform that you would like to share this technology to"}
          </Form.Text>
        </div>
        <Form
          className="m-2 pb-2"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          onChange={(e) => {
            const value = e.target.value;
            updateState({ platform: value });
          }}
        >
          {items.map(({ key, text, icon }, index) => {
            return (
              <>
                <Form.Check className="touchable-opacity" inline type="radio" id={`check-api-${key}`}>
                  <Form.Check.Input checked={platform === key} type={"radio"} value={key} />
                  <i
                    className={`fa ${icon} body-font`}
                    style={{
                      marginRight: 3,
                      // fontSize: 16,
                      color: "var(--app-main-color)",
                    }}
                  ></i>
                  <Form.Check.Label
                    className="touchable-opacity body-font"
                    style={{
                      // textTransform: "capitalize",
                      // fontWeight: "bold",
                      fontSize: 16,
                      color: "var(--app-main-color)",
                    }}
                  >
                    {text}
                  </Form.Check.Label>
                </Form.Check>
              </>
            );
          })}
        </Form>

        <div>
          <InputGroup className="mb-3 mt-2">
            <Form.Control
              readOnly
              // value="https://community.massenergize.org/ActonMA/actions/2144/"
              value={link || ""}
              // onChange={(e) => setComment(e.target.value)}
              placeholder="Generated platform link will show here..."
              aria-label="User comment"
              aria-describedby="basic-addon2"
            />
            <Button
              onClick={() => handleCopy()}
              variant="success"
              id="button-addon2"
              style={{ fontWeight: "bold", background: "var(--app-main-color)" }}
            >
              {copied ? staticT?.button?.copied?.text || "Copied!" : staticT?.button?.copy?.text || "Copy Link"}
            </Button>
          </InputGroup>
          <Form.Text className="small-font">
            {staticT?.hint?.text || "You can copy the link and share it"}{" "}
            {state?.platform === "other" ? "" : ` on ${state.platform}`}
          </Form.Text>
        </div>
      </div>
    </div>
  );
}

export default ShareBox;
