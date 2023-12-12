import { apiCall } from "../api/messenger";

export async function fetchAllCampaigns (url) {
  try {
    const response = await apiCall(url, {}, null);
    return  response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
