import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="main-nav row mb-4">
        
        <div className="col-md-6 pb-2">
          <Link to="/register_user" className="program-card card bg-primary text-white text-center">
            <div className="card-body">
              <i className="fas fa-money-bill-wave fa-3x" />
              <h4>Sign Up As User</h4>
              <p className="list-link">ユーザーとして登録</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 pb-2">
          <Link to="/register_model_converter" className="program-card card border-primary text-center">
            <div className="card-body">
              <i className="fas fa-file text-primary fa-3x" />
              <h4 className="text-primary">Sign Up As Model Converter</h4>
              <p className="card-content text-muted">3Dモデル変換者として登録</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 pb-2">
          <Link to="/login_user" className="program-card card bg-primary text-white text-center">
            <div className="card-body">
              <i className="fas fa-money-bill-wave fa-3x" />
              <h4>Sign In As User</h4>
              <p className="list-link">ユーザーとして登録</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 pb-2">
          <Link to="/login_model_converter" className="program-card card border-primary text-center">
            <div className="card-body">
              <i className="fas fa-file text-primary fa-3x" />
              <h4 className="text-primary">Sign In As Model Converter</h4>
              <p className="card-content text-muted">3Dモデル変換者として登録</p>
            </div>
          </Link>
        </div>

      </div>
  );
};

export default Home;