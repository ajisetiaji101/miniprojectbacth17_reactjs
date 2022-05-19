import apiPlacement from "../../api/api-placement";
import { call, put } from "redux-saga/effects";
import { doGetPlacementFailed, doGetPlacementSucceed } from "../actions/Placement";

function* handleGetPlacementSaga() {
  try {
    const result = yield call(apiPlacement.List);
    yield put(doGetPlacementSucceed(result));
  } catch (error) {
    yield put(doGetPlacementFailed(error));
  }
}

export { handleGetPlacementSaga };
