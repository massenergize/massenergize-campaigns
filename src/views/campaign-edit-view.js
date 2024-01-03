import Loading from "../components/pieces/Loading";
import { CampaignDetailsAndPreview } from "../admin-portal/create-campaign/campaign-details-and-preview";
import useFetch from "../hooks/useFetch";
import { useCampaignContext } from "../hooks/use-campaign-context";

export function CampaignEditView ({id, STEP, setStep}) {
  const {
    setNewCampaignDetails,
  } = useCampaignContext();

  const {
    data: campaignData,
    error: campaignError,
    isValidating: campaignIsValidating,
    isLoading: campaignIsLoading,
  } = useFetch(`campaigns.info`, null, {
    data: { id },
    errorCode: "FETCH_CAMPAIGN_ERROR",
    onSuccess: (data) => {
      setNewCampaignDetails(data);
    }
  })

  return (
    <div className={""}>
      { campaignIsLoading ? (<Loading/>) : null }
      { campaignError ? (<div><h5>An error occurred</h5></div>) : null }
      {
        !campaignIsLoading && !campaignError ? (<CampaignDetailsAndPreview setStep={setStep} step={STEP}/>) : null
      }

    </div>
  )
}
