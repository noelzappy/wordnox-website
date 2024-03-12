import { BASE_APP_API_URL, CRM_API_KEY, CRM_API_URL } from "./constants";

export const fetcher = (endpoint: string, options: any = {}) =>
  fetch(`${BASE_APP_API_URL}${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not successful");
    }
    return res.json();
  });
