<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> a7f6a36c802aff7699425260af30a39038d32b86
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Navbar.css';

function Navbar() {
<<<<<<< HEAD
  const [showList, setShowList] = useState(false);

  const handleSettingsIconHover = () => {
    setShowList(true);
  };

  const handleSettingsIconLeave = () => {
    setShowList(false);
  };

  return (
    <div className='navbarfull fixed-top'>
      <Link className='titlename' to='/'>
        acecraft
      </Link>
      <nav className='navbar-expand-lg'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='#'></Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <Link className='nav-link me-5' aria-current='page' to='School'>
                SCHOOL
              </Link>
              <Link className='nav-link me-5' to='College'>
                COLLEGE
              </Link>
              <Link className='nav-link me-5' to='Enterprise'>
                ENTERPRISE
              </Link>
              <Link className='nav-link notes me-5' to='Notes'>
                NOTES
              </Link>
              <Link className='nav-link' id='areamask' to='Airenmask'>
                ARIEN MASK
              </Link>
            </div>

            <div
              className='ml-5 d-flex align-items-center ms-5 mt-n3'
              onMouseEnter={handleSettingsIconHover}
              onMouseLeave={handleSettingsIconLeave}
            >
              <div className='ml-4'>
                <Link className='nav-link '>
                  <FontAwesomeIcon icon={faCog} size='2x' />
                  {showList && (
                    <ul className='list'>
                      <li>
                        <Link to='/signin'>Sign In</Link>
                      </li>
                      <li>
                        <Link to='/signup'>Register</Link>
                      </li>
                      <li>
                        <Link to='/signup'>Order Status</Link>
                      </li>
                      <li>
                        <Link to='/signup'>Contact</Link>
                      </li>
                    </ul>
                  )}
                </Link>
              </div>
              <div>
                <Link className='nav-link ps-5'>
                  <FontAwesomeIcon icon={faShoppingCart} size='2x' />
                </Link>
              </div>
            </div>
          </div>
        </div>
=======
  return (
    <div className="navbarfull fixed-top">
      <Link className="titlename" to="/">
        acecraft
      </Link>
      <nav className="navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link me-5" aria-current="page" to="School">
                SCHOOL
              </Link>
              <Link className="nav-link me-5" to="College">
                COLLEGE
              </Link>
              <Link className="nav-link me-5" to="Enterprise">
                ENTERPRISE
              </Link>
              <Link className="nav-link notes me-5" to="Notes">
                NOTES
              </Link>
              <Link className="nav-link" id="areamask" to="Airenmask">
                ARIEN MASK
              </Link>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end align-items-center">
          <div className="setting me-3">
            <li className="companymenuli">
              <Link className="alisting">
                <FontAwesomeIcon icon={faCog} className="setting-icon" />
                <b className="caret"></b>
              </Link>
              <ul className="ul">
                <li>Sign In</li>
                <li>Register</li>
                <li>Order Status</li>
                <li>Contact</li>
              </ul>
            </li>
          </div>

          <div>
            <button className="btn">
              <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
              <span className="badge">0</span>
            </button>
          </div>
        </div>
>>>>>>> a7f6a36c802aff7699425260af30a39038d32b86
      </nav>
    </div>
  );
}

export default Navbar;
