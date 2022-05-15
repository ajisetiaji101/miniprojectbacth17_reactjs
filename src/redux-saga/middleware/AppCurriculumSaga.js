import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';
import apiAppCurriculum from '../../api/api-app-curriculum';
import { 
    doDeleteCurriculumFailed, 
    doDeleteCurriculumSucceed, 
    doEditCurriculumFailed, 
    doEditCurriculumStatusFailed, 
    doEditCurriculumStatusSucceed, 
    doEditCurriculumSucceed, 
    doGetCurriculumFailed, 
    doGetCurriculumIdFailed, 
    doGetCurriculumIdSucceed, 
    doGetCurriculumSucceed 
} from '../actions/AppCurriculum';

function* handleGetAppCurriculum(){
    try {
        const result = yield call(apiAppCurriculum.currList);
        yield put(doGetCurriculumSucceed(result))        
    } catch (error) {
        yield put(doGetCurriculumFailed(error));
    }
}

function* handleEditCurriculumStatus(action) {
    const {payload} = action;
    try {
        yield call(apiAppCurriculum.updateCurrStatus,payload);
        const result = yield call(apiAppCurriculum.currList);
        yield put(doEditCurriculumStatusSucceed(result));
    } catch (error) {
        yield put(doEditCurriculumStatusFailed(error));
    }
}

function* handleDeleteCurriculum(action) {
    const {payload} = action;
    try {
        const result = yield call(apiAppCurriculum.deleteRow,payload);
        yield put(doDeleteCurriculumSucceed(payload));
    } catch (error) {
        yield put(doDeleteCurriculumFailed(error));
    }
}

function* handleGetCurriculumId(action){
    let {payload} = action;
    try {
        const result_curriculum = yield call(apiAppCurriculum.curriculum,payload);
        payload = {
            curriculum: result_curriculum[0]
        }
        yield put(doGetCurriculumIdSucceed(payload))        
    } catch (error) {
        yield put(doGetCurriculumIdFailed(error));
    }
}

function* handleEditCurriculum(action) {
    const {payload} = action;
    try {
        yield call(apiAppCurriculum.updateCurr,payload);
        const result = yield call(apiAppCurriculum.currList);
        yield put(doEditCurriculumSucceed(result));
    } catch (error) {
        yield put(doEditCurriculumFailed(error));
    }
}


export {
    handleGetAppCurriculum,
    handleEditCurriculumStatus,
    handleDeleteCurriculum,
    handleGetCurriculumId,
    handleEditCurriculum
}