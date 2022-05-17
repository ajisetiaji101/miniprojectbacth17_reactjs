import {call,put} from 'redux-saga/effects';
import apiJobPosting from '../../api/api-jobPosting';
import { 
    doGetJobSucceed,
    doGetJobFailed,
    doAddJobSucceed,
    doAddJobFailed
 } from '../actions/Job';

function* handleGetJob(){
  console.log("sudah sampai di middleware");

    try {
        const result = yield call(apiJobPosting.list)
        yield put(doGetJobSucceed(result))
    } catch (error) {
        yield put(doGetJobFailed(error))
    }
}

function* handleAddJob(action) {
    const { payload } = action;
    try {
      const result = yield call(apiJobPosting.createJob, payload);
      yield put(doAddJobSucceed(result));
    } catch (error) {
      yield put(doAddJobFailed(error));
    }
  }

export{ handleGetJob,handleAddJob };