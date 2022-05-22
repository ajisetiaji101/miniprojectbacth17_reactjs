import { call, put } from "redux-saga/effects";
import apiProcessBootcamp from "../../api/api-process-bootcamp";
import { doAddProcessBootcampFailed, doAddProcessBootcampSucceed } from "../actions/ProcessBootcampConstant";

function* handleAddProcessBootcampSaga(action) {
  const { payload } = action;
  try {
    const result = yield call(apiProcessBootcamp.addProcessBootcamp, payload);
    yield put(doAddProcessBootcampSucceed(result.data));
  } catch (error) {
    yield put(doAddProcessBootcampFailed(error));
  }
}

export { handleAddProcessBootcampSaga };
