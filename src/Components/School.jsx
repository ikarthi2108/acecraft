import React, { useState, useEffect } from 'react';
import '../Styles/school.css'

export default function School() {
  return (
    <>
      <Logo />
      <Text />
      <Imagescroll />
      <Secondscroll />
      <Thirdscroll />
      <Fourthscroll />
      <Fifthscroll />
    </>
  );
}

function Logo() {
  const [logos, setLogos] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:4000/schools')
      .then((response) => response.json())
      .then((data) => {
        setLogos(data);
      })
      .catch((error) => {
        console.error('Error fetching school data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <div className="container-fluid d-flex justify-content-center" id='bg1'>
      {logos.map((school) => (
        <div key={school.schoolid} className="logo-item text-center">
          <img
            src={school.logo}
            alt={school.schoolname}
            className="logo-img"
          />
          <p className="school-name">{school.schoolname}</p>
        </div>
      ))}
    </div>
  );
}
function Imagescroll(){
  return(
    <div className="main">

    </div>
  )
}

function Text() {
  return (
    <div className='container-fluid'>
      <h1 className="workwear">Designer Uniforms for the doers</h1>
      <h1><i className="fas fa-chevron-down "></i></h1>
    </div>
  )
}

function Secondscroll(){
  return(
    <div className="section2">
    <section className="bg-black">
    <div class="container-fluid">
        <div id="text1">
            <div class="fs-1 text-center">
                <p>Aesthetically advanced,</p>
                <p> our designer uniforms are<b> a cut above the rest,</b></p>
                <p><b>in every sense of the word.</b>
                </p>
            </div>
        </div>
    </div>
    
</section>
</div>

  )
}
function Thirdscroll() {
  return (
    <section className="main2">
      <div className="designer1 text-black">
        <div className="row bg-transprent justify-content-center">
          <div className="col-12 text-center">
            <h6 className="ms-4 fw-normal fs-1" style={{ marginTop: '500px' }}>
              Perfection. Now<b> delivering to your doorstep.</b>
              <br />
             <i className="fas fa-chevron-down "></i>
            </h6>
          </div>
        </div>
      </div>
      <div className="designer1 text-black">
        <div className="row bg-transprent justify-content-center">
          <div className="col-12 text-center">
            <p
              className="ms-4 fw-normal fs-2"
              style={{ marginTop: '270px', paddingBottom: '250px' }}
            >
              Less<b> hassle.</b> More<b> hustle.</b>
              <br /> Our end-to-end e-commerce facility with
              <br />
              <b>superior technology enables us to</b>
              <br />
              deliver your order right to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function Fourthscroll() {
  return (
    <section className="bg-black">
      <div className="container">
        <div id="text2">
          <div className="text-end">
            <p className="fs-1 m-0">
              <b>Be at ease.</b>
            </p>
            <p className="fs-1 m-0">
              <b>Everyday.</b>
            </p>
            <p className="fs-4 fw-lighter">
              Our uniforms keep your children looking great
              <br />
              from the first day of school until the end-of-the-year picnic.
            </p>
          </div>
          <img src={"https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/BK,.jpg"} alt='img' className="img-responsive" width="100%" />
        </div>
      </div>
    </section>
  );
}
function Fifthscroll() {
  return (
    <section className="main3">
      <div className="col-md-12 pt-5 content text-center">
        <div className="text-center pt-5 ms-mb-x">
          <p className="ms-m-0">Designer Uniforms</p>
          <p className="signature">by</p>
          <p className="fs-2 fw-lighter" style={{ fontFamily: 'Courier New, monospace' }}>
            acecraft
          </p>
        </div>

        <div className="fs-4 fw-lighter">
          Establish a <b className="fw-bold">signature look</b> for your school.
        </div>

        <div className="fs-4 fw-lighter mt-5">
          Looking to change your supplier?
          <br />
          <button className="btn border-white mt-5 text-white">Get In Touch</button>
        </div>
      </div>
    </section>
  );
}



