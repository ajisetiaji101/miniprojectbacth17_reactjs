import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import testimoniReducer from './TestimoniReducer'
import PlacementReducer from "./PlacementReducer";
<<<<<<< HEAD
import instructorReducer from './InstructorReducer'
=======
import TalentReducer from "./TalentReducer";

import CurriculumReducer from "./CurriculumReducer";
import AppCurriculumReducer from "./AppCurriculumReducer";

import BatchReducer from "./BatchReducer";
import AppBatchReducer from "./AppBatchReducer";
import SettingReducer from "./SettingsReducer";
import JobReducer from './JobReducer';
>>>>>>> 01f9e195d366b248c9e581cee0fcfb0846bf5c9d

const rootReducer = combineReducers({
  userState : userReducer,
  testimoniState : testimoniReducer,
  placemenState: PlacementReducer,
<<<<<<< HEAD
  instructorState: instructorReducer

=======
  curriculumState: CurriculumReducer,
  curriculumAppState: AppCurriculumReducer,
  talentState: TalentReducer,
  batchState: BatchReducer,
  batchAppState: AppBatchReducer,
  settingState: SettingReducer,
  jobState: JobReducer,
>>>>>>> 01f9e195d366b248c9e581cee0fcfb0846bf5c9d
});

export default rootReducer;
