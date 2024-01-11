import React, { useEffect, useState } from "react";
import CommunitySelector, { OTHER } from "./CommunitySelector";
import { Button, Form, ModalFooter } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const DEFAULT_HELP_LINK = ""; // to be provided by Amie

function GetHelpForm ({ close, communities, authUser }) {
  const [form, setForm] = useState({});

  useEffect(() => {
    if (!authUser) return;
    const { community } = authUser || {};
    const name = community?.name || "";
    const isOther = name?.toLowerCase() === OTHER;
    const initialData = { comId: isOther ? OTHER : community?.id?.toString() };
    setForm(initialData);
  }, [authUser]);

  const onChange = (data) => {
    const isOther = data?.comId === OTHER;
    const { comId } = data || {};
    const campaign_community = communities?.find(
      ({ community }) => community?.id?.toString() === comId
    );

    setForm({
      campaign_community: isOther
        ? { help_link: DEFAULT_HELP_LINK }
        : campaign_community,
      ...(data || {}),
    });
  };

  const { campaign_community } = form || {};
  const { community } = campaign_community || {};
  const findHelp = () => {
    window.open(campaign_community?.help_link, "_blank");
  };

  // useEffect(() => {}, []);

  return (
    <div>
      <div style={{ padding: 20 }}>
        <CommunitySelector onChange={onChange} data={form} readOnly />
        <Form.Text>
          We will direct you to the right resources based on where you are from
          {!community?.name ? "" : `(${community?.name}) `}
        </Form.Text>
      </div>
      <ModalFooter style={{ padding: 0 }}>
        <Button
          // disabled={loading}
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
          Close
        </Button>
        <Button
          className="touchable-opacity"
          // disabled={loading || authUser}
          onClick={() => findHelp()}
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
          Let's Go
        </Button>
      </ModalFooter>
    </div>
  );
}

const mapState = (state) => {
  return {
    communities: state.campaign?.communities || [],
    authUser: state.user,
  };
};
export default connect(mapState)(GetHelpForm);
