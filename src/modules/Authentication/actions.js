import lutInstance from '../../libraries/axios';
import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_ERROR } from './constants';

const signinRequest = () => ({ type: SIGNIN_REQUEST });

const signinError = error => ({
  type: SIGNIN_ERROR,
  error,
});

const signinSuccess = googleUser => (dispatch) => {
  dispatch(signinRequest());

  return lutInstance({
    method: 'post',
    url: 'authentication/login',
    data: { user: googleUser },
  }).then(({ data: { user } }) => {
    dispatch({
      type: SIGNIN_SUCCESS,
      user,
    });
  }).catch(() => {
    dispatch(signinError());
  });
};

const checkToken = () => (dispatch) => {
  dispatch(signinRequest());

  return lutInstance({
    method: 'post',
    url: 'authentication/check',
  }).then(({ data: { user } }) => {
    dispatch({
      type: SIGNIN_SUCCESS,
      user,
    });
  }).catch(({ response }) => {
    dispatch(signinError(response));
  });
};

export {
  signinRequest,
  signinSuccess,
  signinError,
  checkToken,
};
