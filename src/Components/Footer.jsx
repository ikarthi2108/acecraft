import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';
import Fb from './Fb.png';
import Insta from './Insta.png';
import Linkedin from './Linkedin.png';

export default function Footer() {
  return (
    <div className="footerstart">
      <section className="footer">
        <div className="container">
          <div className="row justify-content-center pb-4 mt-n5">
            <div className="d-flex justify-content-center">
              <img src={Fb} alt="fb" />
              <img src={Insta} alt="insta" />
              <img src={Linkedin} alt="linkedin" />
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <Link to="#">ABOUT</Link>
            </div>
            <div className="col-2">
              <Link to="#">CARE</Link>
            </div>
            <div className="col-2">
              <Link to="#">RETURNS</Link>
            </div>
            <div className="col-2">
              <Link to="#">PRODUCTION</Link>
            </div>
            <div className="col-2">
              <Link to="#">TERMS</Link>
            </div>
            <div className="col-2 border-0">
              <Link to="#">GET HELP</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
