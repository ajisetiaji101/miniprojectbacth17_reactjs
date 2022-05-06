import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';
import * as ActionTypeTestimoni from '../constants/Testimoni';


import {handleSignup,handleSignin,handleSignout} from './UserSaga'
import { handleGetTestimoniSaga } from "./TestimoniSaga";

function *watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery( ActionTypeTestimoni.GET_TESTIMONI_REQUEST,handleGetTestimoniSaga)
  ])
}

export default watchAll;


