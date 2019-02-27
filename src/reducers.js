import { combineReducers } from 'redux';

import authentication from './modules/Authentication/reducer';

export default combineReducers({
  authentication,
});
