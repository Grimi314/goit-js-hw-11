'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const gallery = document.querySelector('.gallery');
const button = document.querySelector('.js-button');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  const markup = images
    .map(item => {
      const {
        downloads,
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
      } = item;

      return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}" target="_blank" rel="noopener noreferrer">
          <img
            class="gallery-image"
            src="${webformatURL}"
            data-source="${largeImageURL}"
            alt="${tags}"
          />
        </a>
        <ul class="number-list">
          <li class="numder-item">
            <p class="umber-text">Likes</p>
            <p class="umber-text">${likes}</p>
          </li>
          <li class="numder-item">
            <p class="umber-text">Views</p>
            <p class="umber-text">${views}</p>
          </li>
          <li class="numder-item">
            <p class="umber-text">Comments</p>
            <p class="umber-text">${comments}</p>
          </li>
          <li class="numder-item">
            <p class="umber-text">Downloads</p>
            <p class="umber-text">${downloads}</p>
          </li>
        </ul>
      </li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();

  gallery.addEventListener('click', event => {
    event.preventDefault();
    const img = event.target;

    if (!img) {
      return;
    }

    const link = img.dataset.source;

    if (img.nodeName !== 'IMG') return;

    const instance = basicLightbox.create(`<img class="modal" src="${link}">`);

    instance.show();
  });
}

button.addEventListener('click', clearGallery);

function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
