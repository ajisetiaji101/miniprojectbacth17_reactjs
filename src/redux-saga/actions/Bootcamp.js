import * as ActionType from '../constants/Bootcamp'

// Bootcamp
export const doGetBootcampRequest = () =>({
    type : ActionType.GET_BOOTCAMP_REQUEST
})

export const doGetBootcampSuccess = (payload) =>({
    type : ActionType.GET_BOOTCAMP_SUCCESS, 
    payload
})

export const doGetBootcampFailed = (payload) =>({
    type : ActionType.GET_BOOTCAMP_FAILED,
    payload
})

// Regular
export const doGetBootcampIdRequest = () =>({
    type : ActionType.GET_BOOTCAMP_ID_REQUEST
})

export const doGetBootcampIdSuccess = (payload) =>({
    type : ActionType.GET_BOOTCAMP_ID_SUCCESS,
    payload
})

export const doGetBootcampIdFailed = (payload) =>({
    type : ActionType.GET_BOOTCAMP_ID_FAILED,
    payload
})

// Berbayar
export const doGetBootcampTypeRequest = () =>({
    type : ActionType.GET_BOOTCAMP_TYPE_REQUEST
})

export const doGetBootcampTypeSuccess = (payload) =>({
    type : ActionType.GET_BOOTCAMP_TYPE_SUCCESS,
    payload
})

export const doGetBootcampTypeFailed = (payload) =>({
    type : ActionType.GET_BOOTCAMP_TYPE_FAILED,
    payload
})