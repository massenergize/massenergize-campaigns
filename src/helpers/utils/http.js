import { apiCall } from "../../api/messenger";

export function handleRequestError (error, code, handlers = {}) {
  console.log(code, error);
  throw Error(error);
}

export async function fetchData (url, data, errorCode, handlers = {}) {
  try {
    console.log({data})
    const response = await apiCall(url, data, null);

    if (!response || response?.success !== false) {
      return response?.data;
    } else {
      handleRequestError(response?.error, errorCode, handlers)
    }
  } catch (error) {
    handleRequestError(error, errorCode, handlers)
  }
}


