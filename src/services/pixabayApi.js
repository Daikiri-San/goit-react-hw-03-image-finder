import axios from 'axios';

// const sorryCors = 'https://cors-anywhere.herokuapp.com/';
axios.defaults.baseURL = `https://pixabay.com/api`;
const key = '14527568-6591a78188764a7d597b0a4aa';

const fetchImagesWithQuery = async (searchQuery, page = 0) => {
  const { data } = await axios.get('/', {
    params: {
      q: searchQuery,
      page: page,
      key,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  return data;
};

export default {
  fetchImagesWithQuery,
};
