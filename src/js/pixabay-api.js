import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "51776456-27ec020609b15dc1d566099b7";

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  const { data } = await axios.get(BASE_URL, { params });
  return data;
}
