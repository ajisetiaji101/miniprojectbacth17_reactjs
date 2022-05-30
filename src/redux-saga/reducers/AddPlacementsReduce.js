import * as ActionType from "../constants/AddPlacementsCons";

const INIT_STATE = {
  placements: [],
  client:[]
};

const AddPlacementsReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.ADD_PLACEMENTS_REQUEST:
      return { ...state };
    case ActionType.ADD_PLACEMENTS_SUCCESS:
      return AddPlacementsSucceed(state, action);
    case ActionType.GET_PLACEMENTS_REQUEST:
      return { ...state };
    case ActionType.GET_PLACEMENTS_SUCCESS:
      return GetPlacementsSucceed(state, action);
      case ActionType.GET_CLIENT_REQUEST:
      return { ...state };
    case ActionType.GET_CLIENT_SUCCESS:
      return GetClientSucceed(state, action);
    default:
      return state;
  }
};

const AddPlacementsSucceed = (state, action) => {
  let { payload } = action;
  return {
    ...state,
    placements: [...state.placements, payload],
  };
};

const GetPlacementsSucceed = (state, action) => {
  return {
    ...state,
    placements: action.payload,
  };
};

const GetClientSucceed = (state, action) => {
    return {
      ...state,
      client: action.payload,
    };
  };
export default AddPlacementsReduce;
