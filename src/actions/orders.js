import api from '../utils/api';
import {
  GET_ORDERS_REQUEST,
  GET_ORDER_REQUEST,
  POST_ORDER_REQUEST,
  PUT_ORDER_COMMISION_REQUEST,
  PUT_ORDER_COMPLETE_REQUEST,
  GET_ORDERS_REQUEST_ERROR,
  GET_ORDER_REQUEST_ERROR,
  POST_ORDER_REQUEST_ERROR,
  PUT_ORDER_COMMISION_REQUEST_ERROR,
  PUT_ORDER_COMPLETE_REQUEST_ERROR
} from './types';


export const postOrderRequest = formData => async dispatch => {
  try {
    const res = await api.post('/orders', formData);

    dispatch({
      type: POST_ORDER_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ORDER_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}


export const getOrdersRequest = () => async dispatch => {
  try {
    const res = await api.get('/orders');

    dispatch({
      type: GET_ORDERS_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ORDERS_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

export const getOrderRequest = () => async dispatch => {
  try {
    const res = await api.get('/orders/:id');

    dispatch({
      type: GET_ORDER_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ORDER_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}


export const commissionOrderRequest = formData => async dispatch => {
  try {
    const res = await api.put('/orders/:id/commission', formData);

    dispatch({
      type: PUT_ORDER_COMMISION_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PUT_ORDER_COMMISION_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

export const completeOrderRequest = formData => async dispatch => {
  try {
    const res = await api.put('/orders/:id/complete', formData);

    dispatch({
      type: PUT_ORDER_COMPLETE_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PUT_ORDER_COMPLETE_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}