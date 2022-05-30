import { call,put } from "redux-saga/effects";
import apiDasboard from "../../api/apiDasboard";
import { 
    GetTalentSuccess,GetTalentFailed, 
    GetTrainingSuccess,GetTrainingFailed,
    GetBoardingSuccess,GetBoardingFailed,
    GetIdleSuccess,GetIdleFailed,
    GetMonthSuccess,GetMonthFailed, 
    GetBootcampSuccess,GetBootcampFailed,
    GetVersusSuccess,GetVersusFailed,
    GetPendidikanSuccess,GetPendidikanFailed,
    GetUniversitasSuccess,GetUniversitasFailed, 
    GetJurusanSuccess,GetJurusanFailed
} from "../actions/DasboardAct";

function* handleTalent(){
    try {
        const result = yield call(apiDasboard.candidat);
        yield put(GetTalentSuccess(result))
    }
    catch(error){
        yield put(GetTalentFailed(error))
    }
}

function* handleTalent2(){
    try {
        const result = yield call(apiDasboard.training);
        yield put(GetTrainingSuccess(result))
    }
    catch(error){
        yield put(GetTrainingFailed(error))
    }
}

function* handleTalent3(){
    try {
        const result = yield call(apiDasboard.boarding);
        yield put(GetBoardingSuccess(result))
    }
    catch(error){
        yield put(GetBoardingFailed(error))
    }
}

function* handleTalent4(){
    try {
        const result = yield call(apiDasboard.idle);
        yield put(GetIdleSuccess(result))
    }
    catch(error){
        yield put(GetIdleFailed(error))
    }
}

function* handleTalent5(){
    try {
        const result = yield call(apiDasboard.month);
        yield put(GetMonthSuccess(result))
    }
    catch(error){
        yield put(GetMonthFailed(error))
    }
}

function* handleTalent6(){
    try {
        const result = yield call(apiDasboard.bootcamp);
        yield put(GetBootcampSuccess(result))
    }
    catch(error){
        yield put(GetBootcampFailed(error))
    }
}

function* handleTalent7(){
    try {
        const result = yield call(apiDasboard.versus);
        yield put(GetVersusSuccess(result))
    }
    catch(error){
        yield put(GetVersusFailed(error))
    }
}

function* handleTalent8(){
    try {
        const result = yield call(apiDasboard.pendidikan);
        yield put(GetPendidikanSuccess(result))
    }
    catch(error){
        yield put(GetPendidikanFailed(error))
    }
}

function* handleTalent9(){
    try {
        const result = yield call(apiDasboard.universitas);
        yield put(GetUniversitasSuccess(result))
    }
    catch(error){
        yield put(GetUniversitasFailed(error))
    }
}

function* handleTalent10(){
    try {
        const result = yield call(apiDasboard.jurusan);
        yield put(GetJurusanSuccess(result))
    }
    catch(error){
        yield put(GetJurusanFailed(error))
    }
}


export {
    handleTalent,
    handleTalent2,
    handleTalent3,
    handleTalent4,
    handleTalent5,
    handleTalent6,
    handleTalent7,
    handleTalent8,
    handleTalent9,
    handleTalent10
}