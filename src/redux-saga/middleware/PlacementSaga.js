import apiPlacement from "../../api/api-placement";
import { call, put } from "redux-saga/effects";
import { doGetPlaceFailed, doGetPlaceSucced } from "../actions/Placement";

function* handleGetPlacementSaga() {
  try {
    const result = yield call(apiPlacement.List);
    yield put(doGetPlaceSucced(result));
  } catch (error) {
    yield put(doGetPlaceFailed(error));
  }
}

export { handleGetPlacementSaga };
