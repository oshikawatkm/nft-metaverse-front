import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOrderRequest, commissionOrderRequest, completeOrderRequest } from '../../actions/orders';
import { Link } from "react-router-dom";
import Spinner from '../layout/Spinner';

const Order = ({ getOrderRequest, order: { order, loading }, match })  => {
  useEffect(() => {
    getOrderRequest(match.params.id);
  }, [getOrderRequest, match.params.id])

  const commitOrder = (id) => {
    commissionOrderRequest(id);
  }

  const completeOrderRequest = (id) => {
    completeOrderRequest(id);
  }

  const RenderButton = ( status ) => {
    if (status == 1) {
      return (
        <button className="btn btn-warning mt-4" onClick={commitOrder(match.params.id)}>
          Commit Order
        </button>
      )
    } else if (status == 2) {
      return (
        <button className="btn btn-success mt-4" onClick={completeOrderRequest(match.params.id)}>
          Complete Order
        </button>
      )
    }
  }

  return loading || order === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className="content-header">
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Order Details</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><Link to="/orders">Order List</Link></li>
                  <li className="breadcrumb-item active">Order Details</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Order Details</h3>
                </div>
                
                <div className="card-body table-responsive p-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <p className="mb-0">TokenId</p>
                        <p className="h3">{order.tokenId}</p>
                      </div>
        
                      <div className="col-12">
                        <p className="mb-0 pt-4">Reward Wei</p>
                        <p className="h3">{order.rewardWei}</p>
                      </div>

                      <div className="col-12">
                        <p className="mb-0 pt-4">Format</p>
                        <p className="h3">{order.format}</p>
                      </div>


                      <div className="col-12">
                        <p className="mb-0 pt-4">Status</p>
                        <p className="h3">{order.status}</p>
                      </div>

                      <div className="col-12">
                        <p className="mb-0 pt-4">Created At</p>
                        <p className="h3">{order.createdAt}</p>
                      </div>

                      <div className="col-12">
                        <p className="mb-0 pt-4">UpdatedAt</p>
                        <p className="h3">{order.updatedAt}</p>
                      </div>

                      <div className="col-12 text-center">
                        {RenderButton(order.status)}
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
    )
}


Order.propTypes = {
  getOrderRequest: PropTypes.func.isRequired,
  commissionOrderRequest: PropTypes.func.isRequired,
  completeOrderRequest: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  order: state.order
})

export default connect(mapStateToProps, { getOrderRequest, commissionOrderRequest, completeOrderRequest })(Order);