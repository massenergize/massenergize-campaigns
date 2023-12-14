import { apiCall } from "../../api/messenger";

export function handleRequestError (error, code, handlers = {}) {
  console.log(code, error);
  throw Error(error);
}

export async function fetchData (url) {
  try {
    const response = await apiCall(url, {}, null);

    if (!response || response?.success !== false) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    throw error;
  }
}
