import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import PlacementReducer from "./PlacementReducer";
import TalentReducer from "./TalentReducer";
const rootReducer = combineReducers({
  userState: userReducer,
  placemenState: PlacementReducer,
  talentState: TalentReducer,
});

export default rootReducer;
