import { useContext } from "react";
import { CampaignContext } from "../contexts/campaign-context";

export const useCampaignContext = () => {
  const [
    {
      lists,
      campaign,
      originalCampaign,
      history
    },
    dispatch
  ] = useContext(CampaignContext);

  const handleCampaignDetailsChange = (name, value) => {
    dispatch({ type: "SET_FIELD_VALUE", payload: { field: name, value } });
  };

  const setNewCampaignDetails = (payload) => {
    dispatch({ type: "NEW_CAMPAIGN", payload });
  }

  return {
    campaign,
    campaignDetails: campaign,
    originalCampaign,
    originalCampaignDetails: originalCampaign,
    history,
    lists,
    handleCampaignDetailsChange,
    setNewCampaignDetails,
  }
}
