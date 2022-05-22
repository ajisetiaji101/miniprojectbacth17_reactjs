import * as ActionType from "../constants/ProcessBootcampConstant";

export const doAddProcessBootcampRequest = (payload) => ({
  type: ActionType.ADD_PROCESS_BOOTCAMP_REQUEST,
  payload,
});
export const doAddProcessBootcampSucceed = (payload) => ({
  type: ActionType.ADD_PROCESS_BOOTCAMP_SUCCEED,
  payload,
});
export const doAddProcessBootcampFailed = (payload) => ({
  type: ActionType.ADD_PROCESS_BOOTCAMP_FAILED,
  payload,
});

export const doUpdateProcessBootcampRequest = (payload) => ({
  type: ActionType.UPDATE_PROCESS_BOOTCAMP_REQUEST,
  payload,
});
export const doUpdateProcessBootcampSucceed = (payload) => ({
  type: ActionType.UPDATE_PROCESS_BOOTCAMP_SUCCEED,
  payload,
});
export const doUpdateProcessBootcampFailed = (payload) => ({
  type: ActionType.UPDATE_PROCESS_BOOTCAMP_FAILED,
  payload,
});

export const doUpdateProcessBootcampNoFileRequest = (payload) => ({
  type: ActionType.UPDATE_PROCESS_BOOTCAMPNOFILE_REQUEST,
  payload,
});
export const doUpdateProcessBootcampNoFileSucceed = (payload) => ({
  type: ActionType.UPDATE_PROCESS_BOOTCAMPNOFILE_SUCCEED,
  payload,
});
export const doUpdateProcessBootcampNoFileFailed = (payload) => ({
  type: ActionType.UPDATE_PROCESS_BOOTCAMPNOFILE_FAILED,
  payload,
});
