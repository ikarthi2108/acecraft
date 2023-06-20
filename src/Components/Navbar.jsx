import React from 'react';
import Setting from './Setting .png';
import Cart from './Cart .png';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import { Badge } from 'react-bootstrap';

function Navbar() {
    return (
        <div className='navbarfull fixed-top'>
            <Link className='titlename ' to='#'>
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
                            <Link className='nav-link me-5' aria-current='page' to='#'>
                                SCHOOL
                            </Link>
                            <Link className='nav-link me-5' to='#'>
                                COLLEGE
                            </Link>
                            <Link className='nav-link me-5' to='#'>
                                ENTERPRISE
                            </Link>
                            <Link className='nav-link notes me-5' to='#'>
                                NOTES
                            </Link>
                            <Link className='nav-link' id='areamask' to='#'>
                                ARIEN MASK
                            </Link>
                        </div>
                    </div>
                </div>
                <div>      <img className='settingImage mx-3' sx={{
                    "& .settingImage:hover": {

                    }
                }} src={Setting} alt="" />     <Badge className='badge' sx={{
                    "& .MuiBadge-badge": {
                        color: "gray",
                        backgroundColor: "#d0d5db"
                    },
                    "& .MuiBadge-badge:hover": {
                        color: "white",
                        backgroundColor: "black"
                    }
                }} badgeContent={0} showZero>
                        <i class="mx-1 fs-5 fa-solid fa-cart-shopping text-white"></i></Badge>
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
