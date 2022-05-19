import * as ActionType from "../constants/Testimoni";

// membuat funtion creator
export const doGetTestimoniRequest = () => ({
    type: ActionType.GET_TESTIMONI_REQUEST,
});
export const doGetTestimoniSucceed = (payload) => ({
    type: ActionType.GET_TESTIMONI_SUCCEED,
    payload,
});
export const doGetTestimoniFailed = (payload) => ({
    type: ActionType.GET_TESTIMONI_FAILED,
    payload,
});
