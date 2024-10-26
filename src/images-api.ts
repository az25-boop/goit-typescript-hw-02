import axios from "axios";

const AUTH_KEY = "wBNMMOq_LNXL1fEfFRQJxCbm0u9hTgA-Uoao7aKPR4M";
axios.defaults.baseURL = "https://api.unsplash.com";

export default async function fetchImages<T>(
  request: string,
  page: number
): Promise<T> {
  const response: T = await axios.get(`/search/photos/`, {
    params: {
      client_id: AUTH_KEY,
      query: request,
      page: page,
      per_page: 13,
    },
  });
  return response;
}
