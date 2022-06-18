import apiHiring from "../../api/api-hiring";
import { call, put } from "redux-saga/effects";
import { doGetHiringFailed, doGetHiringSucceed } from "../actions/Hiring";

function* handleGetHiringSaga() {
  try {
    const result = yield call(apiHiring.List);
    yield put(doGetHiringSucceed(result));
  } catch (error) {
    yield put(doGetHiringFailed(error));
  }
}

export { handleGetHiringSaga };
