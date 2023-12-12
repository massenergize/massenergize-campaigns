import React, { useEffect, useState } from "react";
import CommunitySelector from "./CommunitySelector";
import { Form } from "react-bootstrap";

function GetHelpForm() {
  const [form, setForm] = useState({});
  useEffect(() => {}, []);
  return (
    <div>
      <CommunitySelector onChange={(data) => setForm(data)} data={form} />
      <Form.Text>
        We will direct you to the right resources based on where you are from
      </Form.Text>
    </div>
  );
}

export default GetHelpForm;
