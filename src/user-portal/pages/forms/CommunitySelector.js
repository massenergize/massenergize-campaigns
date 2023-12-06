import React from "react";
import { COMMUNITY_LIST } from "../../data/user-portal-dummy-data";
import { Form, InputGroup } from "react-bootstrap";

function CommunitySelector({ selected }) {
  return (
    <div>
      <Form.Text>Please tell us where you are from (Editable)</Form.Text>
      {/* <p>Please tell us where you are from (Editable)</p> */}
      <Form className="m-2 pb-2">
        {COMMUNITY_LIST.map((item) => (
          <Form.Check inline type="radio" id={`check-api-${item.key}`}>
            <Form.Check.Input type={"radio"} isValid />
            <Form.Check.Label
              style={{
                textTransform: "Capitalize",
                fontWeight: "bold",
                color: "var(--app-deep-green)",
                fontSize: 15,
              }}
            >
              {item.name}
            </Form.Check.Label>
          </Form.Check>
        ))}
      </Form>
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Community?</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Tell us where you are from..."
            aria-label="text"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
    </div>
  );
}

export default CommunitySelector;
