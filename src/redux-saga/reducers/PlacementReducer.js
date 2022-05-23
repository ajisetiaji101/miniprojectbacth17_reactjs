import * as ActionType from "../constants/Placement";

const INIT_STATE = {
  placement: [],
  isLoading: false,
  isRefresh: false,
};

const PlacementReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_PLACEMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_PLACEMENT_SUCCEED:
      return applyGetPlacementSucceed(state, action);
    case ActionType.DELETE_PLACEMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isRefresh: false,
      };
    case ActionType.DELETE_PLACEMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isRefresh: false,
      };
    case ActionType.DELETE_PLACEMENT_SUCCEED: {
      return applyDeletePlacementSucceed(state, action);
    }
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

const applyDeletePlacementSucceed = (state, action) => {
  const { payload } = action;
  const filterPlacement = state.placement.filter((el) => el.place_id !== payload);
  return {
    ...state,
    placement: [...filterPlacement],
    isLoading: false,
    isRefresh: false,
  };
};

export default PlacementReducer;
