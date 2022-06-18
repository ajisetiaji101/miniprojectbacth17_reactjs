import * as ActionType from '../constants/Bootcamp'

const INIT_STATE = {
    curriculum: {},
    regular: [],
    berbayar: [],
}

const bootcampReducer = (state = INIT_STATE,action) =>{
    switch (action.type){
        // Bootcamp
        case ActionType.GET_BOOTCAMP_REQUEST:
                return {...state}
        case ActionType.GET_BOOTCAMP_SUCCESS:{
            return doGetBootcampSucceed(state,action)
        }   

        // Regular
        case ActionType.GET_BOOTCAMP_ID_REQUEST:{
            return {...state}
        }
        case ActionType.GET_BOOTCAMP_ID_SUCCESS:{
            return doGetBootcampIdSucceed(state,action)
        }

        // Berbayar
        case ActionType.GET_BOOTCAMP_TYPE_REQUEST:{
            return {...state}
        }
        case ActionType.GET_BOOTCAMP_TYPE_SUCCESS:{
            return doGetBootcampTypeSucceed(state,action)
        }
        default:
            return doGetBootcampSucceed(state,action)
    }
}

// Bootcamp
const doGetBootcampSucceed = (state,action) => {
    return{
        ...state,
        curriculum: action.payload
    }
}

// Regular
const doGetBootcampIdSucceed = (state,action) => {
    return{
        ...state,
        regular: action.payload,
        curriculum: action.payload,
    }
}

// Berbayar
const doGetBootcampTypeSucceed = (state,action) => {
    return{
        ...state,
        berbayar: action.payload
    }
}
export default bootcampReducer;