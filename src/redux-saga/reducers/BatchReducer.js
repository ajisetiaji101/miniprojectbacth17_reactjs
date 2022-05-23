import * as ActionType from "../constants/BatchConstant";

const INIT_STATE = {
  batch: [],
  status:{},
};
const BatchReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_BATCH_REQUEST:
      return {
        ...state,
        status:""
      };
    case ActionType.GET_BATCH_SUCCEED:
      return applyGetBatchSucceed(state, action);
    case ActionType.ADD_BATCH_REQUEST: {
      return {
        ...state,
        status:""
      };
    }
    case ActionType.ADD_BATCH_SUCCEED: {
      return applyAddBatchSucceed(state, action);
    }
    default:
      return state;
  }
};

const applyGetBatchSucceed = (state, action) => {
  let batch1 = action.payload;
  return {
    ...state,
    batch: batch1,
  };
};

const applyAddBatchSucceed = (state, action) => {

  const hasil = action.payload
  return {
    state,
    batch: state.batch,
    status: hasil
  };
};

export default BatchReducer;
