'use strict';

import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { showLoader } from './render-functions';
import { hideLoader } from './render-functions';
import { createGallery } from './render-functions';

const userForm = document.querySelector('.form');
const userInput = userForm.querySelector('[name="search-text"]');
const gallery = document.querySelector('.gallery');

let userSearch = null;

userForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  userSearch = form.elements['search-text'].value.trim();

  if (userSearch === '') return;

  gallery.innerHTML = '';

  getImagesByQuery(userSearch);

  userForm.reset();
});

const config = {
  params: {
    key: '54150142-86526a32bbcea3c4d6b3084a1',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
};

export function getImagesByQuery(query) {
  config.params.q = query;

  axios
    .get('https://pixabay.com/api/', config)
    .then(response => {
      showLoader();
      if (!response.data.hits || response.data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      console.log(response.data.hits);

      createGallery(response.data.hits);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
}
