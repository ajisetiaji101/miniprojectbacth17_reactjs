import * as ActionType from '../constants/CurriculumReviews';

export const doGetCurriculumReviewsRequest = () =>({
    type : ActionType.GET_CURRICULUMREVIEWS_REQUEST
})

export const doGetCurriculumReviewsSucceed = (payload) =>({
    type : ActionType.GET_CURRICULUMREVIEWS_SUCCEED,
    payload
})

export const doGetCurriculumReviewsFailed = (payload) =>({
    type : ActionType.GET_CURRICULUMREVIEWS_FAILED,
    payload
})