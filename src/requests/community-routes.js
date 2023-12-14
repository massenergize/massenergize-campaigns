import {handleRequestError} from "../helpers/utils/http";
import { apiCall } from "../api/messenger";


/**
 * Returns all the communities for super admins and community admin
 * Like the name suggests, this is a generic function that can be used to fetch communities for both super admins and community admins
 * @param url
 * @param noPagination
 * @returns {Promise<*>}
 */
export async function fetchCommunitiesForCommunityAdmins (url = "communities.listForCommunityAdmin", noPagination = true) {
  try {
    const response = await apiCall(url, { no_pagination : noPagination });

    if (!response || !response?.success) {
      handleRequestError(response?.error, "FETCH_COMMUNITIES_FOR_COMMUNITY_ADMIN_ERROR_BE");
    }

    return response?.data;
  } catch (error) {
    handleRequestError(error, "FETCH_COMMUNITIES_FOR_COMMUNITY_ADMIN_ERROR");
  }
}


