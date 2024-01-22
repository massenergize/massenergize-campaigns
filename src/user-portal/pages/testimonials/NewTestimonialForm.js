import React, { useEffect, useRef, useState } from "react";
import { Button, Form, InputGroup, ModalFooter, Spinner } from "react-bootstrap";
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
  const { user, community } = authUser || {};
  const [notification, setNotification] = useState({});
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);

  const setState = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const getValue = (name, pop = false) => {
    const value = (form || {})[name];
    if (pop && name) delete form[name];
    return value;
  };

  const listOfCommunities = campaign?.communities || [];

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
    editorRef?.current?.setContent("");
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
    const chosenCom = getValue("chosenCommunity", true);
    const payload = {
      ...form,
      user_id: user?.id,
      community_id: chosenCom || community?.id || null,
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
        updateTestimonials({ [data?.id]: data, ...testimonials });
        notify(
          "Thanks for leaving a testimonial! Our admins will review & publish it as soon as possible!",
          true,
        );
      })
      .catch((e) => {
        setLoading(false);
        console.log("ERROR_CREATING_TESTIMONIAL_SYNT: ", e?.toString());
        notify(e?.toString());
      });
  };

  const inflate = () => {
    setForm({ chosenCommunity: community?.id });
  };

  useEffect(() => {
    inflate();
  }, []);

  const technologies = campaign?.technologies || [];

  return (
    <div>
      <div
        style={{
          // padding: 20,
          // maxHeight: 600,
          position: "relative",
          // overflowX: "scroll",
        }}
      >
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

        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Text>Include an image in your testimonial</Form.Text>
          <Form.Control
            className="mt-2"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const files = e?.target.files || [];
              const value = files[0];

              setState("image", value);
            }}
          />
        </Form.Group>

        <div style={{ marginBottom: 15 }}>
          <Form.Text>Select your community</Form.Text>
          <Form.Select
            value={getValue("chosenCommunity") || ""}
            style={{
              fontWeight: "bold",
              color: "var(--app-medium-green)",
              marginTop: 5,
            }}
            onChange={(e) => setState("chosenCommunity", value(e))}
          >
            <option value={NULL}>--- Select your community ---</option>
            {listOfCommunities?.map(({ community }, index) => {
              return (
                <option key={index?.toString()} value={community?.id}>
                  {community?.name || "..."}
                </option>
              );
            })}
          </Form.Select>
        </div>
        <div style={{ marginBottom: 15 }}>
          <Form.Text>What technology is this testimonial under?</Form.Text>
          <Form.Select
            value={getValue("campaign_technology_id") || ""}
            style={{
              fontWeight: "bold",
              color: "var(--app-medium-green)",
              marginTop: 5,
            }}
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
              height: 300,
              menubar: false,
              plugins: [
                "advlist",
                // "autolink",
                "lists",
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
                "link",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify link | bullist numlist outdent indent | " +
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

        <ModalFooter style={{ padding: 0, marginTop: 20 }}>
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
            {loading && <Spinner size="sm" style={{ marginRight: 6 }}></Spinner>}
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
    dispatch,
  );
};
export default connect(mapState, mapDispatch)(NewTestimonialForm);
