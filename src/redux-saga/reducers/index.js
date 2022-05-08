import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import PlacementReducer from "./PlacementReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  PlacemenState: PlacementReducer,
});

export default rootReducer;
