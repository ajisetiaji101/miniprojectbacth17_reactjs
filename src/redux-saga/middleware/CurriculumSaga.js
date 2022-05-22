import { call, put } from "redux-saga/effects";

import apiCurriculum from "../../api/apiCurriculum";
import apiCurriculum1 from "../../api/api-curriculum";
import apiCurriculumMateri from "../../api/api-curriculum-materi";
import {
  doAddCurriculumFailed,
  doAddCurriculumSucceed,
  doGetCurriculumFailed,
  doGetCurriculumSucceed,
  doGetByIdCurriculumFailed,
  doGetByIdCurriculumSucceed,
  doUpdateCurriculumFailed,
  doUpdateCurriculumSucceed,
  doAddCurriculumMateriFailed,
  doAddCurriculumMateriSucceed,
} from "../actions/CurriculumAction";

function* handleGetCurriculum() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiCurriculum.findAll);
    yield put(doGetCurriculumSucceed(result));
  } catch (error) {
    yield put(doGetCurriculumFailed(error));
  }
}

function* handleAddCurriculum(action) {
  const { payload } = action;
  try {
    const result = yield call(apiCurriculum.createCurriculum, payload);
    yield put(doAddCurriculumSucceed(result));
  } catch (error) {
    yield put(doAddCurriculumFailed(error));
  }
}

function* handleGetByIdCurriculum(action) {
  const { payload } = action;
  try {
    const result = yield call(apiCurriculum1.findOne, payload);
    yield put(doGetByIdCurriculumSucceed(result));
  } catch (error) {
    yield put(doGetByIdCurriculumFailed(error));
  }
}

function* handleUpdateCurriculum(action) {
  const { payload } = action;
  try {
    const result = yield call(apiCurriculum1.update, payload);
    yield put(doUpdateCurriculumSucceed(result));
  } catch (error) {
    yield put(doUpdateCurriculumFailed(error));
  }
}

function* handleAddCurriculumMateri(action) {
  const { payload } = action;
  try {
    const result = yield call(apiCurriculumMateri.create, payload);
    yield put(doAddCurriculumMateriSucceed(result));
  } catch (error) {
    yield put(doAddCurriculumMateriFailed(error));
  }
}

export {
  handleGetCurriculum,
  handleAddCurriculum,
  handleGetByIdCurriculum,
  handleUpdateCurriculum,
  handleAddCurriculumMateri,
};
