import React from "react";
import Comments from "../../components/admin-components/Comments";
import { CampaignCommentView } from "./campaign-comment-view";

const CampaignComments = ({
  campaignDetails,
  setCampaignDetails,
  setStep,
  lists,
}) => {
  return (
    <div>
      <CampaignCommentView campaign={campaignDetails} />
    </div>
  );
};

export default CampaignComments;
