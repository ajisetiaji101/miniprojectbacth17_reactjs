import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import bootcampReducer from './BootcampReducer';
import curriculumreviewsReducer from './CurriculumReviewsReducer';
import AppBatchReducer from './AppBatchReducer';

const rootReducer = combineReducers({
  userState : userReducer,
  curriculumState : bootcampReducer,
  curriculumreviewsState : curriculumreviewsReducer,
  batchState : AppBatchReducer
});

export default rootReducer;