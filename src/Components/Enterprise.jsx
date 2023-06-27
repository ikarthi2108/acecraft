import React, { useState, useEffect } from "react";
import '../Styles/Enterprise.css';
import axios from 'axios';

export default function Enterprise() {
  return (
    <div>
      <Logo />
      <Imagescroll />
      <Text />
      <Cards />
      <Steps />
      <Enterpriselast />

    </div>
  );
}



function Logo() {
  const [logos, setLogos] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:4000/honda')
      .then((response) => {
        setLogos(response.data);
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
            src={school.image}
            alt={school.schoolname}
            className="logo1-img"
          />
          <p className="school-name">{school.text}</p>
        </div>
      ))}
    </div>
  );
}


function Imagescroll() {
  return (
    <div className="main">

    </div>
  );
}
function Text() {
  return (
    <div className='container-fluid'>
      <h1 className="workwear">Workwear that works</h1>
      <h1><i className="fas fa-chevron-down "></i></h1>
    </div>
  )
}

function Cards() {
  const [mensindex, setmensindex] = useState([]);
  const fetchData = () => {
    axios.get('http://localhost:4000/mens')
      .then((response) => {
        setmensindex(response.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container-fluid">
    <div className="menapi">
      <h1 className="workrelaxed text-center pt-5" style={{ fontWeight: "bold", color: "black" }}>Work Relaxed.</h1>
      <h6 className="whenwe text-center pt-3">When we designed our uniforms, we wore them to work every day.</h6>
      <h6 className="westill text-center pt-2">We still do. They’re comfy, relaxed and designed to suit your workplace.</h6>
  
    
      <div className="row">
        {mensindex.map((mens) => (
          <div className="mensid col-md-4" key={mens.id}>
            <div className="menscards">
              <img src={mens.img} alt="enterprisesimg" width="590px" />
              <div className="card-text-container">
                <h4 className="card-title">{mens.imgtxt1}</h4>
                <h4 className="card-title">{mens.imgtxt2}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
 }  

 function Steps() {
  const [stepsindex, setstepsindex] = useState([]);
  const fetchData = () => {
      axios.get('http://localhost:4000/steps')
          .then((response) => {
              setstepsindex(response.data);
          });
  };
  useEffect(() => {
      fetchData();
  }, []);


  return (
      <div className="container-fluid stepsbackground">


          <div className="row">

              <h1 className="text-center  thisishow"> This is how we do it.</h1>


              <div class="timeline">
                  <div className="point">1</div>
                  <div className="point">2</div>
                  <div className="point">3</div>
                  <div className="point">4</div>
                  <div className="point">5</div>
                  <div className="point1">6</div>
              </div>



              {stepsindex.map((steps) => (
                  <div className="col-md-2" key={steps.stepsid}>
                      <div className="">
                          <img src={steps.stepsimg} alt="stepsimg" width='120px' className="stepsimg" />
                          <h1 className="stepscontent1 ms-5">{steps.stepscontent1}</h1>
                          <h1 className="stepscontent2 ms-5">{steps.stepscontent2}</h1>
                      </div>

                  </div>

              ))}

          </div>


      </div>



  );
}

function Enterpriselast() {
  const [imgs, setImgs] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:4000/Enterpriselast')
      .then((response) => {
        setImgs(response.data);
      })
      .catch((error) => {
        console.error('Error in fetching the data', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid enterpriselast">
      <div className="row">
        {imgs.map((last) => (
          <div className="col-md-12" key={last.id}>
            <div className="" >
              <img src={last.img} alt="lastimg" className="lastimg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
