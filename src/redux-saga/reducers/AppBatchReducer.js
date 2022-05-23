import * as ActionType from '../constants/AppBatch'

const INIT_STATE = {
    batches: [],
    batch:{},
    talents:[],
    trainers:[],
    isLoading: false,
    isRefresh: false
}

const AppBatchReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_BATCH_REQUEST:{
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_BATCH_SUCCEED:{
            return applyGetBatchSucceed(state, action)
        }

        case ActionType.ADD_BATCH_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }
        case ActionType.ADD_BATCH_SUCCEED: {
            return applyAddBatchSucceed(state, action)
        }
        
        case ActionType.EDIT_BATCH_STATUS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }
        case ActionType.EDIT_BATCH_STATUS_SUCCEED: {
            return applyEditBatchStatusSucceed(state, action)
        }

        case ActionType.DELETE_BATCH_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: false
            }
        }
        case ActionType.DELETE_BATCH_SUCCEED: {
            return applyDeleteBatchSucceed(state,action)
        }
        case ActionType.GET_BATCH_ID_REQUEST:{
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }
        case ActionType.GET_BATCH_ID_SUCCEED:{
            return applyGetBatchIdSucceed(state, action)
        }

        case ActionType.EDIT_BATCH_REQUEST:{
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }
        case ActionType.EDIT_BATCH_SUCCEED:{
            return applyEditBatchSucceed(state, action)
        }
        default:
            return state;
    }
}

const applyGetBatchSucceed = (state, action) => {
    return {
        ...state,
        batches: action.payload,
        batch:{},
        talents:[],
        trainers:[],
        isLoading: false,
        isRefresh: false
    }
}

const applyAddBatchSucceed = (state, action) => {

}

const applyEditBatchStatusSucceed = (state, action) => {
    return {
        ...state,
        batches: action.payload,
        isLoading: false,
        isRefresh: false
    }
}


const applyDeleteBatchSucceed = (state, action) => {
    const { payload } = action;
    const filterBatch= state.batches.filter(el => el.batch_id !== payload)
    return {
        ...state,
        batches : [...filterBatch],
        isLoading: false,
        isRefresh : true
    }
}

const applyGetBatchIdSucceed = (state, action) => {
    return {
        ...state,
        batch: action.payload.batch,
        talents:action.payload.talents,
        trainers:action.payload.trainers,
        isLoading: false,
        isRefresh: false
    }
}

const applyEditBatchSucceed = (state, action) => {
    return {
        ...state,
        batches: action.payload,
        isLoading: false,
        isRefresh: false
    }
}

export default AppBatchReducer;