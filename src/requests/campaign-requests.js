import { apiCall } from "../api/messenger";
import { handleRequestError } from "../helpers/utils/http";

export async function createCampaignFromTemplate(data, url = "campaigns.createFromTemplate") {
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

export async function createCampaign(url = "campaigns.create", data) {
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

export async function updateCampaign(data, url = "campaigns.update") {
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

export async function fetchAllCampaigns(url = "campaigns.list", campaign_account_id) {
  try {
    const response = await apiCall(url, { campaign_account_id }, null);
    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_ALL_CAMPAIGNS_ERROR_BE");
    }
    return response?.data;
  } catch (error) {
    handleRequestError(error, "FETCH_ALL_CAMPAIGNS_ERROR");
  }
}

export async function fetchCampaign(id, url = "campaigns.info") {
  try {
    const response = await apiCall(url, { id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_CAMPAIGN_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "FETCH_CAMPAIGN_ERROR");
  }
}

export async function fetchCampaignStats(campaign_id, url = "campaigns.stats.get") {
  try {
    const response = await apiCall(url, { campaign_id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_CAMPAIGN_STATS_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "FETCH_CAMPAIGN_STATS_ERROR");
  }
}

export async function fetchCampaignTechnology(url = "/campaigns.technologies.info", id) {
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

export async function fetchAllTechnologies(campaign_account_id, url = "technologies.list") {
  try {
    const response = await apiCall(url, { campaign_account_id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_ALL_TECH_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "FETCH_CAMPAIGN_TECH_ERROR");
  }
}

export async function publishCampaign(url = "campaigns.info", id) {
  try {
    const response = await apiCall(url, { id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "PUBLISH_CAMPAIGN_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "PUBLISH_CAMPAIGN_ERROR");
  }
}

export async function unpublishCampaign(url = "campaigns.info", id) {
  try {
    const response = await apiCall(url, { id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "UNPUBLISH_CAMPAIGN_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "UNPUBLISH_CAMPAIGN_ERROR");
  }
}

export async function fetchCampaignManagers(id, url = "campaigns.managers.list") {
  try {
    const response = await apiCall(url, { campaign_id: id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_CAMPAIGN_MANAGERS_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_CAMPAIGN_MANAGERS_ERROR");
  }
}

export async function fetchAllUsersBySuperAdminManagers(url = "users.listForCommunityAdmin", options = {}) {
  try {
    const response = await apiCall(url, options, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_ALL_USERS_FOR_SUPER_ADMIN_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_ALL_USERS_FOR_SUPER_ADMIN_ERROR");
  }
}

export async function fetchAllCampaignManagers(url = "users.listForCommunityAdmin", options = {}) {
  try {
    const response = await apiCall(url, options, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_ALL_CAMPAIGN_MANAGERS_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_ALL_CAMPAIGN_MANAGERS_ERROR");
  }
}

export async function fetchCampaignTechnologies(id, url = "campaigns.technologies.list") {
  try {
    const response = await apiCall(url, { campaign_id: id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_CAMPAIGN_TECHNOLOGIES_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_CAMPAIGN_TECHNOLOGIES_ERROR");
  }
}

export async function fetchAllCampaignEventsBySuperAdmins(url = "events.listForCommunityAdmin") {
  try {
    const response = await apiCall(url, {}, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_EVENTS_BY_SUPER_ADMIN_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_CAMPAIGN_EVENTS_BY_SUPER_ADMIN_ERROR");
  }
}

export async function fetchCampaignEvents(id, url = "campaigns.events.list") {
  try {
    const response = await apiCall(url, { campaign_id: id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_CAMPAIGN_EVENTS_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_CAMPAIGN_EVENTS_ERROR");
  }
}

export async function fetchAllEvents(url = "campaigns.events.info", id) {
  try {
    const response = await apiCall(url, { id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_ALL_EVENT_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_ALL_EVENT_ERROR");
  }
}

export async function fetchAllPartners(url = "partners.list", id) {
  try {
    const response = await apiCall(url, { id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_ALL_PARTNERS_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_ALL_PARTNERS_ERROR");
  }
}

export async function fetchCampaignPartners(id, url = "campaigns.partners.list") {
  try {
    const response = await apiCall(url, { id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_ALL_PARTNERS_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_ALL_PARTNERS_ERROR");
  }
}

export async function removeCampaignManager(url = "campaigns.managers.remove", campaign_manager_id) {
  try {
    const response = await apiCall(url, { campaign_manager_id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "REMOVE_CAMPAIGN_MANAGER_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "REMOVE_CAMPAIGN_MANAGER_ERROR");
  }
}

export async function updateCampaignInformation(data, url = "campaigns.update") {
  try {
    const response = await apiCall(url, data, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "UPDATE_CAMPAIGN_INFORMATION_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "UPDATE_CAMPAIGN_INFORMATION_ERROR");
  }
}

export async function addCampaignManager(email, campaign_id, url = "campaigns.managers.add") {
  try {
    const response = await apiCall(url, { email, campaign_id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "UPDATE_CAMPAIGN_INFORMATION_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "UPDATE_CAMPAIGN_INFORMATION_ERROR");
  }
}

export async function createCampaignAccount(data, url = "campaigns.accounts.create") {
  try {
    const response = await apiCall(url, data, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "CREATE_CAMPAIGN_ACCOUNT_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "CREATE_CAMPAIGN_ACCOUNT_ERROR");
  }
}

export async function updateCampaignTechnologies(data, url = "campaigns.technologies.add") {
  try {
    const response = await apiCall(url, data, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "UPDATE_CAMPAIGN_TECHNOLOGIES_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "UPDATE_CAMPAIGN_TECHNOLOGIES_ERROR");
  }
}

export async function createCampaignComment(data, url = "campaigns.technologies.comments.create") {
  try {
    const response = await apiCall(url, data, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "CREATE_CAMPAIGN_COMMENT_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "CREATE_CAMPAIGN_COMMENT_ERROR");
  }
}

export async function deleteCampaignComment(data, url = "campaigns.technologies.comments.delete") {
  try {
    const response = await apiCall(url, data, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "DELETE_CAMPAIGN_COMMENT_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "DELETE_CAMPAIGN_COMMENT_ERROR");
  }
}

export async function removeCampaignTechnology(data, url = "campaigns.technologies.remove") {
  try {
    const response = await apiCall(url, data, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "REMOVE_CAMPAIGN_TECHNOLOGY_ERROR_BE");
    }

    window.location.reload() // So many things depend on a tech so its easier to reload
    return response?.data;
  } catch (e) {
    handleRequestError(e, "REMOVE_CAMPAIGN_TECHNOLOGY_ERROR");
  }
}

export async function getUsers(data, url = "users.listForCommunityAdmin") {
  try {
    const response = await apiCall(url, data, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "GET_USERS_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "GET_USERS_ERROR");
  }
}

export async function createCampaignTestimonial(data, url = "campaigns.technologies.testimonials.create") {
  try {
    const response = await apiCall(url, data, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "CREATE_CAMPAIGN_TESTIMONIAL_ERROR_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "CREATE_CAMPAIGN_TESTIMONIAL_ERROR");
  }
}

export async function AddSelectedEvents(data, url = "campaigns.technology.events.add") {
  try {
    const response = await apiCall(url, data, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "ADD_EVENTS_TO_CAMPAIGN_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "ADD_EVENTS_TO_CAMPAIGN");
  }
}

export async function removeCampaignTechnologyEvent(id, url = "campaigns.technology.events.remove") {
  try {
    const response = await apiCall(url, { id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "REMOVE_EVENTS_FROM_CAMPAIGN_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "REMOVE_EVENTS_FROM_CAMPAIGN");
  }
}

export async function updateCampaignCommunityInfo(data, url = "campaigns.communities.update") {
  try {
    const response = await apiCall(url, data, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "UPDATE_CAMPAIGN_COMMUNITIES_BE");
    }
    return response?.data;
  } catch (e) {
    handleRequestError(e, "UPDATE_CAMPAIGN_COMMUNITIES");
  }
}

export async function fetchAllCampaignComments(campaign_id, url = "campaigns.comments.list") {
  try {
    const response = await apiCall(url, { campaign_id }, null);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_ALL_COMMENTS_OF_CAMPAIGN_BE");
    }

    return response?.data;
  } catch (e) {
    handleRequestError(e, "FETCH_ALL_COMMENTS_OF_CAMPAIGN");
  }
}


export async function deleteCallToAction(id, url = "call.to.action.delete") {
    try {
      console.log("Deleting CTA lll", id);
        const response = await apiCall(url, { id:id }, null);

        if (!response || !response?.success) {
        handleRequestError(response?.error, "DELETE_CALL_TO_ACTION_BE");
        }

        return response?.data;
    } catch (e) {
        handleRequestError(e, "DELETE_CALL_TO_ACTION");
    }
}
