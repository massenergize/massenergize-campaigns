import React, { useState } from "react";
import { Button, Form, InputGroup, ModalFooter } from "react-bootstrap";
import { COMMUNITY_LIST } from "../../data/user-portal-dummy-data";
import CommunitySelector, { OTHER } from "./CommunitySelector";
import Notification from "../../../components/pieces/Notification";
import { connect } from "react-redux";
import { validateEmail } from "../../../utils/utils";

function JoinUsForm({ campaign, close }) {
  const [form, setForm] = useState({});
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const joinUs = () => {
    const emailIsValid = validateEmail(email);
    if (!emailIsValid)
      return setError("Please provide a valid email address...");
    const { comId, zipcode, valueForOther } = form || {};
    if (comId === OTHER) {
      if (!zipcode || valueForOther)
        return setError("Please provide the zipcode & community name...");
    }
    // Now pick the form items and ship it to the backend...
  };

  return (
    <div className="">
      <div className="p-4">
        <CommunitySelector onChange={(data) => setForm(data)} data={form} />
        <div>
          <Form.Text>Join us because we are great! (Editable)</Form.Text>
          <InputGroup className="mb-3 mt-2">
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            <Form.Control
              value={email}
              type="email"
              placeholder="Enter Email Here..."
              aria-label="email"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                const value = e.target.value;
                setEmail(value);
              }}
            />
          </InputGroup>
        </div>
        <Notification show={error} good={!error}>
          {error}
        </Notification>
      </div>
      <ModalFooter style={{ padding: 0 }}>
        <Button
          onClick={() => close && close()}
          className="touchable-opacity"
          size="lg"
          style={{
            margin: 0,
            borderRadius: 0,
            borderWidth: 0,
            background: "#d53939",
          }}
        >
          Cancel
        </Button>
        <Button
          className="touchable-opacity"
          size="lg"
          style={{
            margin: 0,
            borderRadius: 0,
            borderWidth: 0,
            background: "var(--app-deep-green)",
            borderBottomRightRadius: 5,
          }}
        >
          Join Us
        </Button>
      </ModalFooter>
    </div>
  );
}

const mapState = (state) => {
  return { campaign: state.campaign };
};

export default connect(mapState)(JoinUsForm);
