import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import PlacementReducer from "./PlacementReducer";
import CurriculumReducer from "./CurriculumReducer";
import AppCurriculumReducer from './AppCurriculumReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  PlacemenState: PlacementReducer,
  curriculumState: CurriculumReducer,
  curriculumAppState : AppCurriculumReducer
});

export default rootReducer;
