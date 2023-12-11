const BASE_DOMAIN = "https://691733fdd2482845e4c748c07bf195ae.serveo.net";
const BASE_URL = BASE_DOMAIN + "/api/";

export const apiCall = async (url, payload) => {
	const formData = new FormData();
	for (let name in payload) {
		formData.append(name, payload[name]);
	}
	const res = await fetch(`${BASE_URL}${url}`, {
		method: "POST",
		body: formData,
		credentials: "include",
	});

	const data = await res.json();

	return data;
};
