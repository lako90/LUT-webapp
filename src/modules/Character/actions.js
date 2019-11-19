import lutInstance from '../../libraries/axios';
import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_ERROR,

  PATCH_REQUEST,
  PATCH_SUCCESS,
  PATCH_ERROR,
} from './constants';

const getRequest = () => ({ type: GET_REQUEST });
const getError = error => ({ type: GET_ERROR, error });
const getSuccess = characters => ({ type: GET_SUCCESS, characters });

const patchRequest = () => ({ type: PATCH_REQUEST });
const patchError = error => ({ type: PATCH_ERROR, error });
const patchSuccess = character => ({ type: PATCH_SUCCESS, character });

const getCharacters = () => (dispatch) => {
  dispatch(getRequest());

  return lutInstance({
    method: 'get',
    url: 'characters',
  }).then(({ data: { characters } }) => {
    dispatch(getSuccess(characters));
  }).catch(({ response }) => {
    dispatch(getError(response));
  });
};

const patchCharacter = ({ id, ...data }) => (dispatch) => {
  dispatch(patchRequest());

  return lutInstance({
    method: 'patch',
    url: `characters/${id}`,
    data,
  }).then(({ data: character }) => {
    dispatch(patchSuccess(character));
  }).catch(({ response }) => {
    dispatch(patchError(response));
  });
};

export {
  getRequest,
  getSuccess,
  getError,

  patchRequest,
  patchSuccess,
  patchError,

  getCharacters,
  patchCharacter,
};
