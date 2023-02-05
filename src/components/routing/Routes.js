
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../home/Home';
import NotFound from '../layout/NotFound';
import RegisterUser from "../register_user/RegisterUser";
import LoginUser from "../login_user/LoginUser";
import RegisterModelConverter from "../register_model_converter/RegisterModelConverter";
import LoginModelConverter from "../login_model_converter/LoginModelConverter";
import NftModel from "../nft_model/NftModel";
import NewNftModel from "../nft_model_new/NewNftModel";
import NftModels from "../nft_models/NftModels";
import Orders from "../orders/Orders";
import Order from "../order/Order";
import NewOrder from "../order_new/NewOrder";
import OrderCommission from "../order_commission/OrderCommission";
import OrderComplete from "../order_complete/OrderComplete";
import ModelConverter from '../model_converter/ModelConverter';
import User from '../user/User';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Fragment>
      <section className="bg-light p-5">
        <div className="container">
          <h1 className="display-5 text-center py-5">NFT Metaverse</h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register_user" component={RegisterUser} />
            <Route exact path="/register_model_converter" component={RegisterModelConverter} />
            <Route exact path="/login_user" component={LoginUser} />
            <Route exact path="/login_model_converter" component={LoginModelConverter} />
            <Route 
              path="/users/:id" 
              element={<PrivateRoute component={User} />} 
            />
            <Route exact path="/model_converters/:id" component={ModelConverter} />
            <Route 
              path="/nft_model/new" 
              element={<PrivateRoute component={NewNftModel} />} 
             />
            <Route 
              path="/nft_models" 
              element={<PrivateRoute component={NftModels} />} 
            />
            <Route 
              path="/nft_models/:id" 
              element={<PrivateRoute component={NftModel} />}
            />
            <Route 
              path="/orders" 
              element={<PrivateRoute component={Orders} />}
            />
            <Route
              path="/orders/:id" 
              element={<PrivateRoute component={Order} />}
            />
            <Route
              path="/order/new" 
              element={<PrivateRoute component={NewOrder} />}
            />
            <Route 
              path="/orders/:id/commission" 
              element={<PrivateRoute component={OrderCommission} />}
            />
            <Route 
              path="/orders/:id/complete" 
              element={<PrivateRoute component={OrderComplete} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </section>
    </Fragment>
  );
};

export default Routes;