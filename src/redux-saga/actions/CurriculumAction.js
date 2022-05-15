import * as ActionType from "../constants/CurriculumConstant";

export const doGetCurriculumRequest = () => ({
  type: ActionType.GET_CURRICULUM_REQUEST
});

export const doGetCurriculumSucceed = (payload) => ({
  type: ActionType.GET_CURRICULUM_SUCCEED,
  payload,
});

export const doGetCurriculumFailed = (payload) => ({
  type: ActionType.GET_CURRICULUM_FAILED,
  payload,
});

export const doAddCurriculumRequest = (payload) => ({
  type: ActionType.ADD_CURRICULUM_REQUEST,
  payload,
});

export const doAddCurriculumSucceed = (payload) => ({
  type: ActionType.ADD_CURRICULUM_SUCCEED ,
  payload,
});

export const doAddCurriculumFailed = (payload) => ({
  type: ActionType.GET_CURRICULUM_FAILED ,
  payload,
});
