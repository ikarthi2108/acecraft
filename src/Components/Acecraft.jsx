import React from "react";
import '../Styles/Acecraft.css';
import { Link } from 'react-router-dom';

export default function Acecraft() {
  return (
    <>
      <section className="banner">
        <div className="row justify-content-center" id="box">
          <div className="ml-4 col-3 text-center" id="img_content">
            <h2 className="font-weight-light">Choose Class</h2>
            <h2 className="font-weight-bold px-4">over the common.</h2>
          </div>
          <div className="row justify-content-center" id="arrow-link">
            <div className="ml-4 text-center">
              {/* eslint-disable-next-line */}
              <p><Link to='/College'>CLASSY FOR COLLEGES<i className="fa-sharp fa-solid fa-angle-right"></i></Link></p>
            </div>
          </div>
        </div>
      </section>

      <Acecraft1 />
    </>
  );
}

export function Acecraft1() {
  return (
    <section className="big_cards">
      <div className="container-fluid">
        <div className="row" id="card_row">
          <div className="col-sm-6 p-sm-1 p-0" id="bg-black">
            <div className="card border-0">
              <div className="card" id="container">
                <div id="card_1"></div>
                <div className="row justify-content-center" id="card-content">
                  <div className="border-light border text-center w-50">
                    <h2 className="font-weight-light">A grade</h2>
                    <h2 className="font-weight-bold px-5">of Greatness.</h2>
                  </div>
                  <div className="row justify-content-center" id="arrow-link">
                    <div className="text-center me-5">
                      {/* eslint-disable-next-line */}
                      <p><Link to='/School'>CLASSY FOR Schools<i className="fa-sharp fa-solid fa-angle-right"></i></Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 p-sm-1 p-0" id="bg-black">
            <div className="card border-0" id="img_container">
              <div className="card" id="container">
                <div id="card_2"></div>
                <div className="row justify-content-center" id="card-content">
                  <div className="border-light border text-center w-50">
                    <h2 className="font-weight-light fw-bold">workwear</h2>
                    <h2 className="font-weight-bold px-5 mx-5">Refined.</h2>
                  </div>
                  <div className="row justify-content-center" id="arrow-link">
                    <div className="text-center  me-3" >
                      {/* eslint-disable-next-line */}
                      <p><Link to='/Enterprise'>CLASSY FOR Enterprise<i className="fa-sharp fa-solid fa-angle-right"></i></Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
