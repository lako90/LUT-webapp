import unionBy from 'lodash/unionBy';

import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_ERROR,

  PATCH_REQUEST,
  PATCH_SUCCESS,
  PATCH_ERROR,
} from './constants';

const initialState = {
  loading: false,
  error: false,
  data: [],
};

const characterReducer = (
  state = initialState,
  {
    type,
    characters,
    character,
  },
) => {
  switch (type) {
    case GET_REQUEST:
    case PATCH_REQUEST:
      return {
        loading: true,
        error: false,
        data: state.data,
      };

    case GET_ERROR:
    case PATCH_ERROR:
      return {
        loading: false,
        error: true,
        data: state.data,
      };

    case GET_SUCCESS:
      return {
        loading: false,
        error: false,
        data: characters,
      };

    case PATCH_SUCCESS:
      return {
        loading: false,
        error: false,
        data: unionBy(state.date, [character], 'id'),
      };

    default:
      return state;
  }
};

export default characterReducer;
