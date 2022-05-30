import * as ActionType from '../constants/DasboardCons'

const INIT_STATE = {
    talent : [],
    training:[],
    boarding:[],
    idle:[],
    month:[],
    bootcamp:[],
    versus:[],
    pendidikan:[],
    universitas:[],
    jurusan:[]
}

const DasboardReduce=(state = INIT_STATE, action)=>{
    switch (action.type) {
        case ActionType.GET_TALENT_REQUEST:
            return {...state,isLoading: true}
        case ActionType.GET_TALENT_SUCCESS:
            return GetTalentSucceed (state,action)
        case ActionType.GET_TRAINING_REQUEST:
            return {...state,isLoading: true}
        case ActionType.GET_TRAINING_SUCCESS:
            return GetTrainingSucceed (state,action)
        case ActionType.GET_BOARDING_REQUEST:
            return {...state,isLoading: true}
        case ActionType.GET_BOARDING_SUCCESS:
            return GetBoardingSucceed (state,action)
        case ActionType.GET_IDLE_REQUEST:
            return {...state,isLoading: true}
        case ActionType.GET_IDLE_SUCCESS:
            return GetIdleSucceed (state,action)
        case ActionType.GET_MONTH_REQUEST:
            return {...state,isLoading: true}
        case ActionType.GET_MONTH_SUCCESS:
            return GetMonthSucceed (state,action)
        case ActionType.GET_BOOTCAMP_REQUEST:
            return {...state,isLoading: true}
        case ActionType.GET_BOOTCAMP_SUCCESS:
            return GetBootcampSucceed (state,action)
        case ActionType.GET_VERSUS_REQUEST:
            return {...state,isLoading: true}
        case ActionType.GET_VERSUS_SUCCESS:
            return GetVersusSucceed (state,action)
        case ActionType.GET_PENDIDIKAN_REQUEST:
            return {...state,isLoading: true}
        case ActionType.GET_PENDIDIKAN_SUCCESS:
            return GetPendidikanSucceed (state,action)
        case ActionType.GET_UNIVERSITAS_REQUEST:
            return {...state,isLoading: true}
        case ActionType.GET_UNIVERSITAS_SUCCESS:
            return GetUniversitasSucceed (state,action)
        case ActionType.GET_JURUSAN_REQUEST:
            return {...state,isLoading: true}
        case ActionType.GET_JURUSAN_SUCCESS:
            return GetJurusanSucceed (state,action)
        default:
            return state;
    }
}

const GetTalentSucceed = (state,action)=>{
    return {
        ...state,
        talent :action.payload,
        isLoading: false,
        isRefresh: false
    }
}
const  GetTrainingSucceed =(state,action)=>{
    return{
        ...state,
        training :action.payload,
        isLoading: false,
        isRefresh: false
    }
}
const  GetBoardingSucceed =(state,action)=>{
    return{
        ...state,
        boarding :action.payload,
        isLoading: false,
        isRefresh: false
    }
}
const  GetIdleSucceed =(state,action)=>{
    return{
        ...state,
        idle :action.payload,
        isLoading: false,
        isRefresh: false
    }
}
const  GetMonthSucceed =(state,action)=>{
    return{
        ...state,
        month :action.payload,
        isLoading: false,
        isRefresh: false
    }
}
const  GetBootcampSucceed =(state,action)=>{
    return{
        ...state,
        bootcamp :action.payload,
        isLoading: false,
        isRefresh: false
    }
}
const  GetVersusSucceed =(state,action)=>{
    return{
        ...state,
        versus :action.payload,
        isLoading: false,
        isRefresh: false
    }
}
const  GetPendidikanSucceed =(state,action)=>{
    return{
        ...state,
        pendidikan :action.payload,
        isLoading: false,
        isRefresh: false
    }
}
const  GetUniversitasSucceed =(state,action)=>{
    return{
        ...state,
        universitas :action.payload,
        isLoading: false,
        isRefresh: false
    }
}
const  GetJurusanSucceed =(state,action)=>{
    return{
        ...state,
        jurusan :action.payload,
        isLoading: false,
        isRefresh: false
    }
}

export default DasboardReduce