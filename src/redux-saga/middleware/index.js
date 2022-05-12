import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from "../constants/User";
import * as ActionTypePlacement from "../constants/Placement";
import * as ActionTypeAppCurriculum from '../constants/AppCurriculum'
import * as ActionTypeCurriculum from '../constants/CurriculumConstant';

import { handleSignup, handleSignin, handleSignout } from "./UserSaga";
import { handleGetPlacementSaga } from "./PlacementSaga";
import {handleGetAppCurriculum, handleEditCurriculum, handleDeleteCurriculum, handleEditCurriculumStatus, handleGetCurriculumId} from './AppCurriculumSaga';
import {handleAddCurriculum, handleGetCurriculum} from './CurriculumSaga';

function* watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypePlacement.GET_PLACEMENT_REQUEST, handleGetPlacementSaga),
    takeEvery(ActionTypeAppCurriculum.GET_CURRICULUM_REQUEST,handleGetAppCurriculum),
    takeEvery(ActionTypeAppCurriculum.DELETE_CURRICULUM_REQUEST,handleDeleteCurriculum),
    takeEvery(ActionTypeAppCurriculum.EDIT_CURRICULUM_STATUS_REQUEST,handleEditCurriculumStatus),
    takeEvery(ActionTypeAppCurriculum.GET_CURRICULUM_ID_REQUEST,handleGetCurriculumId),
    takeEvery(ActionTypeAppCurriculum.EDIT_CURRICULUM_REQUEST,handleEditCurriculum),
    takeEvery(ActionTypeCurriculum.GET_CURRICULUM_REQUEST,handleGetCurriculum),
    takeEvery(ActionTypeCurriculum.ADD_CURRICULUM_REQUEST,handleAddCurriculum)
  ]);
}

export default watchAll;
