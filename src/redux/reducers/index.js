import { combineReducers } from 'redux';

import PopupReducer from './popup';
import AuthReducer from './auth';
import DataReducer from './data';

export default combineReducers({
  PopupReducer,
  AuthReducer,
  DataReducer,
});
