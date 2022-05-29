import { call, put} from 'redux-saga/effects';
import apiClient from '../../api/api-client'
import {
    doGetClientSucceed, 
    doGetClientFailed,
    doGetClientIdSucceed,
    doGetClientIdFailed,
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

function* handleGetClientId(action){
    let {payload} = action;
    try {
        const result = yield call(apiClient.jobs,payload);
        payload = {
            clients: result[0]
        }
        yield put(doGetClientIdSucceed(payload))        
    } catch (error) {
        yield put(doGetClientIdFailed(error));
    }
}


export {
    handleGetClient,
    handleGetClientId
}