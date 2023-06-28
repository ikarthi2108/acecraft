import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Navbar.css';

function Navbar() {
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
      </nav>
    </div>
  );
}

export default Navbar;
