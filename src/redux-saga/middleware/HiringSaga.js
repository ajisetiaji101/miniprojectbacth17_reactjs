import apiHiring from "../../api/api-hiring";
import { call, put } from "redux-saga/effects";
import { doGetHiringFailed, doGetHiringSucceed, doGetHiringIdSucceed, doGetHiringIdFailed, doGetHiringCitySucceed, doGetHiringCityFailed } from "../actions/Hiring";

function* handleGetHiringSaga() {
  try {
    const result = yield call(apiHiring.List);
    yield put(doGetHiringSucceed(result));
  } catch (error) {
    yield put(doGetHiringFailed(error));
  }
}

function* handleGetHiringIdSaga(action) {
  const { payload } = action;
  try {
    const result = yield call(apiHiring.findOne, payload);
    yield put(doGetHiringIdSucceed(result));
  } catch (error) {
    yield put(doGetHiringIdFailed(error));
  }
}

function* handleGetHiringCitySaga(action) {
  const { payload } = action;
  try {
    const result = yield call(apiHiring.city, payload);
    yield put(doGetHiringCitySucceed(result));
  } catch (error) {
    yield put(doGetHiringCityFailed(error));
  }
}

export { handleGetHiringSaga, handleGetHiringIdSaga, handleGetHiringCitySaga };
