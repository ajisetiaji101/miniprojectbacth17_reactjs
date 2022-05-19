import * as ActionType from "../constants/Instructor";

// membuat funtion creator
export const doGetInstructorRequest = () => ({
    type: ActionType.GET_INSTRUCTOR_REQUEST,
});
export const doGetInstructorSucceed = (payload) => ({
    type: ActionType.GET_INSTRUCTOR_SUCCEED,
    payload,
});
export const doGetInstructorFailed = (payload) => ({
    type: ActionType.GET_INSTRUCTOR_FAILED,
    payload,
});
