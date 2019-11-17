import { combineReducers } from 'redux';

import app from './modules/App/reducer';
import attributes from './modules/Attributes/reducer';
import authentication from './modules/Authentication/reducer';
import characters from './modules/Character/reducer';

export default combineReducers({
  app,
  attributes,
  authentication,
  characters,
});
