import * as ActionType from "../constants/CurriculumConstant";

const INIT_STATE = {
  curriculum: [],
  status:{},
};
const CurriculumReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_CURRICULUM_REQUEST:
      return {
        ...state,
        status:""
      };
    case ActionType.GET_CURRICULUM_SUCCEED:
      return applyGetCurriculumSucceed(state, action);
    case ActionType.ADD_CURRICULUM_REQUEST: {
      return {
        ...state,
        status:""
      };
    }
    case ActionType.ADD_CURRICULUM_SUCCEED: {
      return applyAddCurriclumSucceed(state, action);
    }
    default:
      return state;
  }
};

const applyGetCurriculumSucceed = (state, action) => {
  let curriculum1 = action.payload;
  return {
    ...state,
    curriculum: curriculum1,
  };
};

const applyAddCurriclumSucceed = (state, action) => {

  const hasil = action.payload
  return {
    state,
    curriculum: state.curriculum,
    status: hasil
  };
};

export default CurriculumReducer;
