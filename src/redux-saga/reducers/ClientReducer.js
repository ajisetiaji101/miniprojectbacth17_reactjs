import * as ActionType from '../constants/Client'

const INIT_STATE = {
    clients: [],
}

const ClientReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_CLIENT_REQUEST: {
            return {
                ...state,
            }
        }
        case ActionType.GET_CLIENT_SUCCEED: {
            return applyGetClientSucceed(state, action)
        }


        default:
            return state;
    }
}

const applyGetClientSucceed = (state, action) => {

    return {
        ...state,
        clients: action.payload,

    }
}
export default ClientReducer;