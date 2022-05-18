import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import PlacementReducer from "./PlacementReducer";
import TalentReducer from "./TalentReducer";

import CurriculumReducer from "./CurriculumReducer";
import AppCurriculumReducer from "./AppCurriculumReducer";

import BatchReducer from "./BatchReducer";
import AppBatchReducer from "./AppBatchReducer";
import SettingReducer from "./SettingsReducer";
import JobReducer from './JobReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  placemenState: PlacementReducer,
  curriculumState: CurriculumReducer,
  curriculumAppState: AppCurriculumReducer,
  talentState: TalentReducer,
  batchState: BatchReducer,
  batchAppState: AppBatchReducer,
  settingState: SettingReducer,
  jobState: JobReducer,
});

export default rootReducer;
