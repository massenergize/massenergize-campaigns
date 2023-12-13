import React, { useRef, useState } from "react";
import {
  Button,
  Form,
  InputGroup,
  ModalFooter,
  Spinner,
} from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";
import Notification from "../../../components/pieces/Notification";

function NewTestimonialForm({ close }) {
  const [notification, setNotification] = useState({});
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const notify = (message, good = false) => {
    setNotification({ message, show: message, good });
  };

  console.log("Lets see the notification", notification);

  return (
    <div>
      <div style={{ padding: 20 }}>
        <Form.Text>Tell us your story!</Form.Text>
        <InputGroup className="mb-3 mt-2">
          <InputGroup.Text id="basic-addon1">Your Name*</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Enter your name here..."
            aria-label="email"
            aria-describedby="basic-addon1"
            onChange={(e) => {}}
          />
        </InputGroup>
        <InputGroup className="mb-3 mt-2">
          <InputGroup.Text id="basic-addon1">Vendor Name</InputGroup.Text>
          <Form.Control
            required
            type="email"
            placeholder="Enter the name of a vendor involved here... (optional)"
            aria-label="email"
            aria-describedby="basic-addon1"
            onChange={(e) => {}}
          />
        </InputGroup>
        <InputGroup className="mb-3 mt-2">
          <InputGroup.Text id="basic-addon1">Title*</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Enter the title of the testimonial..."
            aria-label="email"
            aria-describedby="basic-addon1"
            onChange={(e) => {}}
          />
        </InputGroup>

        <div>
          <Editor
            apiKey="6pg5u1ebssmbyjcba68sak0bfhx28w247y9lcdnq1m5q94t1" // TODO: Put it somewhere safer later
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
      </div>
      <div>
        <div style={{ padding: "0px 20px" }}>
          <Notification show={notification?.message} good={notification?.good}>
            {notification?.message}
          </Notification>
        </div>

        <ModalFooter style={{ padding: 0 }}>
          <Button
            disabled={loading}
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
            disabled={loading}
            onClick={() => notify("Here we go again", true)}
            size="lg"
            style={{
              margin: 0,
              borderRadius: 0,
              borderWidth: 0,
              background: "var(--app-deep-green)",
              borderBottomRightRadius: 5,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {loading && (
              <Spinner size="sm" style={{ marginRight: 6 }}></Spinner>
            )}
            Create
          </Button>
        </ModalFooter>
      </div>
    </div>
  );
}

export default NewTestimonialForm;
