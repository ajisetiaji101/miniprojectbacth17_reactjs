import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';

import apiUser from '../../api/api-user'
import {  
    doSignupSucceed,doSignupFailed,
    doSigninSucceed,doSignoutSucceed,
    doShowAuthMessage
    
} from '../actions/User';

function* handleSignup(action) {
    const {payload} = action;
    try {
        const result = yield call(apiUser.signup,payload);
        yield put(doSignupSucceed(result.data));
    } catch (error) {
        yield put(doSignupFailed(error));
    }
}

function* handleSignin(action) {
    const {payload} = action;
    try {
        const result = yield call(apiUser.signin,payload);
        if (Object.keys(result.data.profile).length === 0){
            yield put(doShowAuthMessage({message : 'user or password not match, try again'}));
        }
        else{
            // localStorage.setItem('@profile', JSON.stringify(result.data.profile));
            // localStorage.setItem('@token', result.data.token);
             sessionStorage.setItem('@profile', JSON.stringify(result.data.profile));
             sessionStorage.setItem('@token', result.data.token);
             sessionStorage.setItem('@status', result.data.success);
            yield put(doSigninSucceed(result.data));
        }
        //localStorage.setItem('@profile', JSON.stringify(result.data.profile));
     
    } catch (error) {
        yield put(doShowAuthMessage({message : 'user or password not match, try again'}));
    }
}

function* handleSignout(action) {
    const {payload} = action;
    try {
        sessionStorage.clear();
        yield put(doSignoutSucceed(payload));
    } catch (error) {
        yield put(doSignupFailed(error));
    }
}

export  {
    handleSignup,
    handleSignin,
    handleSignout
}