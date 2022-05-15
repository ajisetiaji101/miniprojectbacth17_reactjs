import * as ActionType from "../constants/Talent";

export const doGetTalentRequest = () => ({
  type: ActionType.GET_TALENT_REQUEST,
});
export const doGetTalentSucceed = (payload) => ({
  type: ActionType.GET_TALENT_SUCCEED,
  payload,
});
export const doGetTalentFailed = (payload) => ({
  type: ActionType.GET_TALENT_FAILED,
  payload,
});
