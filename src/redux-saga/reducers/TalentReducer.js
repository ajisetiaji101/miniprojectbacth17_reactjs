import * as ActionType from "../constants/Talent";

const INIT_STATE = {
  talent: [],
};

const TalentReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_TALENT_REQUEST:
      return {
        ...state,
      };
    case ActionType.GET_TALENT_SUCCEED:
      return applyGetTalentSucceed(state, action);
    default:
      return state;
  }
};

const applyGetTalentSucceed = (state, action) => {
  return {
    ...state,
    talent: action.payload,
  };
};

export default TalentReducer;
