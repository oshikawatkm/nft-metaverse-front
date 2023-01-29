import {
  MODEL_CONVERTER_LOADING,
  GET_MODEL_CONVERTERS_REQUEST,
  GET_MODEL_CONVERTER_REQUEST,
  POST_MODEL_CONVERTER_REQUEST,
  GET_MODEL_CONVERTERS_REQUEST_ERROR,
  GET_MODEL_CONVERTER_REQUEST_ERROR,
  POST_MODEL_CONVERTER_REQUEST_ERROR
} from '../actions/types';

const initialState = {
  modelConverters: [],
  modelConverter: null,
  loading: true,
  error: {}
};


function model_converterReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case MODEL_CONVERTER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_MODEL_CONVERTER_REQUEST:
      return {
        ...state,
        modelConverter: payload,
        loading: false
      };
    case GET_MODEL_CONVERTERS_REQUEST:
      return {
        ...state,
        modelConverters: payload,
        loading: false
      };
    case GET_MODEL_CONVERTER_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case GET_MODEL_CONVERTERS_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case POST_MODEL_CONVERTER_REQUEST:
      return {
        ...state,
        modelConverter: payload,
        loading: false
      };
    case POST_MODEL_CONVERTER_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default model_converterReducer;