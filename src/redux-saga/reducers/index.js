import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import testimoniReducer from "./TestimoniReducer";
import PlacementReducer from "./PlacementReducer";
import instructorReducer from "./InstructorReducer";
import TalentReducer from "./TalentReducer";
import HiringReducer from "./HiringReducer";

import CurriculumReducer from "./CurriculumReducer";
import AppCurriculumReducer from "./AppCurriculumReducer";
import CurriculumReducer1 from "./CurriculumReducer1";

import BatchReducer from "./BatchReducer";
import AppBatchReducer from "./AppBatchReducer";
import SettingReducer from "./SettingsReducer";
import ProcessBootcampReducer from "./ProcessBootcampReducer";
import TalentTimelineReducer from "./TalentTimelineReducer";

import JobReducer from './JobReducer';
import ClientReducer from './ClientReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  testimoniState: testimoniReducer,
  placemenState: PlacementReducer,
  instructorState: instructorReducer,
  curriculumState: CurriculumReducer,
  curriculumAppState: AppCurriculumReducer,
  curriculumState1: CurriculumReducer1,
  talentState: TalentReducer,
  hiringState: HiringReducer,
  batchState: BatchReducer,
  batchAppState: AppBatchReducer,
  settingState: SettingReducer,
  jobState: JobReducer,

  processState: ProcessBootcampReducer,
  talenttimelineState: TalentTimelineReducer,

  clientState: ClientReducer,

});

export default rootReducer;
