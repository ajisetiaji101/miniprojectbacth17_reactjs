import * as ActionType from "../constants/Job";

export const doGetJobRequest = () => ({
  type: ActionType.GET_JOB_REQUEST,
});

export const doGetJobSucceed = (payload) => ({
  type: ActionType.GET_JOB_SUCCEED,
  payload,
});

export const doGetJobFailed = (payload) => ({
  type: ActionType.GET_JOB_FAILED,
  payload,
});

export const doAddJobRequest = (payload) => ({
  type: ActionType.ADD_JOB_REQUEST,
  payload,
});

export const doAddJobSucceed = (payload) => ({
  type: ActionType.ADD_JOB_SUCCEED,
  payload,
});

export const doAddJobFailed = (payload) => ({
  type: ActionType.ADD_JOB_FAILED,
  payload,
});

export const doDeleteJobRequest = (payload) => ({
  type: ActionType.DELETE_JOB_REQUEST,
  payload,
});

export const doDeleteJobSucceed = (payload) => ({
  type: ActionType.DELETE_JOB_SUCCEED,
  payload,
});

export const doDeleteJobFailed = (payload) => ({
  type: ActionType.DELETE_JOB_FAILED,
  payload,
});

export const doEditJobRequest = (payload) => ({
  type: ActionType.EDIT_JOB_REQUEST,
  payload,
});

export const doEditJobSucceed = (payload) => ({
  type: ActionType.EDIT_JOB_SUCCEED,
  payload,
});

export const doEditJobFailed = (payload) => ({
  type: ActionType.EDIT_JOB_FAILED,
  payload,
});

export const doGetJobIdRequest = (payload) => ({
  type: ActionType.GET_JOB_ID_REQUEST,
  payload,
});

export const doGetJobIdSucceed = (payload) => ({
  type: ActionType.GET_JOB_ID_SUCCEED,
  payload,
});

export const doGetJobIdFailed = (payload) => ({
  type: ActionType.GET_JOB_ID_FAILED,
  payload,
});

export const doUpdateJobsNoFileRequest = (payload) => ({
  type: ActionType.UPDATE_JOBSNOFILE_REQUEST,
  payload,
});

export const doUpdateJobsNoFileSucceed = (payload) => ({
  type: ActionType.UPDATE_JOBSNOFILE_SUCCEED,
  payload,
});

export const doUpdateJobsNoFileFailed = (payload) => ({
  type: ActionType.UPDATE_JOBSNOFILE_FAILED,
  payload,
});
