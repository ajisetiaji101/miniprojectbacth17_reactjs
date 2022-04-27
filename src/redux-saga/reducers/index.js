import { combineReducers } from 'redux';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  userState : userReducer
});

export default rootReducer;