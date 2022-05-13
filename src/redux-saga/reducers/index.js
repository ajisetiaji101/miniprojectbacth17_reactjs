import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import PlacementReducer from "./PlacementReducer";
import JobReducer from './JobReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  placemenState: PlacementReducer,
  jobState: JobReducer,

});

export default rootReducer;
