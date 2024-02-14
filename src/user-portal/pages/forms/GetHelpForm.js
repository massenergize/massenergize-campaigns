import React, { useEffect, useState } from "react";
import CommunitySelector, { OTHER } from "./CommunitySelector";
import { Button, Form, ModalFooter } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DEFAULT_HELP_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSerSiKJ1QRWnmpES82KtEY3amru4CRgRHscXDu14ty97cADVg/viewform"; // to be provided by Amie

function GetHelpForm({ close, communities, authUser, campaign }) {
  const [form, setForm] = useState({});

  useEffect(() => {
    if (!authUser) return;
    const { community } = authUser || {};
    const name = community?.name || "";
    const isOther = name?.toLowerCase() === OTHER;
    const community_id = community?.id?.toString();
    const foundCom = campaign?.communities?.find(({ community }) => community?.id?.toString() === community_id);

    const initialData = {
      comId: isOther ? OTHER : community?.id?.toString(),
      campaign_community: foundCom,
    };

    setForm(initialData);
  }, [authUser]);

  const onChange = (data) => {
    const isOther = data?.comId === OTHER;
    const { comId } = data || {};
    const campaign_community = communities?.find(({ community }) => community?.id?.toString() === comId);

    setForm({
      ...(data || {}),
      campaign_community: isOther ? { help_link: DEFAULT_HELP_LINK } : campaign_community,
    });
  };

  const { campaign_community } = form || {};
  const { community, alias } = campaign_community || {};

  const findHelp = () => {
    window.open(campaign_community?.help_link || DEFAULT_HELP_LINK, "_blank");
  };

  const comName = alias || community?.name || "";

  return (
    <div>
      <div style={{ padding: 20 }}>
        <CommunitySelector onChange={onChange} data={form} readOnly />
        <Form.Text className="small-font">
          We will direct you to the right resources based on where you are from
          {` ${comName}`}
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
            background: "#292929",
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
            background: "var(--app-main-color)",
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
    campaign: state.campaign,
  };
};
export default connect(mapState)(GetHelpForm);
