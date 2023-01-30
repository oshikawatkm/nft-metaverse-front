import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNftModelRequest } from '../../actions/nft-models';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import timestampToTime from '../../utils/timeFormater'
import EventItem from './EventItem';


const NftModel = ({ getNftModelRequest, nftModel: { nftModel, loading }, match })  => {
  useEffect(() => {
    getNftModelRequest(match.params.id);
  }, [getNftModelRequest, match.params.id])

  return loading || nftModel === null ? (
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
                    <Link to={`/order/new`}  className="btn btn-primary">New Order</Link>
                  </div>
                </div>
                
                <div className="card-body table-responsive p-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <p className="mb-0">Name</p>
                        <p className="h3">{nftModel.name}</p>
                      </div>

                      <div className="col-12">
                        <p className="mb-0 pt-4">TokenId</p>
                        <p className="h3">{nftModel.tokenId}</p>
                      </div>
        
                      <div className="col-12">
                        <p className="mb-0 pt-4">Filename</p>
                        <p className="h5">{nftModel.filename}</p>
                      </div>

                      <div className="col-12">
                        <p className="mb-0 pt-4">File Format</p>
                        <p className="h3">{nftModel.format}</p>
                      </div>

                    </div>
                    <div className="col-12">
                      <p className="mt-3">CreatedAt: {timestampToTime(nftModel.createdAt)}</p>
                      <p className="mt-3">UpdatedAt: {timestampToTime(nftModel.updatedAt)}</p>
                    </div>

                    <h3 className="mt-5">Convert History</h3>
                    <div className="card-body table-responsive p-0">
                      <table className="table table-hover text-nowrap">
                        <thead>
                          <tr>
                            <th>Old URI</th>
                            <th></th>
                            <th>New URI</th>
                          </tr>
                        </thead>
                        <tbody>
                          {nftModel.events.map((event) => (
                            <EventItem key={event.tokenId} event={event}/>
                          ))}
                        </tbody>
                      </table>
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


NftModel.propTypes = {
  getNftModelRequest: PropTypes.func.isRequired,
  nftModel: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  nftModel: state.nftModel
})

export default connect(mapStateToProps, { getNftModelRequest })(NftModel);