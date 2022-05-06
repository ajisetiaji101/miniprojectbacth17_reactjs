import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import testimoniReducer from './TestimoniReducer'

const rootReducer = combineReducers({
  userState : userReducer,
  testimoniState : testimoniReducer


});

export default rootReducer;