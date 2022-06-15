import * as ActionType from '../constants/AppCurriculum'

export const doGetCurriculumRequest =()=>({
    type : ActionType.GET_CURRICULUM_REQUEST
})

export const doGetCurriculumSucceed =(payload)=>({
    type : ActionType.GET_CURRICULUM_SUCCEED,
    payload
})

export const doGetCurriculumFailed =(payload)=>({
    type : ActionType.GET_CURRICULUM_FAILED,
    payload
})

export const doGetCurriculumIdRequest =(payload)=>({
    type : ActionType.GET_CURRICULUM_ID_REQUEST,
    payload
})

export const doGetCurriculumIdSucceed =(payload)=>({
    type : ActionType.GET_CURRICULUM_ID_SUCCEED,
    payload
})

export const doGetCurriculumIdFailed =(payload)=>({
    type : ActionType.GET_CURRICULUM_ID_FAILED,
    payload
})

export const doAddCurriculumRequest = (payload) => ({
    type: ActionType.ADD_CURRICULUM_REQUEST,
    payload,
});

export const doAddCurriculumSucceed = (payload) => ({
    type: ActionType.ADD_CURRICULUM_SUCCEED ,
    payload,
});

export const doAddCurriculumFailed = (payload) => ({
    type: ActionType.ADD_CURRICULUM_FAILED ,
    payload,
});
export const doEditCurriculumStatusRequest = (payload) => ({
    type: ActionType.EDIT_CURRICULUM_STATUS_REQUEST,
    payload,
});

export const doEditCurriculumStatusSucceed = (payload) => ({
    type: ActionType.EDIT_CURRICULUM_STATUS_SUCCEED ,
    payload,
});

export const doEditCurriculumStatusFailed = (payload) => ({
    type: ActionType.EDIT_CURRICULUM_STATUS_FAILED ,
    payload,
});

export const doEditCurriculumRequest = (payload) => ({
    type: ActionType.EDIT_CURRICULUM_REQUEST,
    payload,
});

export const doEditCurriculumSucceed = (payload) => ({
    type: ActionType.EDIT_CURRICULUM_SUCCEED ,
    payload,
});

export const doEditCurriculumFailed = (payload) => ({
    type: ActionType.EDIT_CURRICULUM_FAILED ,
    payload,
});

export const doDeleteCurriculumRequest = (payload) => ({
    type: ActionType.DELETE_CURRICULUM_REQUEST,
    payload,
});

export const doDeleteCurriculumSucceed = (payload) => ({
    type: ActionType.DELETE_CURRICULUM_SUCCEED,
    payload,
});

export const doDeleteCurriculumFailed = (payload) => ({
    type: ActionType.DELETE_CURRICULUM_FAILED,
    payload,
});