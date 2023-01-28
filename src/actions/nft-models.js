import api from '../utils/api';
import {
  GET_NFT_MODELS_REQUEST,
  GET_NFT_MODEL_REQUEST,
  POST_NFT_MODEL_REQUEST,
  GET_NFT_MODELS_REQUEST_ERROR,
  GET_NFT_MODEL_REQUEST_ERROR,
  POST_NFT_MODEL_REQUEST_ERROR
} from './types';


export const postNftModelRequest = formData => async dispatch => {
  try {
    const res = await api.post('/nft-model', formData);

    dispatch({
      type: POST_NFT_MODEL_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_NFT_MODEL_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}


export const getNftModelsRequest = () => async dispatch => {
  try {
    const res = await api.get('/nft-models');

    dispatch({
      type: GET_NFT_MODELS_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_NFT_MODELS_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

export const getNftModelRequest = id => async dispatch => {
  try {
    const res = await api.get(`/nft-model/${id}`);
    
    dispatch({
      type: GET_NFT_MODEL_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_NFT_MODEL_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
