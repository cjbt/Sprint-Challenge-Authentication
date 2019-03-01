// import CONSTANT_VARIABLE from actions
import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS
} from '../actions';

const initialState = {
  jokes: [],
  registerLoading: false,
  registerSuccess: false,
  registerFail: false,
  loginLoading: false,
  loginSuccess: false,
  loginFail: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        ...state,
        registerLoading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: true,
        registerLoading: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registerFail: true,
        registerLoading: false
      };
    case LOGIN_LOADING:
      return {
        ...state,
        loginLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: true,
        loginLoading: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginFail: true,
        loginLoading: false
      };
    default:
      return state;
  }
}
