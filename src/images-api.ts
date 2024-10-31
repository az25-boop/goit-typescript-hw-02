import axios from "axios";

const AUTH_KEY = "wBNMMOq_LNXL1fEfFRQJxCbm0u9hTgA-Uoao7aKPR4M";
axios.defaults.baseURL = "https://api.unsplash.com";

export interface ImageResponse {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

export interface FeatchImagesResponse {
  results: ImageResponse[];
  total: number;
  total_pages: number;
}

export default async function fetchImages(
  request: string,
  page: number
): Promise<FeatchImagesResponse> {
  const response = await axios.get<FeatchImagesResponse>(`/search/photos/`, {
    params: {
      client_id: AUTH_KEY,
      query: request,
      page: page,
      per_page: 13,
    },
  });
  return response.data;
}
