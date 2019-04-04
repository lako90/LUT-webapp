import lutInstance from '../../libraries/axios';
import { GET_REQUEST, GET_SUCCESS, GET_ERROR } from './constants';

const getRequest = () => ({ type: GET_REQUEST });

const getError = error => ({
  type: GET_ERROR,
  error,
});

const getSuccess = characters => ({
  type: GET_SUCCESS,
  characters,
});

const getCharacters = () => (dispatch) => {
  dispatch(getRequest());

  return lutInstance({
    method: 'get',
    url: 'character',
  }).then(({ data: { characters } }) => {
    dispatch(getSuccess(characters));
  }).catch(({ response }) => {
    dispatch(getError(response));
  });
};

export {
  getRequest,
  getSuccess,
  getError,
  getCharacters,
};
