import * as ActionType from "../constants/Placement";

const INIT_STATE = {
  placement: [],
};

const PlacementReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_PLACEMENT_REQUEST:
      return {
        ...state,
      };
    case ActionType.GET_PLACEMENT_SUCCEED:
      return applyGetPlacementSucceed(state, action);
    default:
      return state;
  }
};

const applyGetPlacementSucceed = (state, action) => {
  return {
    ...state,
    placement: action.payload,
  };
};

export default PlacementReducer;
