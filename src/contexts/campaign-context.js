import { createContext, useReducer } from "react";
import { CAMPAIGN } from "../mocks/campaign";
import useFetch from "../hooks/useFetch";
import useSWR, { } from "swr";
import { fetchCommunitiesList } from "../requests/community-routes";
import {
  fetchAllCampaignEventsBySuperAdmins,
  fetchAllPartners,
  fetchAllTechnologies
} from "../requests/campaign-requests";
import { addLabelsAndValues } from "../helpers/utils/array";
import { SWR_CONFIG } from "../config/config";

export const CampaignContext = createContext(null);

const campaign = {
  ...CAMPAIGN,
  disable_partners_section: false,
  communities: CAMPAIGN?.communities.map(({ community }) => {
    return {
      ...community,
      value: community?.community,
    }
  }) || []
};


let initialState = {
  campaign,
  originalCampaign: { ...campaign },
  history: [],
}

const reducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        campaign: {
          ...state.campaign,
          [payload.field]: payload.value
        }
      };
    case "NEW_CAMPAIGN":
      const campaign = { ...state.campaign, ...payload }
      return {
        ...state,
        campaign,
        originalCampaign: { ...campaign },
      };
    default:
      throw new Error(`Unsupported action type: ${type}`);
  }
};

export function CampaignProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // region Fetch Campaign Details
  /*  const {
    data: campaignData,
    error: campaignError,
    isValidating: campaignIsValidating,
    isLoading: campaignIsLoading,
  } = useFetch( id ? `campaigns.info/${id}` : null, null, {
    data: { id },
    errorCode: "FETCH_CAMPAIGN_ERROR",
    onSuccess: (data) => {
      dispatch({ type: "NEW_CAMPAIGN", payload: data } );
    }
  })*/

  const {
    initialData: allCommunitiesInitialData,
    data: allCommunities,
    error: allCommunitiesError,
    isValidating: allCommunitiesIsValidating,
    isLoading: allCommunitiesIsLoading,
  } = useSWR("communities.list", async () => {
    return await fetchCommunitiesList("communities.list")
  }, { ...SWR_CONFIG, });

  const {
    data: allTechnologies,
    isLoading: allTechnologiesLoading,
  } = useSWR(`technologies.list`, async () => {
    return await fetchAllTechnologies();
  }, { ...SWR_CONFIG, });

  const {
    // initialData: allPartnersInitialData,
    data: allPartners,
    error: allPartnersError,
    isValidating: allPartnersIsValidating,
    isLoading: allPartnersIsLoading,
  } = useSWR("partners.list", async () => {
    await fetchAllPartners("partners.list")
  }, { ...SWR_CONFIG, });

  // const {
  //   data: allEvents,
  //   isLoading: allEventsLoading,
  //   isValidating: allEventsIsValidating,
  //   error: allEventsError,
  // } = useSWR(`events.listForCommunityAdmin`, async () => {
  //   return await fetchAllCampaignEventsBySuperAdmins();
  // }, { ...SWR_CONFIG, });
  // endregion
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
    // allEvents: {
    //   data: addLabelsAndValues(allEvents || []),
    //   isLoading: allEventsLoading,
    //   error: allEventsError,
    //   isValidating: allEventsIsValidating,
    // },
/*    allCampaigns: {
      data: campaignData,
      error: campaignError,
      isValidating: campaignIsValidating,
      isLoading: campaignIsLoading,
    },*/
  }

  return (
    <CampaignContext.Provider value={[{ ...state, lists }, dispatch]}>
      {children}
    </CampaignContext.Provider>
  );
}