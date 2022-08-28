import axios from 'axios';

const API_KEY = '16216746-96549e9ee51193495a2060631';

export const axiosGet = async (query, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
