import { apiCall } from "src/api/messenger";
import { handleRequestError } from "src/helpers/utils/http";

export const fetchEvents = async (campaignID,url = "campaigns.communities.events.list", ) => {
  try {
    const response = await apiCall(url, { no_pagination : true, campaign_id: campaignID });

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_EVENTS_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "FETCH_EVENTS_ERROR");
  }
}



export const addTechnologyEvent = async (data, url = "technologies.events.add") => {
    try {
        const response = await apiCall(url, data);
    
        if (!response || !response?.success) {
        handleRequestError(response?.error, "ADD_EVENT_ERROR_BE");
        }
    
        return response?.data;
    } catch (error) {
        handleRequestError(error, "ADD_EVENT_ERROR");
    }
}



export const fetchCampaignCommunityVendors = async (campaignID, url = "campaigns.communities.vendors.list") => {
  try {
    const response = await apiCall(url, { no_pagination : true, campaign_id: campaignID });

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_CAMPAIGN_COMMUNITY_VENDORS_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "FETCH_CAMPAIGN_COMMUNITY_VENDORS_ERROR");
  }
}


export const addTechnologyVendor = async (data, url = "technologies.vendors.add") => {
  try {
      const response = await apiCall(url, data);
  
      if (!response || !response?.success) {
      handleRequestError(response?.error, "ADD_TECHNOLOGY_VENDOR_ERROR_BE");
      }
  
      return response?.data;
  } catch (error) {
      handleRequestError(error, "ADD_TECHNOLOGY_VENDOR_ERROR");
  }
}

export async function fetchAllTechnologyTestimonials(campaign_id,url = "campaigns.communities.testimonials.list") {
  try {
      // const response = await apiCall(url, { campaign_id }, null);
      const response = await apiCall(url, { campaign_id }, null);
      if (!response || !response?.success) {
          handleRequestError(
              response?.error,
              "FETCH_ALL_COMMUNITY_TESTIMONIALS_ERROR_BE"
          );
      }
      const data = response?.data || [];
      return data;
  } catch (error) {
      handleRequestError(error, "FETCH_ALL_COMMUNITY_TESTIMONIALS_ERROR");
  }
}
export async function addTestimonials(url = "campaigns.technologies.testimonials.add",data) {
  try {
      const response = await apiCall(url, data, null);
      if (!response || !response?.success) {
          handleRequestError(response?.error, "ADD_SELECTED_TESTIMONIALS_ERROR_BE");
      }
      return response?.data;
  } catch (error) {
      handleRequestError(error, "ADD_SELECTED_TESTIMONIALS_ERROR");
  }
}