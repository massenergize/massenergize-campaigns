import { apiCall } from "../api/messenger";

export async function fetchAllCampaigns () {
  try {
    const response = await apiCall("all-campaigns", {}, null);
    return  await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
