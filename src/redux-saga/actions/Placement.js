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
