import * as actionTypes from "./user-types";

const INITIAL_STATE = { Login_status: false, token: "", userObj: "" };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN: {
      return { ...state, Login_status: true };
    }
    case actionTypes.LOG_OUT: {
      return { ...state, Login_status: false, token: "", userObj: "" };
    }
    case actionTypes.SET_TOKEN: {
      return { ...state, token: action.payload.token };
    }
    case actionTypes.SET_USER_DETAILS: {
      return { ...state, userObj: action.payload.userObj };
    }
    default:
      return state;
  }
};

export default userReducer;
