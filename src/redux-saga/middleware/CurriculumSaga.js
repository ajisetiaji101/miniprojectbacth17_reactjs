import {
    call,
    put,
  } from "redux-saga/effects";
  
import apiCurriculum from "../../api/apiCurriculum";
import  {  
    doAddCurriculumFailed, 
    doAddCurriculumSucceed, 
    doGetCurriculumFailed, 
    doGetCurriculumSucceed, 
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
    
  export { handleGetCurriculum,handleAddCurriculum };
  