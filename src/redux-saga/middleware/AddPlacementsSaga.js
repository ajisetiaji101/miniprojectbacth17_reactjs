import { call, put } from "redux-saga/effects";
import apiAddPlacement from "../../api/apiAddPlacement";
import {
  AddPlacementsSuccess,
  AddPlacementsFailed,
  GetPlacementsSuccess,
  GetPlacementsFailed,
  GetClientSuccess,
  GetClientFailed,
} from "../actions/AddPlacementsAct";

function* handleAddPlacements(action) {
  const { payload } = action;
  try {
    const result = yield call(apiAddPlacement.daftar, payload);
    console.log(result);
    yield put(AddPlacementsSuccess(result.data));
  } catch (error) {
    yield put(AddPlacementsFailed(error));
  }
}

function* handlePlacements() {
  try {
    const result = yield call(apiAddPlacement.caritalent);
    yield put(GetPlacementsSuccess(result));
  } catch (error) {
    yield put(GetPlacementsFailed(error));
  }
}

function* handleClient() {
  try {
    const result = yield call(apiAddPlacement.cariclient);
    yield put(GetClientSuccess(result));
  } catch (error) {
    yield put(GetClientFailed(error));
  }
}

export { handleAddPlacements, handlePlacements, handleClient };
