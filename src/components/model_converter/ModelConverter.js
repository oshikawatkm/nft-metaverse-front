import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getModelConverterRequest } from '../../actions/model_converters';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import timestampToTime from '../../utils/timeFormater'


const ModelConverter = ({ getModelConverterRequest, modelConverter: { modelConverter, loading }, match })  => {
  useEffect(() => {
    getModelConverterRequest(match.params.id);
  }, [getModelConverterRequest, match.params.id])

  return loading || modelConverter === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col-sm-6">
              <h1>3D NFT Model Details</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/nft_models"> 3D NFT Model List</Link></li>
                <li className="breadcrumb-item active">3D NFT Model Details</li>
              </ol>
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
                  <h3 className="card-title">3D NFT Model Details</h3>
                  <div className="card-tools ml-auto">
                    <Link to={`/nft_models/${match.params.id}/vc_issue`}  className="btn btn-primary">New Order</Link>
                  </div>
                </div>
                
                <div className="card-body table-responsive p-5">
                  <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <p className="mb-0">Name</p>
                        <p className="h3">{modelConverter.name}</p>
                      </div>

                      <div className="col-12">
                        <p className="mb-0 pt-4">Email</p>
                        <p className="h3">{modelConverter.email}</p>
                      </div>
        
                      <div className="col-12">
                        <p className="mb-0 pt-4">DID</p>
                        <p className="h3">{modelConverter.did}</p>
                      </div>

                      <div className="col-12">
                        <p className="mb-0 pt-4">Public Key</p>
                        <p className="h3">{modelConverter.publicKey}</p>
                      </div>

                      <div className="col-12">
                        <p className="mb-0 pt-4">Address</p>
                        <p className="h3">{modelConverter.address}</p>
                      </div>

                      <div className="col-12">
                        <p className="mb-0 pt-4">Balance</p>
                        <p className="h3">{modelConverter.balance} wei</p>
                      </div>

                    </div>
                    <div className="row">
                    <div className="col-6">
                        <p className="mt-3">?????????: {timestampToTime(modelConverter.updatedAt)}</p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3">?????????: {timestampToTime(modelConverter.createdAt)}</p>
                      </div>
                    </div>
                    {/* {vcSchema.vcSchemaProperties.map((schema) => 
                      <>
                        <hr className="my-2" />
                        <div className="row">
                          <div className="col-6">
                            <p className="mb-0 pt-2">?????????</p>
                            <p className="h4">{schema.propName}</p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0 pt-2">????????????</p>
                            <p className="h4">{nftModel.propType}</p>
                          </div>
                        </div>
                      </>
                    )} */}
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


ModelConverter.propTypes = {
  getModelConverterRequest: PropTypes.func.isRequired,
  modelConverter: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  modelConverter: state.modelConverter
})

export default connect(mapStateToProps, { getModelConverterRequest })(ModelConverter);