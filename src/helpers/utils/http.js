import { apiCall } from "../../api/messenger";

export async function fetchData (url) {
  try {
    const response = await apiCall(url, {}, null);

    console.log({response});
    if (response.success !== false) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    throw error;
  }
}
