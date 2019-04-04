import axios from 'axios';

import { loadState, saveState } from './localstorage';

const { REACT_APP_LUT_BACKEND_URL } = process.env;

/* eslint-disable no-param-reassign, dot-notation */
const lutInstance = axios.create({
  baseURL: REACT_APP_LUT_BACKEND_URL,
  transformRequest: [
    (data, headers) => {
      const { accessToken, refreshToken } = loadState();

      headers['Content-Type'] = 'application/json';
      headers['Accept'] = 'application/json';
      headers['access-token'] = accessToken && `Bearer ${accessToken}`;
      headers['refresh-token'] = refreshToken;

      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    (data) => {
      const parsedData = JSON.parse(data);
      const { user } = parsedData;

      if (user) {
        const { accessToken, refreshToken } = user;
        saveState({ accessToken, refreshToken });
      }

      return parsedData;
    },
  ],
});
/* eslint-enable no-param-reassign, dot-notation */

export default lutInstance;
