import Loading from "../components/pieces/Loading";
import { CampaignDetailsAndPreview } from "../admin-portal/create-campaign/campaign-details-and-preview";
import { useCampaignContext } from "../hooks/use-campaign-context";
import useSWR from "swr";
import { fetchCampaign } from "../requests/campaign-requests";
import { HorizontalPushLoader } from "../components/horizontal-push-loader/horizontal-push-loader";
import { useEffect, useState } from "react";
import { apiCall } from "../api/messenger";

export function CampaignEditView({ id, edit = true, STEP, setStep }) {
  const { setNewCampaignDetails } = useCampaignContext();

  const [campaignIsLoading, setLoading] = useState(true);
  const [campaignError, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiCall(`campaigns.info`, { id })
      .then((response) => {
        setLoading(false);
        const { error, data, success } = response || {};
        console.log("FETCH_CAMPAIGN_ERROR_BE:", error);
        if (!success) return setError(`Sorry, something happened please try again: ${error}`);
        setNewCampaignDetails(data);
      })
      .catch((e) => {
        setLoading(false);
        console.log("FETCH_CAMPAIGN_ERROR", e);
        setError(e?.toString());
      });
  }, [id]);

  // const {
  //   data: campaignData,
  //   error: campaignError,
  //   isValidating: campaignIsValidating,
  //   isLoading: campaignIsLoading,
  // } = useSWR(id ? `campaigns.info/${id}` : null, async () => {
  //   return await fetchCampaign(id,`campaigns.info`);
  // }, {
  //   data: { id },
  //   errorCode: "FETCH_CAMPAIGN_ERROR",
  //   onSuccess: (data) => {
  //     setNewCampaignDetails(data);
  //   }
  // })

  // useEffect(() => {
  //   if (campaignData && id) {
  //     setNewCampaignDetails(campaignData);
  //   }
  // }, [campaignData, id, setNewCampaignDetails])

  if (campaignError)
    return (
      <div className="p-4">
        <h5>An error occurred</h5>
      </div>
    );

  return (
    <div className={""}>
      {campaignIsLoading ? <HorizontalPushLoader className={"mt-5"} /> : null}
      {campaignError ? (
        <div>
          <h5>An error occurred</h5>
        </div>
      ) : null}
      {!campaignIsLoading && !campaignError ? <CampaignDetailsAndPreview setStep={setStep} step={STEP} /> : null}
    </div>
  );
}
