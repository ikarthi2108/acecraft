import React, { useState, useEffect } from "react";
import '../Styles/Enterprise.css';
import axios from 'axios';
import '../Styles/DesignerUniform.css'

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
    axios.get('https://acecraft-deploy.onrender.com/honda')
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
    axios.get('https://acecraft-deploy.onrender.com/mens')
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
      axios.get('https://acecraft-deploy.onrender.com/steps')
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


              <div className="timeline">
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
    axios.get('https://acecraft-deploy.onrender.com/Enterpriselast')
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
            <div>
              <img src={last.img} alt="lastimg" className="lastimg" />
            </div>
          </div>
        ))}
      </div>
      <div className="design row">

                <div className="offset-lg-5 mt-n5">

                    <Designeruniform />

                </div>

            </div>


    </div>
  );
}
export  function Designeruniform() {
  return (
      <>
          <div className="card designcard justify-content-center">
              <h6 className="designeruniform text-center pt-2">Designer Uniforms</h6>
              <div className="text-center horizontal-line">
                  <span>by</span>
              </div>
              <h6 className="acecraft text-center">acecraft</h6>
              <button className="getintouch text-center" type="button" data-bs-toggle="modal" data-bs-target=".example3Modal" data-bs-whatever="@mdo">GET IN TOUCH</button>
          </div>
          <div className="modal fade example3Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content" style={{ maxWidth: '550px', maxHeight: '560px' }}>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ color: '#000000', fontSize: '10px' }}></button>
      <h5 className="modal-title exampleModalLabel text-center mt-5" style={{ fontSize: '30px', fontWeight: '640' }}>Get your Uniforms designed and<br /> styled by Us!</h5>
      <div className="container-fluid icons">
        <form>
          <div className="row">
            <div className="col-6">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="First Name" style={{ fontWeight: '650' }} />
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Last Name" style={{ fontWeight: '650' }} />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Professional Email" style={{ fontWeight: '650' }} />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Organisation" style={{ fontWeight: '650' }} />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Phone No." style={{ fontWeight: '650' }} />
              </div>
            </div>
          </div>
          <p className="quan mt-3" style={{ color: 'grey', fontWeight: '650' }}>Quantity required</p>
          <div className="choice" style={{ color: 'grey', fontWeight: '600' }}>
            <div className="form-check">
              <input type="radio" className="form-check-input" name="quantity" value="50" id="age1" />
              <label htmlFor="age1" className="form-check-label">10 - 50 Sets</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" name="quantity" value="100" id="age2" />
              <label htmlFor="age2" className="form-check-label">51 - 100 Sets</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" name="quantity" value="100+" id="age3" />
              <label htmlFor="age3" className="form-check-label">100+ Sets</label>
            </div>
          </div>
          <button type="button" className="btn2 btn btn-secondary mt-3" data-bs-dismiss="modal" style={{ width: '80%', color: 'white', backgroundColor: 'grey', borderRadius: '30px' }}>Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>

      </>
  );
}