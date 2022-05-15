import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from "../constants/User";
import * as ActionTypePlacement from "../constants/Placement";
import * as ActionTypeTalent from "../constants/Talent";

import * as ActionTypeAppCurriculum from '../constants/AppCurriculum'
import * as ActionTypeCurriculum from '../constants/CurriculumConstant';

import * as ActionTypeBatch from "../constants/BatchConstant";
import * as ActionTypeAppBatch from '../constants/AppBatch';

import { handleSignup, handleSignin, handleSignout } from "./UserSaga";
import { handleGetPlacementSaga } from "./PlacementSaga";
import {handleGetAppCurriculum, handleEditCurriculum, handleDeleteCurriculum, handleEditCurriculumStatus, handleGetCurriculumId} from './AppCurriculumSaga';
import {handleAddCurriculum, handleGetCurriculum} from './CurriculumSaga';
import { handleGetTalentSaga } from "./TalentSaga";
import { handleGetBatch,handleAddBatch } from "./BatchSaga";
import {handleGetAppBatch, handleEditBatchStatus, handleDeleteBatch, handleGetBatchId, handleEditBatch} from './AppBatchSaga';

function* watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypePlacement.GET_PLACEMENT_REQUEST, handleGetPlacementSaga),
    takeEvery(ActionTypeTalent.GET_TALENT_REQUEST, handleGetTalentSaga),

    takeEvery(ActionTypeAppCurriculum.GET_CURRICULUM_REQUEST,handleGetAppCurriculum),
    takeEvery(ActionTypeAppCurriculum.DELETE_CURRICULUM_REQUEST,handleDeleteCurriculum),
    takeEvery(ActionTypeAppCurriculum.EDIT_CURRICULUM_STATUS_REQUEST,handleEditCurriculumStatus),
    takeEvery(ActionTypeAppCurriculum.GET_CURRICULUM_ID_REQUEST,handleGetCurriculumId),
    takeEvery(ActionTypeAppCurriculum.EDIT_CURRICULUM_REQUEST,handleEditCurriculum),
    takeEvery(ActionTypeCurriculum.GET_CURRICULUM_REQUEST,handleGetCurriculum),
    takeEvery(ActionTypeCurriculum.ADD_CURRICULUM_REQUEST,handleAddCurriculum),

    takeEvery(ActionTypeBatch.GET_BATCH_REQUEST, handleGetBatch),
    takeEvery(ActionTypeBatch.ADD_BATCH_REQUEST,handleAddBatch),
    takeEvery(ActionTypeAppBatch.GET_BATCH_REQUEST, handleGetAppBatch),
    takeEvery(ActionTypeAppBatch.EDIT_BATCH_STATUS_REQUEST, handleEditBatchStatus),
    takeEvery(ActionTypeAppBatch.DELETE_BATCH_REQUEST, handleDeleteBatch),
    takeEvery(ActionTypeAppBatch.GET_BATCH_ID_REQUEST, handleGetBatchId),
    takeEvery(ActionTypeAppBatch.EDIT_BATCH_REQUEST, handleEditBatch)
  ]);
}

export default watchAll;
