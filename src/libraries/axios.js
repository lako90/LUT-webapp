import axios from 'axios';

const {
  REACT_APP_TMDB_BASE_URL,
  REACT_APP_TMDB_API_KEY,
} = process.env;

const tmdbInstance = axios.create({
  baseURL: REACT_APP_TMDB_BASE_URL,
  params: {
    api_key: REACT_APP_TMDB_API_KEY,
  },
});

export default tmdbInstance;
