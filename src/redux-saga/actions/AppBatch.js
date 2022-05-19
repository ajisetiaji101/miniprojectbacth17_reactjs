import * as ActionType from '../constants/AppBatch'

export const doGetBatchRequest =()=>({
    type : ActionType.GET_BATCH_REQUEST
})

export const doGetBatchSucceed =(payload)=>({
    type : ActionType.GET_BATCH_SUCCEED,
    payload
})

export const doGetBatchFailed =(payload)=>({
    type : ActionType.GET_BATCH_FAILED,
    payload
})

export const doGetBatchIdRequest =(payload)=>({
    type : ActionType.GET_BATCH_ID_REQUEST,
    payload
})

export const doGetBatchIdSucceed =(payload)=>({
    type : ActionType.GET_BATCH_ID_SUCCEED,
    payload
})

export const doGetBatchIdFailed =(payload)=>({
    type : ActionType.GET_BATCH_ID_FAILED,
    payload
})

export const doAddBatchRequest = (payload) => ({
    type: ActionType.ADD_BATCH_REQUEST,
    payload,
});

export const doAddBatchSucceed = (payload) => ({
    type: ActionType.ADD_BATCH_SUCCEED ,
    payload,
});

export const doAddBatchFailed = (payload) => ({
    type: ActionType.ADD_BATCH_FAILED ,
    payload,
});
export const doEditBatchStatusRequest = (payload) => ({
    type: ActionType.EDIT_BATCH_STATUS_REQUEST,
    payload,
});

export const doEditBatchStatusSucceed = (payload) => ({
    type: ActionType.EDIT_BATCH_STATUS_SUCCEED ,
    payload,
});

export const doEditBatchStatusFailed = (payload) => ({
    type: ActionType.EDIT_BATCH_STATUS_FAILED ,
    payload,
});

export const doEditBatchRequest = (payload) => ({
    type: ActionType.EDIT_BATCH_REQUEST,
    payload,
});

export const doEditBatchSucceed = (payload) => ({
    type: ActionType.EDIT_BATCH_SUCCEED ,
    payload,
});

export const doEditBatchFailed = (payload) => ({
    type: ActionType.EDIT_BATCH_FAILED ,
    payload,
});

export const doDeleteBatchRequest = (payload) => ({
    type: ActionType.DELETE_BATCH_REQUEST,
    payload,
});

export const doDeleteBatchSucceed = (payload) => ({
    type: ActionType.DELETE_BATCH_SUCCEED,
    payload,
});

export const doDeleteBatchFailed = (payload) => ({
    type: ActionType.DELETE_BATCH_FAILED,
    payload,
});