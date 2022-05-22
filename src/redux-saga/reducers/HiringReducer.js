import * as ActionType from "../constants/Hiring";

const INIT_STATE = {
  hiringg: [],
};

const HiringReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_HIRING_REQUEST:
      return {
        ...state,
      };
    case ActionType.GET_HIRING_SUCCEED:
      return applyGetHiringSucceed(state, action);
    default:
      return state;
  }
};

const applyGetHiringSucceed = (state, action) => {
  return {
    ...state,
    hiring: action.payload,
  };
};

export default HiringReducer;
