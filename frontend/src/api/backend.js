const API = "http://localhost:3333/api/search";

export const searchApi = (keyword) => {
  return fetch(`${API}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(keyword),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("Error from backend", err);
    });
};
