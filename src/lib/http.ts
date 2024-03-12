const BASE_URL = "http://localhost:3000";

export const fetcher = (endpoint: string, options: any = {}) =>
  fetch(`${BASE_URL}${endpoint}`, {
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
