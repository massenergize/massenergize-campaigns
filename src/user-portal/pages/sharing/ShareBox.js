import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const items = [
  { key: "facebook", text: "facebook", icon: "fa-facebook" },
  { key: "twitter", text: "twitter", icon: "fa-twitter" },
  { key: "email", text: "Email", icon: "fa-envelope" },
  { key: "whatsapp", text: "Whatsapp", icon: "fa-whatsapp" },
];
function ShareBox() {
  return (
    <div>
      <div style={{ padding: 20 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {items.map((item, index) => {
            return (
              <center
                key={index.toString()}
                className="touchable-opacity"
                style={{ margin: 10 }}
              >
                <i
                  className={`fa ${item?.icon}`}
                  style={{
                    marginRight: 6,
                    fontSize: 18,
                    color: "var(--app-medium-green)",
                  }}
                ></i>
                <small
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: 18,
                    color: "var(--app-deep-green)",
                  }}
                >
                  {item?.text}
                </small>
              </center>
            );
          })}

          {/* <center>
          <i className="fa fa-facebook"></i>
          <small>Facebook</small>
        </center>
        <center>
          <i className="fa fa-twitter"></i>
          <small>Twitter</small>
        </center> */}
        </div>

        <div>
          <InputGroup className="mb-3 mt-2">
            <Form.Control
              value="https://community.massenergize.org/ActonMA/actions/2144"
              // onChange={(e) => setComment(e.target.value)}
              placeholder="Type comment here..."
              aria-label="User comment"
              aria-describedby="basic-addon2"
            />
            <Button variant="success" id="button-addon2">
              Copy Link
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default ShareBox;
