// import CONSTANT_VARIABLE from actions
import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  JOKES_FAIL,
  JOKES_LOADING,
  JOKES_SUCCESS
} from '../actions';

const initialState = {
  jokes: [],
  registerLoading: false,
  registerSuccess: false,
  registerFail: false,
  loginLoading: false,
  loginSuccess: false,
  loginFail: false,
  jokesLoading: false,
  jokesSuccess: false,
  jokesFail: false
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
    case JOKES_LOADING:
      return {
        ...state,
        jokesLoading: true
      };
    case JOKES_SUCCESS:
      return {
        ...state,
        jokesSuccess: true,
        jokesLoading: false,
        jokes: action.payload
      };
    case JOKES_FAIL:
      return {
        ...state,
        jokesFail: true,
        jokesLoading: false
      };
    default:
      return state;
  }
}
