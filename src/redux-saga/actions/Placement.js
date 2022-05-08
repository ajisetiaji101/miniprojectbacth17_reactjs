import * as ActionType from "../constants/Placement";

export const doGetPlaceRequest = () => ({
  type: ActionType.GET_PLACEMENT_REQUEST,
});
export const doGetPlaceSucced = (payload) => ({
  type: ActionType.GET_PLACEMENT_SUCCEED,
  payload,
});
export const doGetPlaceFailed = (payload) => ({
  type: ActionType.GET_PLACEMENT_FAILED,
  payload,
});
