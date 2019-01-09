import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_ERROR,
} from './constants';

const initialState = {
  loading: false,
  error: false,
  data: [],
};

const characterReducer = (state = initialState, { type, characters }) => {
  switch (type) {
    case GET_REQUEST:
      return {
        loading: true,
        error: false,
        data: [],
      };

    case GET_SUCCESS:
      return {
        loading: false,
        error: false,
        data: characters,
      };

    case GET_ERROR:
      return {
        loading: false,
        error: true,
        data: state.data,
      };

    default:
      return state;
  }
};

export default characterReducer;
