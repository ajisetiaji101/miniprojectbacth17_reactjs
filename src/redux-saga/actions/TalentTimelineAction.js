import * as ActionType from "../constants/TalentTimelineConstant";

export const doGetTalentTimelineRequest = (payload) => ({
  type: ActionType.GET_TALENTTIMELINE_REQUEST,
  payload,
});
export const doGetTalentTimelineSucceed = (payload) => ({
  type: ActionType.GET_TALENTTIMELINE_SUCCEED,
  payload,
});
export const doGetTalentTimelineFailed = (payload) => ({
  type: ActionType.GET_TALENTTIMELINE_FAILED,
  payload,
});

export const doAddTalentTimelineRequest = (payload) => ({
  type: ActionType.ADD_TALENTTIMELINE_REQUEST,
  payload,
});
export const doAddTalentTimelineSucceed = (payload) => ({
  type: ActionType.ADD_TALENTTIMELINE_SUCCEED,
  payload,
});
export const doAddTalentTimelineFailed = (payload) => ({
  type: ActionType.ADD_TALENTTIMELINE_FAILED,
  payload,
});
