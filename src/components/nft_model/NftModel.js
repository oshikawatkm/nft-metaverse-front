import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNftModelRequest } from '../../actions/nft-models';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import timestampToTime from '../../utils/timeFormater'


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
                  <div class="card-tools ml-auto">
                    <Link to={`/nft_models/${match.params.id}/vc_issue`}  className="btn btn-primary">New Order</Link>
                  </div>
                </div>
                
                <div className="card-body table-responsive p-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-8">
                        <p className="mb-0">Name</p>
                        <p className="h3">{nftModel.name}</p>
                      </div>

                      <div className="col-8">
                        <p className="mb-0 pt-4">TokenId</p>
                        <p className="h3">{nftModel.tokenId}</p>
                      </div>
        
                      <div className="col-8">
                        <p className="mb-0 pt-4">Filename</p>
                        <p className="h3">{nftModel.filename}</p>
                      </div>

                      <div className="col-8">
                        <p className="mb-0 pt-4">File Format</p>
                        <p className="h3">{nftModel.format}</p>
                      </div>

                    </div>
                    <div className="row">
                    <div className="col-6">
                        <p className="mt-3">更新日: {timestampToTime(nftModel.updatedAt)}</p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3">作成日: {timestampToTime(nftModel.createdAt)}</p>
                      </div>
                    </div>
                    {/* {vcSchema.vcSchemaProperties.map((schema) => 
                      <>
                        <hr className="my-2" />
                        <div className="row">
                          <div className="col-6">
                            <p className="mb-0 pt-2">項目名</p>
                            <p className="h4">{schema.propName}</p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0 pt-2">項目値型</p>
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


NftModel.propTypes = {
  getNftModelRequest: PropTypes.func.isRequired,
  nftModel: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  nftModel: state.nftModel
})

export default connect(mapStateToProps, { getNftModelRequest })(NftModel);