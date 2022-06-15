import * as ActionType from "../constants/ProcessBootcampConstant";

const INIT_STATE = {
  processBootcamp: [],
  isLoading: false,
  isRefresh: false,
};

const ProcessBootcampReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.ADD_PROCESS_BOOTCAMP_REQUEST:
      return {
        ...state,
      };
    case ActionType.ADD_PROCESS_BOOTCAMP_SUCCEED:
      return applyAddProcessBootcampSucceed(state, action);
    default:
      return state;
  }
};

const applyAddProcessBootcampSucceed = (state, action) => {
  return {
    ...state,
    processBootcamp: action.payload,
  };
};

export default ProcessBootcampReducer;
