import * as ActionType from "../constants/TalentTimelineConstant";

const INIT_STATE = {
  talenttimeline: [],
};

const TalentTimelineReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_TALENTTIMELINE_REQUEST:
      return {
        ...state,
      };
    case ActionType.GET_TALENTTIMELINE_SUCCEED:
      return applyGetTalentTimelineSucceed(state, action);
    case ActionType.ADD_TALENTTIMELINE_REQUEST:
      return {
        ...state,
      };
    case ActionType.ADD_TALENTTIMELINE_SUCCEED:
      return applyAddTalentTimelineSucceed(state, action);
    default:
      return state;
  }
};

const applyGetTalentTimelineSucceed = (state, action) => {
  return {
    ...state,
    talenttimeline: action.payload,
  };
};

const applyAddTalentTimelineSucceed = (state, action) => {
  return {
    ...state,
    talenttimeline: action.payload,
  };
};

export default TalentTimelineReducer;
