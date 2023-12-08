import React, { useState } from "react";
import { Button, Form, InputGroup, ModalFooter } from "react-bootstrap";
import { COMMUNITY_LIST } from "../../data/user-portal-dummy-data";
import CommunitySelector from "./CommunitySelector";
import Notification from "../../../components/pieces/Notification";
import { connect } from "react-redux";

function JoinUsForm({ campaign }) {
  const [option, setOption] = useState();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const joinUs = () => {};

  return (
    <div className="">
      <div className="p-4">
        <CommunitySelector />
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
        <Notification show={error} good={!error}>
          {error}
        </Notification>
      </div>
      <ModalFooter style={{ padding: 0 }}>
        <Button
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
