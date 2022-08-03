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



export const doGetHiringIdRequest = (payload) => ({
  type: ActionType.GET_HIRING_ID_REQUEST,
  payload,
});
export const doGetHiringIdSucceed = (payload) => ({
  type: ActionType.GET_HIRING_ID_SUCCEED,
  payload,
});
export const doGetHiringIdFailed = (payload) => ({
  type: ActionType.GET_HIRING_ID_FAILED,
  payload,
});



export const doGetHiringCityRequest = (payload) => ({
  type: ActionType.GET_HIRING_CITY_REQUEST,
  payload,
});
export const doGetHiringCitySucceed = (payload) => ({
  type: ActionType.GET_HIRING_CITY_SUCCEED,
  payload,
});
export const doGetHiringCityFailed = (payload) => ({
  type: ActionType.GET_HIRING_CITY_FAILED,
  payload,
});