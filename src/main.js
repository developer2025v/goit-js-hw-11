import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = e.target.elements["search-text"].value.trim();

  if (!query) {
    iziToast.error({ title: "Error", message: "Please enter a search term!" });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    hideLoader();

    if (!data.hits.length) {
      iziToast.info({
        title: "No results",
        message: "Sorry, no images found!",
      });
      return;
    }

    createGallery(data.hits);
  } catch (err) {
    hideLoader();
    iziToast.error({ title: "Error", message: "Something went wrong" });
  }
});
