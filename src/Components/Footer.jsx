import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';
import Fb from '../assests/Fb.png' ;
import Insta from '../assests/Insta.png';
import Linkedin from '../assests/Linkedin.png'

export default function Footer() {
  return (
    <footer id="bg-black">
      <div className="container">
        <div className="text-center" id="social">
          <a href="https://facebook.com"><img src={Fb} className="m-2" width="2.9%" alt="Facebook" /></a>
          <a href="https://instagram.com"><img src={Insta} className="m-2 bg-light rounded-circle" width="2.9%" alt="Instagram" /></a>
          <a href="https://linkedin.com"><img src={Linkedin} className="m-2" width="2.9%" alt="Linkedin" /></a>
        </div>
        <div className="row text-center justify-content-center">
          <div className="col-sm-3 col-lg-2"><Link to="/about"><b>ABOUT</b></Link></div>
          <div className="col-sm-3 col-lg-2"><Link to="/care"><b>CARE</b></Link></div>
          <div className="col-sm-3 col-lg-2"><Link to="/returns"><b>RETURNS</b></Link></div>
          <div className="col-sm-3 col-lg-2"><Link to="/production"><b>PRODUCTION</b></Link></div>
          <div className="col-sm-3 col-lg-2"><Link to="/terms"><b>TERMS</b></Link></div>
          <div className="col-sm-3 col-lg-2"><Link to="/help"><b>GET HELP</b></Link></div>
        </div>
      </div>
    </footer>
  );
}
