import { apiCall } from "src/api/messenger";
import { handleRequestError } from "src/helpers/utils/http";

export const fetchEvents = async (community_ids, url = "events.list",) => {
  try {
    const response = await apiCall(url, { no_pagination: true, community_ids });

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

export const updateTechnologyIncentives = async (data, url = "technologies.overview.update") => {
  try {
    const response = await apiCall(url, data);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "UPDATE_INCENTIVE_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "UPDATE_INCENTIVE_ERROR_BE");
  }
}

export const addTechnologyIncentives = async (data, url = "technologies.overview.add") => {
  try {
    const response = await apiCall(url, data);

    if (!response || !response?.success) {
      handleRequestError(response?.error, "ADD_INCENTIVE_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "ADD_INCENTIVE_ERROR");
  }
}
