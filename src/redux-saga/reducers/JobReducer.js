import * as ActionType from "../constants/Job";

const INIT_STATE = {
  jobs: [],
  status: {},
  isLoading: false,
  isRefresh: false,
};

const JobReducer = (state = INIT_STATE, action) => {
  switch (action.type) {

    case ActionType.GET_JOB_REQUEST:
      return {
        ...state,
        status: "",
        isLoading: true,

      };

    case ActionType.GET_JOB_SUCCEED: {
      return GetJobSucceed(state, action);
    }

    case ActionType.ADD_JOB_REQUEST: {
      return {
        ...state,
        status: "",
      };
    }

    case ActionType.ADD_JOB_SUCCEED: {
      return GetAddJobSucceed(state, action);
    }

    case ActionType.DELETE_JOB_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isRefresh: false,
      };
    }
    case ActionType.DELETE_JOB_SUCCEED: {
      return applyDeleteJobSucceed(state, action);
    }
    case ActionType.EDIT_JOB_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isRefresh: false,
      };
    }
    case ActionType.EDIT_JOB_SUCCEED: {
      return applyEditJobSucceed(state, action);
    }

    case ActionType.GET_JOB_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_JOB_ID_SUCCEED:
      return applyGetJobIdSucceed(state, action);

    default:
      return state;
  }
};

const GetJobSucceed = (state, action) => {
  return {
    ...state,
    jobs: action.payload,
    isLoading: false,
    isRefresh: false
  };
};

const GetAddJobSucceed = (state, action) => {
  const hasil = action.payload;
  return {
    ...state,
    jobs: hasil,
    status: hasil,
    isLoading: false,
    isRefresh: false
  };
};

const applyGetJobIdSucceed = (state, action) => {
  const hasil = action.payload;
  return {
    ...state,
    jobs: hasil,
    status: hasil,
    isLoading: false,
    isRefresh: false
  };
};

const applyDeleteJobSucceed = (state, action) => {
  const { payload } = action;
  const filterJob = state.jobs.filter((el) => el.jobs_id !== payload);
  return {
    ...state,
    jobs: [...filterJob],
  };
};

// const applyEditJobSucceed = (state, action) => {
//   const { payload } = action;
//   const filterJob = state.jobs.filter((el) => el.jobs_id !== payload);
//   return {
//     ...state,
//     jobs: [...filterJob],
//   };
// };

const applyEditJobSucceed = (state, action) => {
  return {
    ...state,
    // talent: action.payload,
    jobs: action.payload,
    isLoading: false,
    isRefresh: false,
  };
};

export default JobReducer;