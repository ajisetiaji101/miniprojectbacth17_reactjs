import * as ActionType from "../constants/Placement";

const INIT_STATE = {
  place: [],
  isLoading: false,
};

const PlacementReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_PLACEMENT_REQUEST:
      return {
        ...state,
      };
    case ActionType.GET_PLACEMENT_SUCCEED:
      return applyGetPlacementSucced(state, action);
    default:
      return state;
  }
};

const applyGetPlacementSucced = (state, action) => {
  return {
    ...state,
    place: action.payload,
    isLoading: false,
  };
};

export default PlacementReducer;
