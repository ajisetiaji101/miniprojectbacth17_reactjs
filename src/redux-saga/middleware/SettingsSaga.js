import { call, put } from "redux-saga/effects";

import apiSettings from "../../api/api-settings";
import { doGetTalentFailed, doGetTalentSucceed, doUpdateTalentFailed, doUpdateTalentNoFileFailed, doUpdateTalentNoFileSucceed, doUpdateTalentRequest, doUpdateTalentSucceed } from "../actions/Settings";

function* handleGetTalent(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSettings.getTalent, payload);
    yield put(doGetTalentSucceed(result));
  } catch (error) {
    yield put(doGetTalentFailed);
  }
}

function* handleUpdateTalent(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSettings.updateSettings, payload);
    yield put(doUpdateTalentSucceed(result.data));
  } catch (error) {
    yield put(doUpdateTalentFailed(error));
  }
}

function* handleUpdateTalentNoFile(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSettings.updateSettingsNoFile, payload);
    yield put(doUpdateTalentNoFileSucceed(result.data));
  } catch (error) {
    yield put(doUpdateTalentNoFileFailed(error));
  }
}

export { handleGetTalent, handleUpdateTalent, handleUpdateTalentNoFile };
