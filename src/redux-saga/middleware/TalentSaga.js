import apiTalent from "../../api/api-talent";
import { call, put } from "redux-saga/effects";
import { doGetTalentFailed, doGetTalentSucceed } from "../actions/Talent";

function* handleGetTalentSaga() {
  try {
    const result = yield call(apiTalent.List);
    yield put(doGetTalentSucceed(result));
  } catch (error) {
    yield put(doGetTalentFailed(error));
  }
}

export { handleGetTalentSaga };
