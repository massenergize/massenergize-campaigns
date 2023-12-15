import { apiCall } from "../api/messenger";
import { handleRequestError } from "../helpers/utils/http";


export async function createCampaignFromTemplate (url = "campaigns.createFromTemplate", data) {
  try {
    const response = await apiCall(url, data, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "CREATE_CAMPAIGN_FROM_TEMPLATE_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "CREATE_CAMPAIGN_FROM_TEMPLATE_ERROR");
  }
}

export async function createCampaign (url = "campaigns.create", data) {
  try {
    const response = await apiCall(url, data, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "CREATE_CAMPAIGN_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "CREATE_CAMPAIGN_ERROR");
  }
}

export async function updateCampaign (url = "campaigns.update", data) {
  try {
    const response = await apiCall(url, data, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "UPDATE_CAMPAIGN_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "UPDATE_CAMPAIGN_ERROR");
  }
}

export async function fetchAllCampaigns (url = "campaigns.list") {
  try {
    const response = await apiCall(url, {}, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_ALL_CAMPAIGNS_ERROR_BE");
    }
    return response?.data;
  } catch (error) {
    handleRequestError(error, "FETCH_ALL_CAMPAIGNS_ERROR");
  }
}

export async function fetchCampaign (url = "campaigns.info", id) {
  try {
    const response = await apiCall(url, {id}, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_CAMPAIGN_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "FETCH_CAMPAIGN_ERROR");
  }
}

export async function fetchCampaignTechnology (url = "/campaigns.technologies.info", id) {
  try {
    const response = await apiCall(url, { campaign_technology_id: id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_CAMPAIGN_TECH_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "FETCH_CAMPAIGN_TECH_ERROR");
  }
}

export async function fetchAllTechnologies (url = "technologies.list") {
  try {
    const response = await apiCall(url, { }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_CAMPAIGN_TECH_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "FETCH_CAMPAIGN_TECH_ERROR");
  }
}

export async function publishCampaign (url = "campaigns.info", id) {
  try {
    const response = await apiCall(url, {id}, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "PUBLISH_CAMPAIGN_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "PUBLISH_CAMPAIGN_ERROR")
  }
}

export async function unpublishCampaign (url = "campaigns.info", id) {
  try {
    const response = await apiCall(url, {id}, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "UNPUBLISH_CAMPAIGN_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "UNPUBLISH_CAMPAIGN_ERROR")
  }
}

export async function fetchCampaignManagers (url = "campaigns.managers.list", id) {
  try {
    const response = await apiCall(url, {campaign_id : id}, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_CAMPAIGN_MANAGERS_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_CAMPAIGN_MANAGERS_ERROR");
  }
}

export async function fetchAllCampaignManagers (url = "campaigns.managers.list", id) {
  try {
    const response = await apiCall(url, {}, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_ALL_CAMPAIGN_MANAGERS_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_ALL_CAMPAIGN_MANAGERS_ERROR");
  }
}

export async function fetchCampaignTechnologies (url = "campaigns.technologies.list", id) {
  try {
    const response = await apiCall(url, {campaign_id : id}, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_CAMPAIGN_TECHNOLOGIES_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_CAMPAIGN_TECHNOLOGIES_ERROR");
  }
}

export async function fetchCampaignEvents (url = "campaigns.events.list", id) {
  try {
    const response = await apiCall(url, {campaign_id : id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_CAMPAIGN_EVENTS_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_CAMPAIGN_EVENTS_ERROR");
  }
}

export async function fetchAllEvents (url = "campaigns.events.info", id) {
  try {
    const response = await apiCall(url, {id}, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_ALL_EVENT_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_ALL_EVENT_ERROR");
  }
}


export async function fetchAllPartners (url = "campaigns.partners.list", id) {
  try {
    const response = await apiCall(url, {id}, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_ALL_PARTNERS_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_ALL_PARTNERS_ERROR");
  }
}
