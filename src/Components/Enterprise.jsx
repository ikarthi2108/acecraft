import React, { useState, useEffect } from "react";
import '../Styles/Enterprise.css';

export default function Enterprise() {
  return (
    <div>
      <Logo />
      <Imagescroll />
      <Text />
      
    </div>
  );
}

function Logo() {
  const [logos, setLogos] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:4000/honda')
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
            src={school.image}
            alt={school.schoolname}
            className="logo-img"
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
  
  

