import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';
import * as ActionTypeTestimoni from '../constants/Testimoni';
import * as ActionTypePlacement from "../constants/Placement";
import * as ActionTypeInstructor from "../constants/Instructor";


import {handleSignup,handleSignin,handleSignout} from './UserSaga'
import { handleGetTestimoniSaga } from "./TestimoniSaga";
import { handleGetPlacementSaga } from "./PlacementSaga";
import { handleGetInstructorSaga } from "./InstructorSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery( ActionTypeTestimoni.GET_TESTIMONI_REQUEST,handleGetTestimoniSaga),
    takeEvery(ActionTypePlacement.GET_PLACEMENT_REQUEST, handleGetPlacementSaga),
    takeEvery(ActionTypeInstructor.GET_INSTRUCTOR_REQUEST,handleGetInstructorSaga)
  ])
}

export default watchAll;
