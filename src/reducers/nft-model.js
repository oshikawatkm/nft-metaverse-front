import {
  NFT_MODEL_LOADING,
  GET_NFT_MODELS_REQUEST,
  GET_NFT_MODEL_REQUEST,
  POST_NFT_MODEL_REQUEST,
  GET_NFT_MODELS_REQUEST_ERROR,
  GET_NFT_MODEL_REQUEST_ERROR,
  POST_NFT_MODEL_REQUEST_ERROR
} from '../actions/types';

const initialState = {
  nftModels: [],
  nftModel: null,
  loading: true,
  error: {}
};


function nftModelReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case NFT_MODEL_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_NFT_MODEL_REQUEST:
      return {
        ...state,
        nftModel: payload,
        loading: false
      };
    case GET_NFT_MODELS_REQUEST:
      return {
        ...state,
        nftModels: payload,
        loading: false
      };
    case GET_NFT_MODEL_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case GET_NFT_MODELS_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case POST_NFT_MODEL_REQUEST:
      return {
        ...state,
        nftModel: payload,
        loading: false
      };
    case POST_NFT_MODEL_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default nftModelReducer;