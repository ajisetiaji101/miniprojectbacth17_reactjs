import * as ActionType from "../constants/Instructor";

const INIT_STATE = {
    instructor: [],
    isLoading: false,
};

// tabel
const InstructorReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_INSTRUCTOR_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case ActionType.GET_INSTRUCTOR_SUCCEED:
            return applyGetInstructorSucceed(state, action);
        default:
            return state;
    }
};

const applyGetInstructorSucceed = (state, action) => {
    return {
        ...state,
        instructor: action.payload,
        isLoading: false,
    };
};

export default InstructorReducer;
