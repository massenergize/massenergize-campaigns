import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { COMMUNITY_LIST } from "../../data/user-portal-dummy-data";
import CommunitySelector from "./CommunitySelector";

function JoinUsForm() {
  return (
    <div>
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
