import * as ActionType from '../constants/AddPlacementsCons'

export const AddPlacementsRequest = (payload) =>({
    type:ActionType.ADD_PLACEMENTS_REQUEST,
    payload
})

export const AddPlacementsSuccess = (payload) =>({
    type:ActionType.ADD_PLACEMENTS_SUCCESS,
    payload
})

export const AddPlacementsFailed = (payload) =>({
    type:ActionType.ADD_PLACEMENTS_FAILED,
    payload
})

export const GetPlacementsRequest = () =>({
    type : ActionType.GET_PLACEMENTS_REQUEST
})

export const GetPlacementsSuccess = (payload) =>({
    type: ActionType.GET_PLACEMENTS_SUCCESS,
    payload
})

export const GetPlacementsFailed = (payload) =>({
    type:ActionType.GET_PLACEMENTS_FAILED,
    payload
})

export const GetClientRequest = () =>({
    type : ActionType.GET_CLIENT_REQUEST
})

export const GetClientSuccess = (payload) =>({
    type: ActionType.GET_CLIENT_SUCCESS,
    payload
})

export const GetClientFailed = (payload) =>({
    type:ActionType.GET_CLIENT_FAILED,
    payload
})