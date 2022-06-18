import * as ActionType from "../constants/Hiring";

const INIT_STATE = {
  hiringg: [],
  hirings: [],
  city: [],
};

const HiringReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_HIRING_REQUEST:{
      return {
        ...state,
      }
    }
    case ActionType.GET_HIRING_SUCCEED:{
      return applyGetHiringSucceed(state, action)
    }
    case ActionType.GET_HIRING_ID_REQUEST:{
      return {
        ...state,
      }
    }
    case ActionType.GET_HIRING_ID_SUCCEED:{
      return applyGetHiringIdSucceed(state, action);
    }
    case ActionType.GET_HIRING_CITY_REQUEST:{
      return {
        ...state,
      }
    }
    case ActionType.GET_HIRING_CITY_SUCCEED:{
      return applyGetHiringCitySucceed(state, action);
    }
    default:
      return state;
  }
};

const applyGetHiringSucceed = (state, action) => {
  return {
    ...state,
    hiring: action.payload,
  };
};

const applyGetHiringIdSucceed = (state, action) => {
  return {
    ...state,
    hirings: action.payload,
  };
};

const applyGetHiringCitySucceed = (state, action) => {
  return {
    ...state,
    city: action.payload,
  };
};

export default HiringReducer;
