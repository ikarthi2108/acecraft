import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Navbar.css';
import HoverList from '../Components/HoverList';
import { useCart } from 'react-use-cart';
import { Authentication } from './Auth';

function Navbar() {
  const { totalUniqueItems } = useCart();
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleCartClick = () => {
    if (Authentication.isAuthenticated) {
      navigate('/cart');
    } else {
      navigate('/SignIn');
    }
  };

  return (
    <div className="navbarfull fixed-top">
      <Link className="titlename" to="/acecraft">
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
      </nav>
      <div
        className="setting"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="ml-4">
          <Link className="nav-link">
            <FontAwesomeIcon icon={faCog} size="2x" />
          </Link>
        </div>
        <div>
          <Link
            className="nav-link shoppingCart"
            to="/cart"
            onClick={handleCartClick}
          >
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            <span className="badge">{totalUniqueItems}</span>
          </Link>
        </div>
      </div>
      {isHovering && (
        <div className="justify-content-end d-flex settings">
          <HoverList />
        </div>
      )}
    </div>
  );
}

export default Navbar;
