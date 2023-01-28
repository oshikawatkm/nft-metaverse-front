import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrderItem from './OrderItem';
import { getOrdersRequest } from '../../actions/orders';
import { Link } from 'react-router-dom';

const Orders = ({ getOrdersRequest, order: {orders}  })  => {
  useEffect(() => {
    getOrdersRequest();
  }, [getOrdersRequest])

  return (
    <Fragment>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-2"></div>
            <div className="col-sm-4">
              <h1>VC一覧</h1>
            </div>
            <div className="col-sm-5">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">ホーム</Link></li>
                <li className="breadcrumb-item active">Orders</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
              <Link to="/vc/new" className="btn btn-primary mb-3">
                <i className="far fa-circle nav-icon"></i> Orders
              </Link>
            </div>
            <div className="col-2"></div>
            <div className="col-9">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Orders</h3>
                </div>
                
                <div className="card-body table-responsive p-0">
                  <table className="table table-hover text-nowrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Reward Wei</th>
                        <th>User Name</th>
                        <th>Format</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => (
                        <OrderItem key={order.id} order={order} index={index+1}/>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
    )
}


Orders.propTypes = {
  getOrdersRequest: PropTypes.func.isRequired,
  vc: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  vc: state.vc
})

export default connect(mapStateToProps, { getOrdersRequest })(Orders);