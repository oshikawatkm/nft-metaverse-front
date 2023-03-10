import {
  USER_LOADED,
  MODEL_CONVERTER_LOADED,
  AUTH_ERROR,
  USER_LOGIN_SUCCESS,
  MODEL_CONVERTER_LOGIN_SUCCESS,
  USER_LOGOUT,
  MODEL_CONVERTER_LOGOUT
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  modelConverter: null
};


function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case MODEL_CONVERTER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        modelConverter: payload
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case MODEL_CONVERTER_LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case AUTH_ERROR:
    case USER_LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    case MODEL_CONVERTER_LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        modelConverter: null
      };
    default:
      return state;
  }
}

export default authReducer;