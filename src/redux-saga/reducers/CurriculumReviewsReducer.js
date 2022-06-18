import * as ActionType from '../constants/CurriculumReviews';

const INIT_STATE = {
    curriculum_reviews: []
}

const curriculumreviewsReducer = (state = INIT_STATE,action) =>{
    switch (action.type) {
        case ActionType.GET_CURRICULUMREVIEWS_REQUEST:
            return{...state}
        case ActionType.GET_CURRICULUMREVIEWS_SUCCEED:{
            return doGetCurriculumSucceed(state,action);
        }
        default:
            return doGetCurriculumSucceed;
    }
}
const doGetCurriculumSucceed = (state,action) => {
    return{
        ...state,
        curriculum_reviews: action.payload
    }
}

export default curriculumreviewsReducer