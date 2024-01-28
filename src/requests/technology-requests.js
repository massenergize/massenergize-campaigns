import { apiCall } from "src/api/messenger";
import { handleRequestError } from "src/helpers/utils/http";

export const fetchEvents = async (campaignID, url = "campaigns.communities.events.list") => {
  try {
    const response = await apiCall(url, { no_pagination: true, campaign_id: campaignID });

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_EVENTS_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "FETCH_EVENTS_ERROR");
  }
};

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
};

export const updateTechnologyIncentive = async (data, url = "technologies.overview.update") => {
  try {
    const response = await apiCall(url, data);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "UPDATE_INCENTIVE_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "UPDATE_INCENTIVE_ERROR_BE");
  }
};

export const addTechnologyIncentive = async (data, url = "technologies.overview.create") => {
  try {
    const response = await apiCall(url, data);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "ADD_INCENTIVE_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "ADD_INCENTIVE_ERROR");
  }
};

export const removeTechnologyIncentive = async (data, url = "technologies.overview.delete") => {
  try {
    const response = await apiCall(url, data);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "REMOVE_INCENTIVE_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "REMOVE_INCENTIVE_ERROR");
  }
};

export const fetchCampaignCommunityVendors = async (campaignID, url = "campaigns.communities.vendors.list") => {
  try {
    const response = await apiCall(url, { no_pagination: true, campaign_id: campaignID });

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_CAMPAIGN_COMMUNITY_VENDORS_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "FETCH_CAMPAIGN_COMMUNITY_VENDORS_ERROR");
  }
};

export const fetchTechnology = async (id) => {
  try {
    const response = await apiCall("technologies.info", { id });

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_TECHNOLOGY_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "FETCH_TECHNOLOGY_ERROR");
  }
};

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
};

export async function fetchAllTechnologyTestimonials(campaign_id, url = "campaigns.communities.testimonials.list") {
  try {
    // const response = await apiCall(url, { campaign_id }, null);
    const response = await apiCall(url, { campaign_id }, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_ALL_COMMUNITY_TESTIMONIALS_ERROR_BE");
    }
    const data = response?.data || [];
    return data;
  } catch (error) {
    handleRequestError(error, "FETCH_ALL_COMMUNITY_TESTIMONIALS_ERROR");
  }
}

export async function fetchAllCampaignTestimonials(campaign_id, url = "campaigns.testimonials.list") {
  try {
    // const response = await apiCall(url, { campaign_id }, null);
    const response = await apiCall(url, { campaign_id }, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_ALL_CAMPAIGN_TESTIMONIALS_ERROR_BE");
    }
    const data = response?.data || [];
    return data;
  } catch (error) {
    handleRequestError(error, "FETCH_ALL_CAMPAIGN_TESTIMONIALS_ERROR");
  }
}

export async function addTestimonials(data, url = "campaigns.technologies.testimonials.add") {
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

export async function updateTestimonial(data, url = "campaigns.technologies.testimonials.update") {
  try {
    const response = await apiCall(url, data, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "UPDATE_TESTIMONIAL_ERROR_BE");
    }
    return response?.data;
  } catch (error) {
    handleRequestError(error, "UPDATE_TESTIMONIAL_ERROR");
  }
}

export async function deleteTestimonial(data, url = "campaigns.technologies.testimonials.delete") {
  try {
    const response = await apiCall(url, data, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "DELETE_TESTIMONIAL_ERROR_BE");
    }
    return response?.data;
  } catch (error) {
    handleRequestError(error, "DELETE_TESTIMONIAL_ERROR");
  }
}

export async function updateTechnology(data, url = "technologies.update") {
  try {
    const response = await apiCall(url, data, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "UPDATE_TECHNOLOGY_ERROR_BE");
    }
    return response?.data;
  } catch (error) {
    handleRequestError(error, "UPDATE_TECHNOLOGY_ERROR");
  }
}

export async function addTechnologyDeal(data, url = "technologies.deals.create") {
  try {
    const response = await apiCall(url, data, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "ADD_TECHNOLOGY_DEAL_ERROR_BE");
    }
    return response?.data;
  } catch (error) {
    handleRequestError(error, "ADD_TECHNOLOGY_DEAL_ERROR");
  }
}

export async function updateTechnologyDeal(data, url = "technologies.deals.update") {
  try {
    const response = await apiCall(url, data, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "UPDATE_TECHNOLOGY_DEAL_ERROR_BE");
    }
    return response?.data;
  } catch (error) {
    handleRequestError(error, "UPDATE_TECHNOLOGY_DEAL_ERROR");
  }
}

export async function removeTechnologyDeal(data, url = "technologies.deals.delete") {
  try {
    const response = await apiCall(url, data, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "REMOVE_TECHNOLOGY_DEAL_ERROR_BE");
    }
    return response?.data;
  } catch (error) {
    handleRequestError(error, "REMOVE_TECHNOLOGY_DEAL_ERROR");
  }
}

export async function removeTechnologyVendor(data, url = "technologies.vendors.remove") {
  try {
    const response = await apiCall(url, data, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "REMOVE_TECHNOLOGY_VENDOR_ERROR_BE");
    }
    return response?.data;
  } catch (error) {
    handleRequestError(error, "REMOVE_TECHNOLOGY_VENDOR_ERROR");
  }
}


export async function createTechnologyAction(data, url = "technologies.actions.create") {
  try {
    const response = await apiCall(url, data, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "CREATE_TECHNOLOGY_ACTION_ERROR_BE");
    }
    return response?.data;
  } catch (error) {
    handleRequestError(error, "CREATE_TECHNOLOGY_ACTION_ERROR");
  }

}

export async function updateTechnologyAction(data, url = "technologies.actions.update") {
  try {
    const response = await apiCall(url, data, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "UPDATE_TECHNOLOGY_ACTION_ERROR_BE");
    }
    return response?.data;
  } catch (error) {
    handleRequestError(error, "UPDATE_TECHNOLOGY_ACTION_ERROR");
  }

}

export async function deleteTechnologyAction(data, url = "technologies.actions.delete") {
  try {
    const response = await apiCall(url, data, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "DELETE_TECHNOLOGY_ACTION_ERROR_BE");
    }
    return response?.data;
  } catch (error) {
    handleRequestError(error, "DELETE_TECHNOLOGY_ACTION_ERROR");
  }

}
