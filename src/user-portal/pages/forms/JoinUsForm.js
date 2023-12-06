import React from "react";
import { Form, InputGroup } from "react-bootstrap";

function JoinUsForm() {
  return (
    <div>
      <div>
        <Form.Text>Please tell us where you are from (Editable)</Form.Text>
        {/* <p>Please tell us where you are from (Editable)</p> */}
        <Form className="m-2 pb-3">
          {["Wayland", "Framingham", "Concord", "Newton", "Abode", "Other"].map(
            (item) => (
              <Form.Check inline type="radio" id={`check-api-${item}`}>
                <Form.Check.Input type={"radio"} isValid />
                <Form.Check.Label
                  style={{
                    textTransform: "Capitalize",
                    fontWeight: "bold",
                    color: "var(--app-deep-green)",
                    fontSize: 15,
                  }}
                >
                  {item}
                </Form.Check.Label>
              </Form.Check>
              //   </div>
            )
          )}
        </Form>
      </div>
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Where?</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Tell us where you are from..."
            aria-label="text"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
      <div>
        <Form.Text>Join us because we are great! (Editable)</Form.Text>
        <InputGroup className="mb-3 mt-2">
          <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Enter Email Here..."
            aria-label="email"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
      <div>
        <Form.Text>Enter your zip code (Editable)</Form.Text>
        <InputGroup className="mb-3 mt-2">
          <InputGroup.Text id="basic-addon1">Zip Code</InputGroup.Text>
          <Form.Control
            type="number"
            placeholder="Enter zip code here..."
            aria-label="zipcode"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
    </div>
  );
}

export default JoinUsForm;
