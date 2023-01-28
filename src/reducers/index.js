import { combineReducers } from 'redux';
import user from './user';
import nftModel from './nft-model';
import model_converter from './model_converter';
import order from './orders';


export default combineReducers({
  user,
  nftModel,
  model_converter,
  order
});