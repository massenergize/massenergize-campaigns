import { useState } from "react";
import { AdminLayout } from "../../../layouts/admin-layout";
import { CampaignDetailsAndPreview } from "../../create-campaign/campaign-details-and-preview";
import { useNamedState } from "../../../hooks/useNamedState";
import useSWR from "swr";
import {
  fetchAllCampaignEventsBySuperAdmins,
  fetchAllPartners,
  fetchAllTechnologies,
} from "../../../requests/campaign-requests";
import { fetchCommunitiesList } from "../../../requests/community-routes";
import { CAMPAIGN } from "../../../mocks/campaign";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/pieces/Loading";
import { addLabelsAndValues } from "../../../helpers/utils/array";

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

export function EditCampaign ({ props }) {
  const [showError, setShowError] = useState(false);

  const [campaignDetails, dispatch] = useReducer(reducer, initialState);

  const handleCampaignDetailsChange = (name, value) => {
    dispatch({ type: "SET_FIELD_VALUE", payload: { field: name, value } });
  };

  const updateCampaignDetails = (payload) => {
    dispatch({ type: "NEW_CAMPAIGN", payload });
  }

  const [STEP, setStep] = useNamedState("STEP", "START"); // START, DETAILS, MANAGERS, TECHNOLOGIES, EVENTS, REVIEW, SUBMIT
  const { id, } = useParams();

  const SWRConfig = {
    dedupingInterval: 3_600_000,
    revalidateInterval: 3_600_000,
    refreshInterval: 3_600_000,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  }

  const {
    data: campaignData,
    error: campaignError,
    isValidating: campaignIsValidating,
    isLoading: campaignIsLoading,
  } = useFetch(`campaigns.info`, null, {
    data: { id },
    errorCode: "FETCH_CAMPAIGN_ERROR",
    onSuccess: (data) => {
      console.log("dfsdfsdfsdfrverbre", data)
      updateCampaignDetails(data);
    }
  })

  const {
    initialData: allCommunitiesInitialData,
    data: allCommunities,
    error: allCommunitiesError,
    isValidating: allCommunitiesIsValidating,
    isLoading: allCommunitiesIsLoading,
  } = useSWR("communities.list", async () => {
    return await fetchCommunitiesList("communities.list")
  }, { ...SWRConfig, });

  const {
    data: allTechnologies,
    isLoading: allTechnologiesLoading,
  } = useSWR(`technologies.list`, async () => {
    return await fetchAllTechnologies();
  }, { ...SWRConfig, });

  const {
    // initialData: allPartnersInitialData,
    data: allPartners,
    error: allPartnersError,
    isValidating: allPartnersIsValidating,
    isLoading: allPartnersIsLoading,
  } = useSWR("partners.list", async () => {
    await fetchAllPartners("partners.list")
  }, { ...SWRConfig, });

  const {
    data: allEvents,
    isLoading: allEventsLoading,
    isValidating: allEventsIsValidating,
    error: allEventsError,
  } = useSWR(`events.listForCommunityAdmin`, async () => {
    return await fetchAllCampaignEventsBySuperAdmins();
  }, { ...SWRConfig, });

  // const {
  //   // initialData: allManagersInitialData,
  //   data: allManagers,
  //   error: allManagersError,
  //   isValidating: allManagersIsValidating,
  //   isLoading: allManagersIsLoading,
  // } = useSWR(`campaigns.managers.list/${campaignDetails.id}`, async () => {
  //   return await fetchCampaignManagers("campaigns.managers.list", campaignDetails.id)
  // }, {
  //   dedupingInterval
  // });

  const lists = {
    allPartners: {
      data: addLabelsAndValues(allPartners || []),
      error: allPartnersError,
      isValidating: allPartnersIsValidating,
      isLoading: allPartnersIsLoading,
    },
    allManagers: {
      // data: allManagers,
      // error: allManagersError,
      // isValidating: allManagersIsValidating,
      // isLoading: allManagersIsLoading,
    },
    allTechnologies: {
      data: addLabelsAndValues(allTechnologies || []),
      isLoading: allTechnologiesLoading,
    },
    allCommunities: {
      data: addLabelsAndValues(allCommunities || []),
      error: allCommunitiesError,
      isValidating: allCommunitiesIsValidating,
      isLoading: allCommunitiesIsLoading,
    },
    allEvents: {
      data: addLabelsAndValues(allEvents || []),
      isLoading: allEventsLoading,
      error: allEventsError,
      isValidating: allEventsIsValidating,
    },
  }

  return (
    <AdminLayout>
      <div className={""}>
        {
          campaignIsLoading ? (<Loading/>) : null
        }
        {
          campaignError ? (
            <div>
              <h5>An error occurred</h5>
            </div>
          ) : null
        }
        {
          !campaignIsLoading && !campaignError ? (
            <CampaignDetailsAndPreview
              setStep={setStep}
              step={STEP}
              campaignDetails={campaignDetails}
              setCampaignDetails={handleCampaignDetailsChange}
              lists={lists}
            />) : null
        }

      </div>
    </AdminLayout>
  );
}
