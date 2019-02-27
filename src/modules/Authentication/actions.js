import lutInstance from '../../libraries/axios';
import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_ERROR } from './constants';

const signinRequest = () => ({ type: SIGNIN_REQUEST });

const signinError = error => ({
  type: SIGNIN_ERROR,
  error,
});

const signinSuccess = user => (dispatch) => {
  dispatch(signinRequest());

  return lutInstance({
    method: 'post',
    url: 'auth/signin',
  }).then(() => {
    dispatch({
      type: SIGNIN_SUCCESS,
      user,
    });
  }).catch(() => {
    dispatch(signinError());
  });
};

export {
  signinRequest,
  signinSuccess,
  signinError,
};
