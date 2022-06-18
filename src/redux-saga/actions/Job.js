import * as ActionType from '../constants/Job'

export const doGetJobRequest = ()=>({
    type : ActionType.GET_JOB_REQUEST
})

export const doGetJobSucceed = (payload) =>({
    type : ActionType.GET_JOB_SUCCEED,
    payload,
})

export const doGetJobFailed = (payload)=>({
    type : ActionType.GET_JOB_FAILED,
    payload,
})

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
