import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { apiCall } from "../../../api/messenger";
import copy from "clipboard-copy";
const items = [
  { key: "facebook", text: "acebook", icon: "fa-facebook" },
  { key: "twitter", text: "Twitter", icon: "fa-twitter" },
  { key: "email", text: "Email", icon: "fa-envelope" },
  { key: "whatsapp", text: "Whatsapp", icon: "fa-whatsapp" },
  { key: "other", text: "Other", icon: "" },
];
function ShareBox({ data, onChange, campaign, authUser }) {
  const [copied, setCopied] = useState(true);
  const [state, setState] = useState({});
  const [error, setError] = useState({});
  const [link, setLink] = useState("");
  data = data || {};

  const { user } = authUser || {};
  const generateLink = (obj) => {
    const path = new URL(window.location.href);

    const payload = {
      campaign_id: campaign?.id,
      email: user?.email,
      utm_source: campaign?.account?.subdomain || "unknown",
      url: path?.href,
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
    setState({ platform: "other" }); // First time of opening, it should always choose "other"
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
          <Form.Text>
            Please select a platform that you would like to share this
            technology to
          </Form.Text>
        </div>
        <Form
          className="m-2 pb-2"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onChange={(e) => {
            const value = e.target.value;
            updateState({ platform: value });
          }}
        >
          {items.map(({ key, text, icon }, index) => {
            return (
              <>
                <Form.Check
                  className="touchable-opacity"
                  inline
                  type="radio"
                  id={`check-api-${key}`}
                >
                  <Form.Check.Input
                    checked={platform === key}
                    type={"radio"}
                    value={key}
                    isValid
                  />
                  <i
                    className={`fa ${icon}`}
                    style={{
                      marginRight: 3,
                      fontSize: 16,
                      color: "var(--app-medium-green)",
                    }}
                  ></i>
                  <Form.Check.Label
                    className="touchable-opacity"
                    style={{
                      // textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "var(--app-deep-green)",
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
              style={{ fontWeight: "bold" }}
            >
              {copied ? "Copied!" : "Copy Link"}
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default ShareBox;
