import { combineReducers } from 'redux';
import user from './user';
import nftModel from './nft-model';
import modelConverter from './model_converter';
import order from './orders';


export default combineReducers({
  user,
  nftModel,
  modelConverter,
  order
});