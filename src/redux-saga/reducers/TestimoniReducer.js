import * as ActionType from "../constants/Testimoni";

const INIT_STATE = {
    testi: [],
    isLoading: false,
};

// tabel
const TestimoniReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_TESTIMONI_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case ActionType.GET_TESTIMONI_SUCCEED:
            return applyGetTestimoniSucceed(state, action);
        default:
            return state;
    }
};

const applyGetTestimoniSucceed = (state, action) => {
    return {
        ...state,
        testi: action.payload,
        isLoading: false,
    };
};

export default TestimoniReducer;
