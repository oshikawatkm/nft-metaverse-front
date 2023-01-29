

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav id="main-nav" className="main-nav navbar navbar-expand-sm navbar-dark bg-white fixed-top">
      <Link to="/" className="navbar-brand text-dark">NFT Metaverse</Link>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon">
          <i className="fas fa-bars"/>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/nft_models" className="nav-link text-secondary"><i className="fas fa-home" /> NFT 3D Models</Link>
          </li>
          <li className="nav-item active">
            <Link to="/nft_model/new" className="nav-link text-secondary"><i className="fas fa-cog" /> Upload 3D Model</Link>
          </li>
          <li className="nav-item active">
            <Link to="/orders" className="nav-link text-secondary"><i className="fas fa-money-bill-wave" /> Orders</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;