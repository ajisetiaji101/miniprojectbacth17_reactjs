import * as ActionType from "../constants/CurriculumConstant";

export const doGetCurriculumRequest = () => ({
  type: ActionType.GET_CURRICULUM_REQUEST,
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
  type: ActionType.ADD_CURRICULUM_SUCCEED,
  payload,
});

export const doAddCurriculumFailed = (payload) => ({
  type: ActionType.GET_CURRICULUM_FAILED,
  payload,
});

export const doGetByIdCurriculumRequest = (payload) => ({
  type: ActionType.GET_BY_ID_CURRICULUM_REQUEST,
  payload,
});
export const doGetByIdCurriculumSucceed = (payload) => ({
  type: ActionType.GET_BY_ID_CURRICULUM_SUCCEED,
  payload,
});
export const doGetByIdCurriculumFailed = (payload) => ({
  type: ActionType.GET_BY_ID_CURRICULUM_FAILED,
  payload,
});

export const doUpdateCurriculumRequest = (payload) => ({
  type: ActionType.UPDATE_CURRICULUM_REQUEST,
  payload,
});
export const doUpdateCurriculumSucceed = (payload) => ({
  type: ActionType.UPDATE_CURRICULUM_SUCCEED,
  payload,
});
export const doUpdateCurriculumFailed = (payload) => ({
  type: ActionType.UPDATE_CURRICULUM_FAILED,
  payload,
});

export const doAddCurriculumMateriRequest = (payload) => ({
  type: ActionType.ADD_CURRICULUM_MATERI_REQUEST,
  payload,
});
export const doAddCurriculumMateriSucceed = (payload) => ({
  type: ActionType.ADD_CURRICULUM_MATERI_SUCCEED,
  payload,
});
export const doAddCurriculumMateriFailed = (payload) => ({
  type: ActionType.ADD_CURRICULUM_MATERI_FAILED,
  payload,
});
