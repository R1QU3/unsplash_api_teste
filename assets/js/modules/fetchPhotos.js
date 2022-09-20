/* DOM Functions */
import {
  clearHTMLCollection,
  createImage
} from "./DOM.js";

/* Acess Key */
const clientId = "qGGvJghwDbK9kYzX95uD8z_Y9Doufh7Ql4Q4vHUi2tw"
const resultDiv = document.getElementById('images_results');

/* Fetch API */
export function initFetchPhotos() {
  const submitRequestForm = document.getElementById('image_search')

  function fetchPhotos(e) {
    e.preventDefault();
    let userSearch = document.getElementById('search').value;
    const searchUrl = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query="${userSearch}"&per_page=30`;
    fetch(searchUrl)
      .then(response => response.json())
      .then((response) => {
        console.clear();
        console.log(response.results.slice(0, 10));
        clearHTMLCollection(resultDiv); // remove all child
        
        response.results.forEach((image) => { // load all imags results
          resultDiv.appendChild(createImage(image.urls.small));
        });
      })
  }
  submitRequestForm.addEventListener('submit', fetchPhotos)
}

/* Random API Fetch */
export function initFetchRandomPhotos() {
  window.addEventListener('DOMContentLoaded', fetchRandomPhotos);

  function fetchRandomPhotos() {
    const randomUrl = `https://api.unsplash.com/photos/random/?client_id=${clientId}&count=30`;
    fetch(randomUrl)
      .then(response => response.json())
      .then((response) => {
        clearHTMLCollection(resultDiv); // remove all child
        console.log(response);
        response.forEach((image) => { // load all imags results
          resultDiv.appendChild(createImage(image.urls.small));
        });
      })
  }
}
