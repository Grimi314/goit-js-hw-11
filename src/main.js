'use strict';

import iziToast from 'izitoast';

import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
} from './js/render-functions';

import { getImagesByQuery, config } from './js/pixabay-api';

const userForm = document.querySelector('.form');
const button = document.querySelector('.js-button');
const gallery = document.querySelector('.gallery');

userForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();
  if (!query) return;

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(response => {
      if (response.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(response);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });

  userForm.reset();
});
