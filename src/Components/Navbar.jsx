import React from 'react';
// import Setting from './Setting .png';
// import Cart from './Cart .png';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
// import { Badge } from 'react-bootstrap';

function Navbar() {
    return (
        <div className='navbarfull fixed-top'>
            <Link className='titlename ' to='/'>
                acecraft
            </Link>
            <nav className='navbar navbar-expand-lg'>
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
                    </div>
                </div>
               
                {/* 
            <div className='d-flex float-right'>
                <div className='setting'>
                    <li className='companymenuli'>
                        <Link className='alisting'>
                            <img src={Setting} width='20px' alt='setting' />
                            <b className='caret'></b>
                        </Link>
                        <ul className='ul'>
                            <li>Sign In</li>
                            <li>Register</li>
                            <li>Order Status</li>
                            <li>Contact</li>
                        </ul>
                    </li>
                </div>

                <div>
                    <button className='btn'>
                        <img src={Cart} width='25px' alt='cart' />
                        <span className='badge'>0</span>
                    </button>
                </div>
            </div> */}

            </nav>


        </div>
    );
}

export default Navbar;
