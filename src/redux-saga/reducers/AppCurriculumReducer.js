import * as ActionType from '../constants/AppCurriculum'

const INIT_STATE = {
    curriculums: [],
    curriculum: {},
    isLoading: false,
    isRefresh: false
}

const AppCurriculumReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_CURRICULUM_REQUEST:{
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_CURRICULUM_SUCCEED:{
            return applyGetCurriculumSucceed(state, action)
        }

        case ActionType.ADD_CURRICULUM_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }
        case ActionType.ADD_CURRICULUM_SUCCEED: {
            return applyAddCurriculumSucceed(state, action)
        }
        
        case ActionType.EDIT_CURRICULUM_STATUS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }
        case ActionType.EDIT_CURRICULUM_STATUS_SUCCEED: {
            return applyEditCurriculumStatusSucceed(state, action)
        }

        case ActionType.DELETE_CURRICULUM_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: false
            }
        }
        case ActionType.DELETE_CURRICULUM_SUCCEED: {
            return applyDeleteCurriculumSucceed(state,action)
        }
        case ActionType.GET_CURRICULUM_ID_REQUEST:{
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }
        case ActionType.GET_CURRICULUM_ID_SUCCEED:{
            return applyGetCurriculumIdSucceed(state, action)
        }

        case ActionType.EDIT_CURRICULUM_REQUEST:{
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }
        case ActionType.EDIT_CURRICULUM_SUCCEED:{
            return applyEditCurriculumSucceed(state, action)
        }
        default:
            return state;
    }
}

const applyGetCurriculumSucceed = (state, action) => {
    return {
        ...state,
        curriculums: action.payload,
        curriculum:{},
        isLoading: false,
        isRefresh: false
    }
}

const applyAddCurriculumSucceed = (state, action) => {

}

const applyEditCurriculumStatusSucceed = (state, action) => {
    return {
        ...state,
        curriculums: action.payload,
        isLoading: false,
        isRefresh: false
    }
}


const applyDeleteCurriculumSucceed = (state, action) => {
    const { payload } = action;
    const filterCurriculum= state.curriculums.filter(el => el.curr_id !== payload)
    return {
        ...state,
        curriculums : [...filterCurriculum],
        isLoading: false,
        isRefresh : true
    }
}

const applyGetCurriculumIdSucceed = (state, action) => {
    return {
        ...state,
        curriculum: action.payload.curriculum,
        isLoading: false,
        isRefresh: false
    }
}

const applyEditCurriculumSucceed = (state, action) => {
    return {
        ...state,
        curriculums: action.payload,
        isLoading: false,
        isRefresh: false
    }
}

export default AppCurriculumReducer;