import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import { getUsersRequest } from '../../actions/users';
import { Link } from 'react-router-dom';


const Users = ({ getUsersRequest, user: { users } })  => {
  useEffect(() => {
    getUsersRequest();
  }, [getUsersRequest])

  return (
    <Fragment>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row my-3">
          <div className="col-sm-2"></div>
            <div className="col-sm-4">
              <h1>ユーザー一覧</h1>
            </div>
            <div className="col-sm-5">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">ホーム</Link></li>
                <li className="breadcrumb-item active">ユーザー一覧</li>
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
            <Link to="/user/new" className="btn btn-primary mb-3 mr-3">
              <i className="far fa-circle nav-icon"></i>新規ユーザー登録
            </Link>
            <Link to="/user/new" className="btn btn-warning mb-3">
              <i className="far fa-circle nav-icon"></i> ユーザーCSVインポート
            </Link>
          </div>
          <div className="col-2"></div>
          <div className="col-9">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">ユーザー一覧</h3>
              </div>
              
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>名前</th>
                      <th>メールアドレス</th>
                      <th>Status</th>
                      <th>作成日</th>
                      <th>最終更日</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <UserItem key={user.id} user={user} index={index+1}/>
                    ))}
                  </tbody>
                  </table>
                </div>
  
                <div className="card-footer clearfix">
                  <ul className="pagination pagination-sm m-0 float-right">
                  <li className="page-item"><a className="page-link" href="#">«</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">»</a></li>
                  </ul>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
    )
}


Users.propTypes = {
  getUsersRequest: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, { getUsersRequest })(Users);