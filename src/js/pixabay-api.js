'use strict';

import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const userForm = document.querySelector('.form');
const userInput = userForm.querySelector('[name="search-text"]');
const gallery = document.querySelector('.gallery');

let userSearch = null;

export const config = {
  params: {
    key: '54150142-86526a32bbcea3c4d6b3084a1',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
};

export function getImagesByQuery(query) {
  config.params.q = query;

  return axios.get('https://pixabay.com/api/', config).then(response => {
    return response.data.hits;
  });
}
