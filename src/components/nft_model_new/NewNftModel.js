import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { postNftModelRequest } from '../../actions/nft-models';


class NewNftModel extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      copyright: '',
      format: '',
      description: '',
      file: null,
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
      name: this.state.name,
      copyright: this.state.copyright,
      format: this.state.format,
      description: this.state.description,
      file: this.state.file
    }

    await this.props.postNftModelRequest(formData);
    this.props.history.push('/nft_models/1')
  }

  fileUpload = (e) => {
    this.state.file = e.target.files[0];
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
                <h1>New 3D Model</h1>
              </div>
              <div className="col-sm-5">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/nft_models">3D Model List</Link></li>                  <li className="breadcrumb-item active">New 3D Model</li>
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
                  
                  <div className="card-body table-responsive p-0">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="text-center my-5">New 3D Model</h2>
                          <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                              <label for="nameInput">Name</label>
                              <input
                                placeholder="name"
                                name="name"
                                className="form-control"
                                id="nameInput"
                                required={true}
                                value={this.state.name} 
                                onChange={this.onChange} 
                                error={errors.name}
                              />
                            </div>

                            <div className="form-group">
                              <label for="copyrightInput">Copyright</label>
                              <input
                                placeholder="copyright"
                                name="copyright"
                                className="form-control"
                                id="copyrightInput"
                                required={true}
                                value={this.state.copyright} 
                                onChange={this.onChange} 
                                error={errors.copyright}
                              />
                            </div>

                            <div className="form-group">
                              <label for="formatInput">Format</label>
                              <input
                                placeholder=".format"
                                name="format"
                                className="form-control"
                                id="formatInput"
                                required={true}
                                value={this.state.format} 
                                onChange={this.onChange} 
                                error={errors.format}
                              />
                            </div>

                            <div className="form-group">
                              <label for="descriptionInput">Description</label>
                              <input
                                placeholder="description"
                                name="description"
                                className="form-control"
                                id="descriptionInput"
                                required={true}
                                value={this.state.description} 
                                onChange={this.onChange} 
                                error={errors.description}
                              />
                            </div>

                            <p className="mt-4 mb-0">3D Model File</p>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                              </div>
                              <div className="custom-file">
                                <input 
                                  type="file" 
                                  className="custom-file-input" 
                                  ref="upload"
                                  id="inputGroupFile01" 
                                  aria-describedby="inputGroupFileAddon01" 
                                  required={true}
                                  name="file"
                                  value={this.state.file} 
                                  onChange={this.fileUpload} 
                                />
                                <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                              </div>
                            </div>
                           
                            <button type="submit" className="btn btn-primary btn-block my-5">Mint Model NFT</button>
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


NewNftModel.propTypes = {
  postNftModelRequest: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { postNftModelRequest })(withRouter(NewNftModel));