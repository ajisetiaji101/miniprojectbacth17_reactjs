import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from "../constants/User";
import * as ActionTypePlacement from "../constants/Placement";
import * as ActionTypeTalent from "../constants/Talent";

import { handleSignup, handleSignin, handleSignout } from "./UserSaga";
import { handleGetPlacementSaga } from "./PlacementSaga";
import { handleGetTalentSaga } from "./TalentSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypePlacement.GET_PLACEMENT_REQUEST, handleGetPlacementSaga),
    takeEvery(ActionTypeTalent.GET_TALENT_REQUEST, handleGetTalentSaga),
  ]);
}

export default watchAll;
