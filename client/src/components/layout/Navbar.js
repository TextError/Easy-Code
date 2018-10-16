import React, { Component } from 'react';
import BrandName from '../brand-name/BrandName';
import { Link } from 'react-router-dom';

//Css
import '../../style/Navbar.css';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <BrandName />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item active mr-3">
              <Link to='/home' className='nav-link'><span>Home</span></Link>
            </li>
            <li className="nav-item active mr-3">
              <Link to='/html' className='nav-link'><span>Html</span></Link>
            </li>
            <li className="nav-item active mr-3">
              <Link to='/contact' className='nav-link'><span>Contact</span></Link>
            </li>
            <li className="nav-item active mr-3">
              <Link to='/register' className='nav-link'><span>Register</span></Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
          <input 
            className="form-control mr-sm-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            autoComplete='off'
          />
          <button 
            className="btn btn-outline-success my-2 my-sm-0 search" 
            type="submit"
          >Search</button>
        </form>
        </div>
      </nav>
    )
  }
}

export default Navbar;
