import * as ActionType from "../constants/BatchConstant.js";

export const doGetBatchRequest = () => ({
  type: ActionType.GET_BATCH_REQUEST
});

export const doGetBatchSucceed = (payload) => ({
  type: ActionType.GET_BATCH_SUCCEED,
  payload,
});

export const doGetBatchFailed = (payload) => ({
  type: ActionType.GET_BATCH_FAILED,
  payload,
});

export const doAddBatchRequest = (payload) => ({
  type: ActionType.ADD_BATCH_REQUEST,
  payload,
});

export const doAddBatchSucceed = (payload) => ({
  type: ActionType.ADD_BATCH_SUCCEED ,
  payload,
});

export const doAddBatchFailed = (payload) => ({
  type: ActionType.GET_BATCH_FAILED ,
  payload,
});
