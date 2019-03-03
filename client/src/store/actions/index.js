import axios from 'axios';
// export CONSTANT_VARIABLES here
export const CHANGE_BUTTON_COLOR = 'CHANGE_BUTTON_COLOR';
export const REGISTER_LOADING = 'REGISTER_LOADING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const JOKES_LOADING = 'JOKES_LOADING';
export const JOKES_SUCCESS = 'JOKES_SUCCESS';
export const JOKES_FAIL = 'JOKES_FAIL';

const baseUrl = 'http://localhost:3300/api';
const config = {
  headers: {
    Authorization: localStorage.token
  }
};

// export const action () => ({})
export const register = ({ username, password }) => dispatch => {
  dispatch({
    type: REGISTER_LOADING
  });
  axios
    .post(`${baseUrl}/register`, { username, password })
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS
      });
    })
    .catch(() => {
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

export const login = ({ username, password }) => dispatch => {
  dispatch({
    type: LOGIN_LOADING
  });
  axios
    .post(`${baseUrl}/login`, { username, password })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: LOGIN_SUCCESS
      });
    })
    .catch(() => {
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

export const getJokes = () => dispatch => {
  dispatch({
    type: JOKES_LOADING
  });
  axios
    .get(`${baseUrl}/jokes`, config)
    .then(res => {
      dispatch({
        type: JOKES_SUCCESS,
        payload: res.data
      });
    })
    .catch(() => {
      dispatch({
        type: JOKES_FAIL
      });
    });
};
