import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';
<<<<<<< HEAD
import apiAppBatch from '../../api/api-app-batch'
=======

import apiAppBatch from '../../api/api-app-batch';
>>>>>>> master
import {
    doGetBatchSucceed,
    doGetBatchFailed,
    doEditBatchSucceed,
    doEditBatchFailed,
    doDeleteBatchSucceed,
    doDeleteBatchFailed,
    doGetBatchIdSucceed,
    doGetBatchIdFailed,
    doEditBatchStatusSucceed,
    doEditBatchStatusFailed
} from '../actions/AppBatch'

<<<<<<< HEAD
function* handleGetBatch(){
=======
function* handleGetAppBatch(){
>>>>>>> master
    try {
        const result = yield call(apiAppBatch.batchList);
        yield put(doGetBatchSucceed(result))        
    } catch (error) {
        yield put(doGetBatchFailed(error));
    }
}

function* handleEditBatchStatus(action) {
    const {payload} = action;
    try {
        yield call(apiAppBatch.updateBatchStatus,payload);
        const result = yield call(apiAppBatch.batchList);
        yield put(doEditBatchStatusSucceed(result));
    } catch (error) {
        yield put(doEditBatchStatusFailed(error));
    }
}

function* handleDeleteBatch(action) {
    const {payload} = action;
    try {
        const result = yield call(apiAppBatch.deleteRow,payload);
        yield put(doDeleteBatchSucceed(payload));
    } catch (error) {
        yield put(doDeleteBatchFailed(error));
    }
}

function* handleGetBatchId(action){
    let {payload} = action;
    try {
        const result_batch = yield call(apiAppBatch.batch,payload);
        const result_talents = yield call(apiAppBatch.talentList);
        const result_trainers = yield call(apiAppBatch.instructorList);
        payload = {
            batch: result_batch[0],
            talents: result_talents,
            trainers: result_trainers
        }
        yield put(doGetBatchIdSucceed(payload))        
    } catch (error) {
        yield put(doGetBatchIdFailed(error));
    }
}

function* handleEditBatch(action) {
    const {payload} = action;
    try {
        yield call(apiAppBatch.updateBatch,payload);
        const result = yield call(apiAppBatch.batchList);
        yield put(doEditBatchSucceed(result));
    } catch (error) {
        yield put(doEditBatchFailed(error));
    }
}


export {
<<<<<<< HEAD
    handleGetBatch,
=======
    handleGetAppBatch,
>>>>>>> master
    handleEditBatchStatus,
    handleDeleteBatch,
    handleGetBatchId,
    handleEditBatch
}