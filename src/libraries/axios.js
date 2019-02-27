import axios from 'axios';

const { REACT_APP_LUT_BACKEND_URL } = process.env;

const lutInstance = axios.create({
  baseURL: REACT_APP_LUT_BACKEND_URL,
});

export default lutInstance;
