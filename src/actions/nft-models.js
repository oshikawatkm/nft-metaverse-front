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
    const headers = { "Content-Type": "multipart/form-data" };
    const res = await api.post('/nft-models', formData, {headers});

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
    console.log(res)
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
    
    const res = await api.get(`/nft-models/${id}`);
    
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
