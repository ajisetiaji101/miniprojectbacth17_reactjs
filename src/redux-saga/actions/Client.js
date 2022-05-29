import * as ActionType from '../constants/Client'

export const doGetClientRequest = () => ({
    type: ActionType.GET_CLIENT_REQUEST,
    
})

export const doGetClientSucceed = (payload) => ({
    type: ActionType.GET_CLIENT_SUCCEED,
    payload
})

export const doGetClientFailed = (payload) => ({
    type: ActionType.GET_CLIENT_FAILED,
    payload
})

export const doGetClientIdRequest =(payload)=>({
    type : ActionType.GET_CLIENT_ID_REQUEST,
    payload
})

export const doGetClientIdSucceed =(payload)=>({
    type : ActionType.GET_CLIENT_ID_SUCCEED,
    payload
})

export const doGetClientIdFailed =(payload)=>({
    type : ActionType.GET_CLIENT_ID_FAILED,
    payload
})