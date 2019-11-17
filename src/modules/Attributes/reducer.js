import PropTypes from 'prop-types';
import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_ERROR,
} from './constants';

const initialState = {
  loading: true,
  error: false,
  data: {},
};

const attributesReducer = (state = initialState, { type, attributes, error }) => {
  switch (type) {
    case GET_REQUEST:
      return {
        loading: true,
        error: false,
        data: {},
      };

    case GET_SUCCESS:
      return {
        loading: false,
        error: false,
        data: attributes,
      };

    case GET_ERROR:
      return {
        loading: false,
        error,
        data: {},
      };

    default:
      return state;
  }
};

const propType = PropTypes.shape({
  data: PropTypes.shape(),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.bool,
  ]),
});

export default attributesReducer;
export { propType };
