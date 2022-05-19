import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';
import * as ActionTypeBootcamp from '../constants/Bootcamp';
import * as ActionTypeCurriculumReviews from '../constants/CurriculumReviews';
import * as ActionTypeBatch from '../constants/AppBatch'

import {handleSignup,handleSignin,handleSignout} from './UserSaga';
import { handleGetBootcamp,handleGetBootcampId,handleGetBootcampType } from './BootcampSaga';
import { handleGetCurriculumReviews } from './CurriculumReviewsSaga';
import {handleGetBatch, handleEditBatchStatus, handleDeleteBatch, handleGetBatchId, handleEditBatch} from './AppBatchSaga'

function * watchAll() {
  yield all([
    // User
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),

    // Bootcamp
    takeEvery(ActionTypeBootcamp.GET_BOOTCAMP_REQUEST, handleGetBootcamp),
    takeEvery(ActionTypeBootcamp.GET_BOOTCAMP_ID_REQUEST, handleGetBootcampId),
    takeEvery(ActionTypeBootcamp.GET_BOOTCAMP_TYPE_REQUEST, handleGetBootcampType),

    // Curriculum Reviews
    takeEvery(ActionTypeCurriculumReviews.GET_CURRICULUMREVIEWS_REQUEST, handleGetCurriculumReviews),

    // Batch
    takeEvery(ActionTypeBatch.GET_BATCH_REQUEST, handleGetBatch),
    takeEvery(ActionTypeBatch.EDIT_BATCH_STATUS_REQUEST, handleEditBatchStatus),
    takeEvery(ActionTypeBatch.DELETE_BATCH_REQUEST, handleDeleteBatch),
    takeEvery(ActionTypeBatch.GET_BATCH_ID_REQUEST, handleGetBatchId),
    takeEvery(ActionTypeBatch.EDIT_BATCH_REQUEST, handleEditBatch),

    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),

  ])
}

export default watchAll;


