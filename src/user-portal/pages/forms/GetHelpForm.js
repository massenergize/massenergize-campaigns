import React from "react";
import CommunitySelector from "./CommunitySelector";
import { Form } from "react-bootstrap";

function GetHelpForm() {
  return (
    <div>
      <CommunitySelector />
      <Form.Text>
        We will direct you to the right resources based on where you are from
      </Form.Text>
    </div>
  );
}

export default GetHelpForm;
