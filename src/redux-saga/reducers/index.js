import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import PlacementReducer from "./PlacementReducer";
import TalentReducer from "./TalentReducer";

import CurriculumReducer from "./CurriculumReducer";
import AppCurriculumReducer from './AppCurriculumReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  PlacemenState: PlacementReducer,
  curriculumState: CurriculumReducer,
  curriculumAppState : AppCurriculumReducer,
  talentState: TalentReducer
});

export default rootReducer;
