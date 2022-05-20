import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import testimoniReducer from "./TestimoniReducer";
import PlacementReducer from "./PlacementReducer";
import instructorReducer from "./InstructorReducer";
import TalentReducer from "./TalentReducer";

import CurriculumReducer from "./CurriculumReducer";
import AppCurriculumReducer from "./AppCurriculumReducer";
import CurriculumReducer1 from "./CurriculumReducer1";

import BatchReducer from "./BatchReducer";
import AppBatchReducer from "./AppBatchReducer";
import SettingReducer from "./SettingsReducer";
import JobReducer from "./JobReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  testimoniState: testimoniReducer,
  placemenState: PlacementReducer,
  instructorState: instructorReducer,

  curriculumState: CurriculumReducer,
  curriculumAppState: AppCurriculumReducer,
  curriculumState1: CurriculumReducer1,
  talentState: TalentReducer,
  batchState: BatchReducer,
  batchAppState: AppBatchReducer,
  settingState: SettingReducer,
  jobState: JobReducer,
});

export default rootReducer;
