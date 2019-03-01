import { combineReducers } from 'redux';

import app from './modules/App/reducer';
import authentication from './modules/Authentication/reducer';

export default combineReducers({
  app,
  authentication,
});
