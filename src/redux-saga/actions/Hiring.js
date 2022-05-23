import * as ActionType from "../constants/Hiring";

export const doGetHiringRequest = () => ({
  type: ActionType.GET_HIRING_REQUEST,
});
export const doGetHiringSucceed = (payload) => ({
  type: ActionType.GET_HIRING_SUCCEED,
  payload,
});
export const doGetHiringFailed = (payload) => ({
  type: ActionType.GET_HIRING_FAILED,
  payload,
});
