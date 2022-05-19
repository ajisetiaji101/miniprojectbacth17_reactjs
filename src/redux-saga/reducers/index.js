import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import testimoniReducer from './TestimoniReducer'
import PlacementReducer from "./PlacementReducer";
import instructorReducer from './InstructorReducer'

const rootReducer = combineReducers({
  userState : userReducer,
  testimoniState : testimoniReducer,
  placemenState: PlacementReducer,
  instructorState: instructorReducer

});

export default rootReducer;
