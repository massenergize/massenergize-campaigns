import store from "../redux/store";
const BASE_DOMAIN = "http://127.0.0.1:8000";
const BASE_URL = BASE_DOMAIN + "/api/";

export const apiCall = async (url, payload, options) => {
  const formData = new FormData();
  for (let name in payload) {
    formData.append(name, payload[name]);
  }
  const res = await fetch(`${BASE_URL}${url}`, {
    method: "POST",
    body: formData,
    credentials: "include",
    ...options,
  });

  const data = await res.json();

  return data;
};
