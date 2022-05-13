import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from "../constants/User";
import * as ActionTypePlacement from "../constants/Placement";
import * as ActionTypeJob from '../constants/Job'

import { handleSignup, handleSignin, handleSignout } from "./UserSaga";
import { handleGetPlacementSaga } from "./PlacementSaga";
import {handleGetJob, handleAddJob} from './JobSaga'

function* watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypePlacement.GET_PLACEMENT_REQUEST, handleGetPlacementSaga),
    takeEvery(ActionTypeJob.GET_JOB_REQUEST, handleGetJob),
    takeEvery(ActionTypeJob.ADD_JOB_REQUEST, handleAddJob),
  ]);
}

export default watchAll;
