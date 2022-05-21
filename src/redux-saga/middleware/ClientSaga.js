import { call, put} from 'redux-saga/effects';
import apiClient from '../../api/api-client'
import {
    doGetClientSucceed, 
    doGetClientFailed
} from '../actions/Client'

function* handleGetClient() {
    console.log("sudah sampai di middleware");

    try {
        const result = yield call(apiClient.list);
        yield put(doGetClientSucceed(result))
    } catch (error) {
        yield put(doGetClientFailed(error));
    }
}



export {
    handleGetClient
}