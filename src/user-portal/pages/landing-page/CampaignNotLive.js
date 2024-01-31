import React from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";

function CampaignNotLive({ campaign }) {
  if (campaign?.is_published) return <></>;
  return (
    <Alert variant="warning">
      <i className="fa fa-warning" style={{ marginRight: 10 }} />
      <i>{`This campaign '${
        campaign?.title || "..."
      }' is not published yet. Admins are still working on it. Please come back later when its complete...`}</i>
    </Alert>
  );
}

const mapState = (state) => {
  return { campaign: state.campaign };
};
export default connect(mapState)(CampaignNotLive);
