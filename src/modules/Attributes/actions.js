import lutInstance from '../../libraries/axios';
import { GET_REQUEST, GET_SUCCESS, GET_ERROR } from './constants';

const getRequest = () => ({ type: GET_REQUEST });

const getSuccess = attributes => ({
  type: GET_SUCCESS,
  attributes,
});

const getError = error => ({
  type: GET_ERROR,
  error,
});

const getAttributes = () => (dispatch) => {
  dispatch(getRequest());

  return lutInstance({
    method: 'get',
    url: 'attributes',
  }).then(({ data }) => {
    dispatch(getSuccess(data));
  }).catch(() => {
    dispatch(getError());
  });
};

export {
  getRequest,
  getSuccess,
  getError,
  getAttributes,
};
