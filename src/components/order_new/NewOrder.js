import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { postOrderRequest } from '../../actions/orders';


class NewOrder extends Component {
  constructor() {
    super();
    this.state = {
      tokenId: 0,
      rewardWei: 0,
      format: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();
    const formData= {
      tokenId: this.state.tokenId,
      rewardWei: this.state.rewardWei,
      password: this.state.password,
    }

    await this.props.postUserRequest(formData);
    this.props.history.push('/users')
  }

  render() {
    const { errors } = this.state;

    return (
      <Fragment>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row my-3">
              <div className="col-sm-2"></div>
              <div className="col-sm-4">
                <h1>新規ユーザー登録</h1>
              </div>
              <div className="col-sm-5">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">ホーム</Link></li>
                <li className="breadcrumb-item"><Link to="/users">ユーザー一覧</Link></li>                  <li className="breadcrumb-item active">ユーザー新規登録</li>
                </ol>
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
                    <h3 className="card-title">新規ユーザー登録</h3>
                  </div>
                  
                  <div className="card-body table-responsive p-0">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="text-center my-5">新規ユーザー登録</h2>
                          <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                              <label for="tokenIdInput">TokenId</label>
                              <input
                                name="tokenId"
                                type="number"
                                className="form-control"
                                id="tokenIdInput"
                                required={true}
                                value={this.state.tokenId} 
                                onChange={this.onChange} 
                                error={errors.tokenId}
                              />
                            </div>
                            <div className="form-group">
                              <label for="rewardWeiInput">Reward Wei</label>
                              <input
                                name="rewardWei"
                                type="number"
                                className="form-control"
                                id="rewardWeiInput"
                                required={true}
                                value={this.state.rewardWei} 
                                onChange={this.onChange} 
                                error={errors.rewardWei}
                              />
                            </div>
                            <div className="form-group">
                              <label for="formatInput">Format</label>
                              <input
                                name="format"
                                className="form-control"
                                id="formatInput"
                                value={this.state.format} 
                                onChange={this.onChange} 
                                error={errors.format}
                              />
                            </div>
                           
                            <button type="submit" className="btn btn-primary btn-block my-5">登録</button>
                          </form>
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
}


NewOrder.propTypes = {
  postOrderRequest: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { postOrderRequest })(withRouter(NewOrder));