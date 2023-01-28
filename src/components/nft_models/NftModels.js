import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NftModelItem from './NftModelItem';
import { getNftModelsRequest } from '../../actions/nft-models';
import { Link } from 'react-router-dom';

const NftModels = ({ getNftModelsRequest, nftModel: { nftModels } }) => {
  useEffect(() => {
    getNftModelsRequest();
  }, [getNftModelsRequest])

  return (
    <Fragment>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row my-3">
          <div className="col-sm-2"></div>
            <div className="col-sm-4">
              <h1>VCスキーマ一覧</h1>
            </div>
            <div className="col-sm-5">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">ホーム</Link></li>
                <li className="breadcrumb-item active">VCスキーマ一覧</li>
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
            <Link to="/vc_schema/new" className="btn btn-primary mb-3">
              <i className="far fa-circle nav-icon"></i> 新規VCスキーマ登録
            </Link>
            </div>
            <div className="col-2"></div>
            <div className="col-9">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">VCスキーマ</h3>
                </div>
                
                <div className="card-body table-responsive p-0">
                  <table className="table table-hover text-nowrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>TokenId</th>
                        <th>Filename</th>
                        <th>File Format</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {nftModels.map((nftModel, index) => (
                        <NftModelItem key={nftModel.id} nftModel={nftModel} index={index+1}/>
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


NftModels.propTypes = {
  getNftModelsRequest: PropTypes.func.isRequired,
  nftModel: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  nftModel: state.nftModel
})

export default connect(mapStateToProps, { getNftModelsRequest })(NftModels);