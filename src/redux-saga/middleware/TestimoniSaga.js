import {call,put} from "redux-saga/effects";

import apiTestimoni from "../../api/api-testimoni";

import {
    doGetTestimoniFailed,
    doGetTestimoniSucceed,
} from "../actions/Testimoni";

function* handleGetTestimoniSaga() {
    try {
        const result = yield call(apiTestimoni.findAll);
        yield put(doGetTestimoniSucceed(result));
    } catch (error) {
        yield put(doGetTestimoniFailed(error));
    }
}

export { handleGetTestimoniSaga };
