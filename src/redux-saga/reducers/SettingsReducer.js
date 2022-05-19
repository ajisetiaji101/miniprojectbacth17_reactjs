import * as ActionType from "../constants/Settings";

const INIT_STATE = {
  settings: [],
  isLoading: false,
  isRefresh: false,
};

const SettingReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_TALENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_TALENT_SUCCEED:
      return applyGetTalentSucceed(state, action);
    case ActionType.UPDATE_TALENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_TALENT_SUCCEED:
      return applyUpdateTalentSucceed(state, action);
    case ActionType.UPDATE_TALENTNOFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_TALENTNOFILE_SUCCEED:
      return applyUpdateTalentNoFileSucceed(state, action);
    default:
      return state;
  }
};

const applyGetTalentSucceed = (state, action) => {
  return {
    ...state,
    settings: action.payload,
  };
};

const applyUpdateTalentSucceed = (state, action) => {
  return {
    ...state,
    // talent: action.payload,
    settings: action.payload,
    isLoading: false,
    isRefresh: false,
  };
};

const applyUpdateTalentNoFileSucceed = (state, action) => {
  return {
    ...state,
    // talent: action.payload,
    settings: action.payload,
    isLoading: false,
    isRefresh: false,
  };
};

export default SettingReducer;
