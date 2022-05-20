import * as ActionType from "../constants/CurriculumConstant";

const INIT_STATE = {
  curriculum: {},
  isLoading: false,
  error: null,
};

const CurriculumReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_BY_ID_CURRICULUM_REQUEST:
      return { ...state, isLoading: true };
    case ActionType.GET_BY_ID_CURRICULUM_SUCCEED:
      return applyGetByIdCurriculumSucceed(state, action);
    case ActionType.GET_BY_ID_CURRICULUM_FAILED:
      return { ...state, isLoading: false, error: action.payload.message };
    case ActionType.UPDATE_CURRICULUM_REQUEST:
      return { ...state, isLoading: true };
    case ActionType.UPDATE_CURRICULUM_SUCCEED:
      return applyUpdateCurriculumSucceed(state, action);
    case ActionType.UPDATE_CURRICULUM_FAILED:
      return { ...state, isLoading: false, error: action.payload.message };
    case ActionType.ADD_CURRICULUM_MATERI_REQUEST:
      return { ...state, isLoading: true };
    case ActionType.ADD_CURRICULUM_MATERI_SUCCEED:
      return applyAddCurriculumMateriSucceed(state, action);
    case ActionType.ADD_CURRICULUM_MATERI_FAILED:
      return { ...state, isLoading: false, error: action.payload.message };
    default:
      return state;
  }
};

const applyGetByIdCurriculumSucceed = (state, action) => {
  const { payload } = action;
  return { ...state, curriculum: payload.data, isLoading: false };
};

const applyUpdateCurriculumSucceed = (state, action) => {
  return { ...state, isLoading: false };
};
const applyAddCurriculumMateriSucceed = (state, action) => {
  return { ...state, isLoading: false };
};

export default CurriculumReducer;
