import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import PlacementReducer from "./PlacementReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  placemenState: PlacementReducer,
});

export default rootReducer;
