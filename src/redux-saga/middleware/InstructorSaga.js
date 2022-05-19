import {call,put} from "redux-saga/effects";

import apiInstructor from "../../api/api-instructor"

import {
    doGetInstructorFailed,
    doGetInstructorSucceed,
} from "../actions/Instructor";

function* handleGetInstructorSaga() {
    try {
        const result = yield call(apiInstructor.findAll);
        yield put(doGetInstructorSucceed(result));
    } catch (error) {
        yield put(doGetInstructorFailed(error));
    }
}

export { handleGetInstructorSaga };
