import React, { Component } from 'react';
import BrandName from '../brand-name/BrandName';
import { Link } from 'react-router-dom';

//CSS
import '../../style/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='row align-items-center text-center'>
          <div className='col-sm-3 col'>
            <BrandName />
          </div>
          <div className='col-sm-6 col footer-links'>
            <span>
              <Link to={'/'} target='_blank'>
                <i className='fab fa-facebook-f fa-2x'></i>
              </Link>
            </span>
            <span>
              <Link to={'/'} target='_blank'>
                <i className='fab fa-twitter fa-2x'></i>
              </Link>
            </span>
            <span>
              <Link to={'/'} target='_blank'>
                <i className='fab fa-instagram fa-2x'></i>
              </Link>
            </span>
            <span>
              <Link to={'/'} target='_blank'>
                <i className='fab fa-linkedin-in fa-2x'></i>
              </Link>
            </span>
          </div>
          <div className='col-sm-3 col'>
            <p className='mb-0'>Copyright &copy; {new Date().getFullYear()} DevConnector</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
