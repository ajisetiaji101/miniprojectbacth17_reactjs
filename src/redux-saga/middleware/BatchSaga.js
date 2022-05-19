import {
    call,
    put,
  } from "redux-saga/effects";
  
  import apiBatch from "../../api/ApiBatch";
  import {
    doGetBatchSucceed,
    doGetBatchFailed,
    doAddBatchSucceed,
    doAddBatchFailed
  } from "../actions/BatchAction";
  
  function* handleGetBatch() {
    console.log("sudah sampai di middleware");

    try {
      const result = yield call(apiBatch.findAll);
      yield put(doGetBatchSucceed(result));
    } catch (error) {
      yield put(doGetBatchFailed(error));
    }
  }

  function* handleAddBatch(action) {
    const { payload } = action;
    try {
      const result = yield call(apiBatch.createBatch, payload);
      yield put(doAddBatchSucceed(result));
    } catch (error) {
      yield put(doAddBatchFailed(error));
    }
  }
    
  export { handleGetBatch,handleAddBatch };
  