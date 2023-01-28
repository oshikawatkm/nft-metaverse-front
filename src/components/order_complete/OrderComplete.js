import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { completeOrderRequest } from '../../actions/orders';
import { Link } from 'react-router-dom';

const OrderComplete = ({ completeOrderRequest, order: { orders } })  => {
  useEffect(() => {
    completeOrderRequest();
  }, [completeOrderRequest])

  return (
    <Fragment>
      <section className="content-header">
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>DID Details</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">DID Details</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-9">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">DID Details</h3>
                </div>
                
                <div className="card-body table-responsive p-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <p className="mb-0">名前</p>
                        <p className="h3">田中 太郎</p>
                      </div>
        
                      <div className="col-12">
                        <p className="mb-0 pt-4">DID</p>
                        <p className="h3">did:ion:grejoroghiroh33jovdjv</p>
                      </div>

                      <div className="col-12">
                        <p className="mb-0 pt-4">Service Endpoint</p>
                        <p className="h3">https://hogehoge.com</p>
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


OrderComplete.propTypes = {
  completeOrderRequest: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  order: state.order
})

export default connect(mapStateToProps, { completeOrderRequest })(OrderComplete);