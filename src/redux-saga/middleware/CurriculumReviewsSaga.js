import { call,put } from "redux-saga/effects";
import apiCurriculumReviews from "../../api/api-curriculum-reviews";
import { doGetCurriculumReviewsSucceed,doGetCurriculumReviewsFailed } from "../actions/CurriculumReviews";

function * handleGetCurriculumReviews(){
    try{
        const result = yield call(apiCurriculumReviews.findCurr);
        yield put(doGetCurriculumReviewsSucceed(result))
    }catch (error){
        yield put(doGetCurriculumReviewsFailed(error))
    }
}
export{
    handleGetCurriculumReviews
}