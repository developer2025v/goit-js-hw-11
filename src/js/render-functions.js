import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.getElementById("gallery");
const loaderEl = document.getElementById("loader");

let lightbox = null;

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="gallery-info">
          <div><b>Likes</b>${likes}</div>
          <div><b>Views</b>${views}</div>
          <div><b>Comments</b>${comments}</div>
          <div><b>Downloads</b>${downloads}</div>
        </div>
      </li>`
    )
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  galleryEl.innerHTML = "";
  if (lightbox) lightbox.refresh();
}

export function showLoader() {
  loaderEl.classList.add("is-visible");
}

export function hideLoader() {
  loaderEl.classList.remove("is-visible");
}
