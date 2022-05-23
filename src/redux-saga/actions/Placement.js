import * as ActionType from "../constants/Placement";

export const doGetPlacementRequest = () => ({
  type: ActionType.GET_PLACEMENT_REQUEST,
});
export const doGetPlacementSucceed = (payload) => ({
  type: ActionType.GET_PLACEMENT_SUCCEED,
  payload,
});
export const doGetPlacementFailed = (payload) => ({
  type: ActionType.GET_PLACEMENT_FAILED,
  payload,
});

export const doDeletePlacementRequest = (payload) => ({
  type: ActionType.DELETE_PLACEMENT_REQUEST,
  payload,
});

export const doDeletePlacementSucceed = (payload) => ({
  type: ActionType.DELETE_PLACEMENT_SUCCEED,
  payload,
});

export const doDeletePlacementFailed = (payload) => ({
  type: ActionType.DELETE_PLACEMENT_FAILED,
  payload,
});
