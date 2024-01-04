import { useState } from "react";
import { AdminLayout } from "../../../layouts/admin-layout";
import { StartCampaign } from "../../create-campaign/start-campaign";
import { CampaignDetailsAndPreview } from "../../create-campaign/campaign-details-and-preview";
import { useNamedState } from "../../../hooks/useNamedState";
import useSWR from "swr";
import {
  fetchAllCampaignEventsBySuperAdmins,
  fetchAllPartners,
  fetchAllTechnologies
} from "../../../requests/campaign-requests";
import { fetchCommunitiesList } from "../../../requests/community-routes";
import { CAMPAIGN } from "../../../mocks/campaign";
import { addLabelsAndValues } from "../../../helpers/utils/array";
import { CampaignProvider } from "../../../contexts/campaign-context";
import { CampaignEditView } from "../../../views/campaign-edit-view";

const { useReducer } = require("react");

let initialState = CAMPAIGN;

initialState = {
  ...initialState,
  disable_partners_section: false,
  communities: initialState?.communities.map(({ community }) => {
    return {
      ...community,
      value: community?.community,
    }
  }) || []
}

const reducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "SET_FIELD_VALUE":
      return { ...state, [payload.field]: payload.value };
    case "NEW_CAMPAIGN":
      return { ...state, ...payload };
    default:
      throw new Error(`Unsupported action type: ${type}`);
  }
};

export function NewCampaign ({ props }) {
  const [showError, setShowError] = useState(false);

  const [campaignDetails, dispatch] = useReducer(reducer, initialState);

  const handleCampaignDetailsChange = (name, value) => {
    dispatch({ type: "SET_FIELD_VALUE", payload: { field: name, value } });
  };

  const updateCampaignDetails = (payload) => {
    dispatch({ type: "NEW_CAMPAIGN", payload });
  }

  const [STEP, setStep] = useNamedState("STEP", "START"); // START, DETAILS, MANAGERS, TECHNOLOGIES, EVENTS, REVIEW, SUBMIT

  // const dedupingInterval = 3_600_000;
  // const revalidateInterval = 3_600_000;
  // const refreshInterval = 3_600_000;

  const {
    initialData: allCommunitiesInitialData,
    data: allCommunities,
    error: allCommunitiesError,
    isValidating: allCommunitiesIsValidating,
    isLoading: allCommunitiesIsLoading,
  } = useSWR("communities.list", async () => {
    return await fetchCommunitiesList("communities.list")
  },);


  return (
    <AdminLayout>
      <CampaignProvider>
        <div className={""}>
          {
            STEP === "START" ? (
              <StartCampaign
                step={STEP}
                setStep={setStep}
                // campaignDetails={campaignDetails}
                // setCampaignDetails={handleCampaignDetailsChange}
                // updateCampaignDetails={updateCampaignDetails}
                // lists={lists}
              />
            ) : null
          }

          {
            STEP === "COMPLETE" ? (
                <CampaignEditView data={campaignDetails} STEP={STEP} setStep={setStep}/>
              /*<CampaignDetailsAndPreview
                setStep={setStep}
                step={STEP}
                campaignDetails={campaignDetails}
                setCampaignDetails={handleCampaignDetailsChange}
                lists={lists}
              />*/
            ) : null
          }
        </div>
      </CampaignProvider>
    </AdminLayout>
  );
}
