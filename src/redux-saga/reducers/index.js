import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import testimoniReducer from "./TestimoniReducer";
import PlacementReducer from "./PlacementReducer";
import instructorReducer from "./InstructorReducer";
import TalentReducer from "./TalentReducer";

import CurriculumReducer from "./CurriculumReducer";
import AppCurriculumReducer from "./AppCurriculumReducer";

import BatchReducer from "./BatchReducer";
import AppBatchReducer from "./AppBatchReducer";
import SettingReducer from "./SettingsReducer";
import JobReducer from "./JobReducer";
import ProcessBootcampReducer from "./ProcessBootcampReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  testimoniState: testimoniReducer,
  placemenState: PlacementReducer,
  instructorState: instructorReducer,
  curriculumState: CurriculumReducer,
  curriculumAppState: AppCurriculumReducer,
  talentState: TalentReducer,
  batchState: BatchReducer,
  batchAppState: AppBatchReducer,
  settingState: SettingReducer,
  jobState: JobReducer,
  processState: ProcessBootcampReducer,
});

export default rootReducer;
