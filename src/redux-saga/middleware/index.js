import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';

import {handleSignup,handleSignin,handleSignout} from './UserSaga'

function *watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout)
  ])
}

export default watchAll;


