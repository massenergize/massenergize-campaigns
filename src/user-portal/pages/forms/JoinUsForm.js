import React, { useState } from "react";
import {
  Button,
  Form,
  InputGroup,
  ModalFooter,
  Spinner,
} from "react-bootstrap";
import { COMMUNITY_LIST } from "../../data/user-portal-dummy-data";
import CommunitySelector, { OTHER } from "./CommunitySelector";
import Notification from "../../../components/pieces/Notification";
import { connect } from "react-redux";
import { validateEmail } from "../../../utils/utils";
import { apiCall } from "../../../api/messenger";
import { bindActionCreators } from "redux";
import { loadUserObjAction } from "../../../redux/actions/actions";

function JoinUsForm ({
  campaign,
  close,
  setUserObj,
  authUser,
  description,
  callbackOnSubmit,
  onConfirm,
  confirmText,
  cancelText,
  noForm,
  apiURL,
  processPayload,
}) {
  const [form, setForm] = useState({});
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useState(() => {
    if (authUser) {
      const { user, community, zipcode } = authUser || {};
      const { email } = user || {};
      setEmail(email);
      const isOther = community?.name?.toLowerCase() === OTHER;
      setForm({
        ...form,
        comId: isOther ? OTHER : community?.id?.toString(),
        zipcode,
        name: community?.name,
        valueForOther: isOther ? authUser?.community_name : "",
      });
    }
  }, [authUser]);

  const makeNotification = (message, good = false) => {
    setError({ message, good });
  };

  const joinUs = () => {
    if (onConfirm) return onConfirm({ data: form, close });
    // if (authUser) return alert("You've already followed. Thank you very much!");
    const emailIsValid = validateEmail(email);
    if (!emailIsValid)
      return makeNotification("Please provide a valid email address...");
    const { comId, zipcode, valueForOther } = form || {};
    var otherContent = {};
    if (comId === OTHER) {
      otherContent = { community_name: valueForOther, zipcode, is_other: true };
      if (!zipcode || !valueForOther)
        return makeNotification(
          "Please provide the zipcode & community name..."
        );
    }

    setLoading(true);
    let payload = {
      email,
      campaign_id: campaign?.id,
      community_id: comId,
      ...otherContent,
    };
    payload = processPayload ? processPayload(payload) : payload;
    makeNotification(
      "Well done, thank you for joining us!",
      true
    );
    apiCall(apiURL || "/campaigns.follow", payload).then((response) => {
      setLoading(false);
      if (!response?.success) {
        makeNotification(response.error)
        // setError("Error: ", response.error);
        return console.log("FOLLOW_ERROR_BE: ", response.error);
      }
      setTimeout(() => {
        //Just so that closing the modal holds off a few seconds for the user to ready the
        //success message
        callbackOnSubmit && callbackOnSubmit({ close, user: response.data });
        setUserObj(response.data);
      }, 2000);
    });
  };

  return (
    <div className="">
      <div className="p-4">
        {description && <p>{description}</p>}
        <CommunitySelector onChange={(data) => setForm(data)} data={form} />
        {!noForm && (
          <div>
            {/* <Form.Text>Join us because we are great!</Form.Text> */}
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
        )}
        <Notification show={error.message} good={error.good}>
          {error?.message}
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
            background: "#292929",
          }}
        >
          {cancelText || "Cancel"}
        </Button>
        <Button
          className="touchable-opacity"
          disabled={loading}
          onClick={() => joinUs()}
          size="lg"
          style={{
            margin: 0,
            borderRadius: 0,
            borderWidth: 0,
            background: "var(--app-main-color)",
            borderBottomRightRadius: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {loading && <Spinner size="sm" style={{ marginRight: 6 }}></Spinner>}
          {confirmText || "Join Us"}
        </Button>
      </ModalFooter>
    </div>
  );
}

const mapState = (state) => {
  return { campaign: state.campaign, authUser: state.user };
};

const mapDispatch = (dispatch) => {
  return bindActionCreators(
    {
      setUserObj: loadUserObjAction,
    },
    dispatch
  );
};
export default connect(mapState, mapDispatch)(JoinUsForm);
