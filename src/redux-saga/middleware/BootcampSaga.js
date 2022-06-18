import { call,put } from "redux-saga/effects";
import apiBootcamp from "../../api/api-bootcamp";
import { 
    doGetBootcampSuccess,
    doGetBootcampFailed,
    doGetBootcampIdSuccess,
    doGetBootcampIdFailed,
    doGetBootcampTypeSuccess,
    doGetBootcampTypeFailed
 } from "../actions/Bootcamp";

function * handleGetBootcamp(){
    try{
        const result = yield call(apiBootcamp.findBootcamp);
        yield put(doGetBootcampSuccess(result))
    }catch (error){
        yield put(doGetBootcampFailed(error))
    }
}

function * handleGetBootcampId(){
    try{
        const result = yield call(apiBootcamp.regular);
        yield put(doGetBootcampIdSuccess(result))
    }catch (error){
        yield put(doGetBootcampIdFailed(error))
    }
}

function * handleGetBootcampType(){
    try{
        const result = yield call(apiBootcamp.berbayar);
        yield put(doGetBootcampTypeSuccess(result))
    }catch (error){
        yield put(doGetBootcampTypeFailed(error))
    }
}
export{
    handleGetBootcamp,
    handleGetBootcampId,
    handleGetBootcampType
}