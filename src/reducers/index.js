import { combineReducers } from 'redux';
import user from './user';
import nft_model from './nft-model';
import model_converter from './model_converter';
import order from './orders';


export default combineReducers({
  user,
  nft_model,
  model_converter,
  order
});