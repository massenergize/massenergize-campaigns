import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Form,
  InputGroup,
  ModalFooter,
  Spinner,
} from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";
import Notification from "../../../components/pieces/Notification";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { apiCall } from "../../../api/messenger";
import { setTestimonialsActions } from "../../../redux/actions/actions";

const NULL = "null";
function NewTestimonialForm({
  close,
  campaign,
  callbackOnSubmit,
  authUser,
  updateTestimonials,
  testimonials,
}) {
  console.log("LEts see the campaign", campaign);
  const { user, community } = authUser || {};
  const [notification, setNotification] = useState({});
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);

  const setState = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const getValue = (name) => {
    return (form || {})[name];
  };
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  // useEffect(() => {
  //   const { user } = authUser || {};
  //   // setForm({ ...form, name: user?.full_name });
  // }, []);

  const value = (e) => e?.target?.value;

  const notify = (message, good = false) => {
    setNotification({
      message,
      show: message,
      good,
    });
  };

  const reset = () => {
    setForm({});
    editorRef.setContent("");
  };
  const submitTestimonial = () => {
    const { name, title, campaign_technology_id } = form || {};
    setNotification({});
    // if (!name) return notify("Please ensure that you have provided : name");
    if (!title) return notify("Please ensure that you have provided : title");
    if (!campaign_technology_id || campaign_technology_id === NULL) {
      return notify("Please ensure that you have provided : technology");
    }
    setLoading(true);
    const body = editorRef?.current?.getContent();
    const payload = {
      ...form,
      user_id: user?.id,
      community_id: community?.id,
      body,
    };

    apiCall("/campaigns.technologies.testimonials.create", payload)
      .then((response) => {
        setLoading(false);
        const { success, data, error } = response || {};
        if (!response || !success) {
          console.log("ERROR_CREATING_TESTIMONIAL_BE:", error);
        }
        reset();
        // console.log("Data after testimonial", data);
        updateTestimonials([data, ...testimonials]);
      })
      .catch((e) => {
        setLoading(false);
        console.log("ERROR_CREATING_TESTIMONIAL_SYNT: ", e?.toString());
        notify(e?.toString());
      });
  };

  const technologies = campaign?.technologies || [];

  return (
    <div>
      <div style={{ padding: 20 }}>
        <Form.Text>Tell us your story!</Form.Text>
        {/* <InputGroup className="mb-3 mt-2">
          <InputGroup.Text style={{ fontWeight: "bold" }} id="basic-addon1">
            Your Name*
          </InputGroup.Text>
          <Form.Control
            value={getValue("name") || ""}
            type="text"
            placeholder="Enter your name here..."
            aria-label="name"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setState("name", value(e));
            }}
          />
        </InputGroup> */}
        {/* <InputGroup className="mb-3 mt-2">
          <InputGroup.Text style={{ fontWeight: "bold" }} id="basic-addon1">
            Vendor Name
          </InputGroup.Text>
          <Form.Control
            required
            type="text"
            value={getValue("vendor_name") || ""}
            placeholder="Enter the name of a vendor involved here... (optional)"
            aria-label="vendor name"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setState("vendor_name", value(e));
            }}
          />
        </InputGroup> */}
        <InputGroup className="mb-3 mt-2">
          <InputGroup.Text style={{ fontWeight: "bold" }} id="basic-addon1">
            Title*
          </InputGroup.Text>
          <Form.Control
            type="text"
            value={getValue("title") || ""}
            placeholder="Enter the title of the testimonial..."
            aria-label="title"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setState("title", value(e));
            }}
          />
        </InputGroup>
        <div style={{ marginBottom: 15 }}>
          <Form.Select
            value={getValue("campaign_technology_id") || ""}
            style={{ fontWeight: "bold", color: "var(--app-medium-green)" }}
            onChange={(e) => setState("campaign_technology_id", value(e))}
          >
            <option value={NULL}>--- Select a technology ---</option>
            {technologies?.map(({ campaign_technology_id, name }, index) => {
              return (
                <option
                  key={campaign_technology_id?.toString() || index?.toString()}
                  value={campaign_technology_id}
                >
                  {name}
                </option>
              );
            })}
          </Form.Select>
        </div>

        <div>
          <Editor
            apiKey="6pg5u1ebssmbyjcba68sak0bfhx28w247y9lcdnq1m5q94t1" // TODO: Put it somewhere safer later
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>Start telling your story here...</p>"
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
            onClick={() => submitTestimonial()}
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

const mapState = (state) => {
  return {
    campaign: state.campaign,
    authUser: state.user,
    testimonials: state.testimonials,
  };
};

const mapDispatch = (dispatch) => {
  return bindActionCreators(
    { updateTestimonials: setTestimonialsActions },
    dispatch
  );
};
export default connect(mapState, mapDispatch)(NewTestimonialForm);