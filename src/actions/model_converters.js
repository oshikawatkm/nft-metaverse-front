import api from '../utils/api';
import {
  GET_MODEL_CONVERTERS_REQUEST,
  GET_MODEL_CONVERTER_REQUEST,
  POST_MODEL_CONVERTER_REQUEST,
  LOGIN_MODEL_CONVERTER_REQUEST,
  GET_MODEL_CONVERTERS_REQUEST_ERROR,
  GET_MODEL_CONVERTER_REQUEST_ERROR,
  POST_MODEL_CONVERTER_REQUEST_ERROR,
  LOGIN_MODEL_CONVERTER_REQUEST_ERROR
} from './types';


export const postModelConverterRequest = (formData, navigate) => async dispatch => {
  try {
    const res = await api.post('/model_converters', formData);

    dispatch({
      type: POST_MODEL_CONVERTER_REQUEST,
      payload: res.data
    });

    navigate('/orders')
  } catch (err) {
    dispatch({
      type: POST_MODEL_CONVERTER_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}


export const getModelConvertersRequest = () => async dispatch => {
  try {
    const res = await api.get('/model_converters');
    dispatch({
      type: GET_MODEL_CONVERTERS_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_MODEL_CONVERTERS_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

export const getModelConverterRequest = id => async dispatch => {
  try {
    const res = await api.get(`/model_converters/${id}`);

    dispatch({
      type: GET_MODEL_CONVERTER_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_MODEL_CONVERTER_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

export const loginModelConverterRequest = (formData, navigate) => async dispatch => {
  try {
    const res = await api.post('/model_converters/login', formData);

    dispatch({
      type: LOGIN_MODEL_CONVERTER_REQUEST,
      payload: res.data
    });

    navigate('/orders')
  } catch (err) {
    dispatch({
      type: LOGIN_MODEL_CONVERTER_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
