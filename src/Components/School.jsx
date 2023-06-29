import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/school.css'
import { Link } from 'react-router-dom';
import '../Styles/Uniform.css'
import sizeguide from '../assests/sizess.png'
import { CartProvider, useCart } from 'react-use-cart';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
          <Link to="/Uniforms">  <img
            src={school.logo}
            alt={school.schoolname}
            className="logo-img"
          /></Link>
          <p className="school-name">{school.schoolname}</p>
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
      <h1 className="workwear">Designer Uniforms for the doers</h1>
      <h1><i className="fas fa-chevron-down "></i></h1>
    </div>
  )
}

function Secondscroll() {
  return (
    <div className="section2">
      <section className="bg-black">
        <div className="container-fluid">
          <div id="text1">
            <div className="fs-1 text-center">
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



export const Uniforms = () => {
  const [dressData, setDressData] = useState([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/dress')
      .then(response => response.json())
      .then(data => {
        setDressData(data);
      })
      .catch(error => {
        console.log('Error fetching dress data:', error);
      });
  }, []);

  const handleSortChange = event => {
    setSortOption(event.target.value);
  };

  const getSortedData = () => {
    const sortedData = [...dressData];
    switch (sortOption) {
      case 'ascending':
        sortedData.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        break;
      case 'descending':
        sortedData.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        break;
      default:
        break;
    }
    return sortedData;
  };

  const sortedData = getSortedData();

  return (
    <div>
      <div>
        <img src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/MJK07401.jpg" alt="bgimg" className='img-fluid'></img>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '70%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'grey',
        }}
      >
        <h2 id='imgt'>Decode</h2>
        <h2 id='imgt1'>Your kind of designer uniforms.</h2>
      </div>
      <div className='ms-5 mt-4 '>

        <select id="sortOrder" value={sortOption} onChange={handleSortChange}>
          <option value="/">Sort</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div className="uniforms-container">
        {dressData.length > 0 ? (
          sortedData.map(item => (
            <div className="uniform-item" key={item.id}>
              <Link key={dressData.id} to={`/Uniform/${item.id}`} style={{ textDecoration: 'none' }}>
                <div className="uniform-item-image">
                  <img src={item.image} alt={item.title} />
                  <div className="quick-view-overlay">
                    <button className="quick-view-button">Quick View</button>
                  </div>
                </div>
                <p><b>{item.title}</b></p>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading uniforms...</p>
        )}
      </div>
    </div>
  );
};




export const Uniformdisplay = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [scluniform, setscluniform] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const { addItem } = useCart();

  useEffect(() => {
    fetch(`http://localhost:4000/dress/${id}`)
      .then((response) => response.json())
      .then((data) => setscluniform(data));
  }, [id]);

  if (!scluniform) {
    return <div>Loading...</div>;
  }

  const handleGoBack = () => {
    navigate('School/Uniforms');
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const Updatedcost = () => {
    const newprice = parseFloat(scluniform.discountedprice.replace(/₹|,/g, ''));

    if (!selectedSize) {
      return newprice.toString();
    }


    if (selectedSize === '20') {
      return (newprice + 20).toString();
    } else if (selectedSize === '22') {
      return (newprice + 40).toString();
    } else if (selectedSize === '24') {
      return (newprice + 60).toString();
    }
    else if (selectedSize === '26') {
      return (newprice + 80).toString();
    }
    else if (selectedSize === '28') {
      return (newprice + 100).toString();
    }
    else if (selectedSize === '30') {
      return (newprice + 120).toString();
    }
    else if (selectedSize === '32') {
      return (newprice + 140).toString();
    }
    else if (selectedSize === '34') {
      return (newprice + 160).toString();
    }

    return newprice.toString();
  };






  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    const item = {
      image: scluniform.image,
      id: scluniform.id,
      title: scluniform.title,
      price: Updatedcost(),
      quantity: selectedQuantity
     
    };
    addItem(item);
    console.log('Item added to cart:', item);

    toast.success('Item added to cart', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
};

  return (
    <div className='container-fluid ms-5' style={{ paddingBottom: '160px' }}>
      <div className='row mt-5 ms-5'>
        <div className='col-5 mt-5'>
          <img
            className='ps-5 ms-5'
            src={scluniform.image}
            alt='sclimg'
            height={550}
            width={500}
            onClick={handleGoBack}
          />
        </div>
        <div className='col-3 mt-5'>
          <h1 style={{ color: 'black', fontSize: '35px' }}>{scluniform.title}</h1>
          <div className='d-flex'>
            <h6 style={{ fontWeight: 'bold', color: 'black' }}>Product Code:</h6>
            <h6 className='mt-1' style={{ fontSize: '14px', color: 'black' }}>
              {scluniform.prodcode}
            </h6>
          </div>
          <div className='d-flex'>
            <h6 style={{ fontWeight: 'bold', color: 'black' }}>Brand:</h6>
            <h6 className='mt-1' style={{ fontSize: '14px', color: 'black' }}>
              {scluniform.brand}
            </h6>
          </div>
          <div className='d-flex'>
            <h6 style={{ fontWeight: 'bold', color: 'black' }}>Sold By:</h6>
            <h6 className='mt-1' style={{ fontSize: '14px', color: 'black' }}>
              {scluniform.soldby}
            </h6>
          </div>
          <div>
            <h5
              className='pt-3'
              style={{
                color: 'black',
                fontSize: '40px',
                fontWeight: '450',
              }}
            >
              ₹{Updatedcost()}
            </h5>

            <h6
              className='ms-5 ps-5 mt-n5'
              style={{
                color: 'black',
                fontSize: '24px',
                fontWeight: '500',
              }}
            >
              <del>{scluniform.originalprice}</del>
            </h6>
          </div>

          <div>
            <h5
              className='text-center justify-content-center pt-1 mt-3 ms-4'
              style={{
                fontSize: '16px',
                backgroundColor: 'black',
                color: 'white',
                width: '69px',
                height: '30px',
                fontWeight: '400',
              }}
            >
              {scluniform.discount}
            </h5>
          </div>
          <hr></hr>
          <div>
            <button
              type='button'
              className='btn mt-2 ms-n1'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
              style={{
                fontSize: '14px',
                backgroundColor: 'black',
                color: 'white',
              }}
            >
              SIZE GUIDE
            </button>
          </div>

          {/* Dropdown for selecting size */}
          <div className='mt-4 d-flex'>
            <label htmlFor='selectSize' className='form-label py-2' style={{ color: 'white', backgroundColor: 'black' }}>
              Select Size
            </label>
            <select
              id='selectSize'
              className='form-select'
              value={selectedSize}
              onChange={handleSizeChange}
              style={{ width: "100px" }}
            >
              <option value=''>Choose Size</option>
              <option value='18'>18</option>
              <option value='20'>20</option>
              <option value='22'>22</option>
              <option value='24'>24</option>
              <option value='26'>26</option>
              <option value='28'>28</option>
              <option value='30'>30</option>
              <option value='32'>32</option>
              <option value='34'>34</option>
            </select>
          </div>
          <hr></hr>
          <div className='mt-4 d-flex'>
            <label htmlFor='selectQuantity' className='form-label' style={{ color: 'white', backgroundColor: 'black' }}>
              Quantity
            </label>
            <input
              type='number'
              id='selectQuantity'
              className='form-control'
              value={selectedQuantity}
              onChange={handleQuantityChange}
              style={{ width: '100px' }}
            />
          </div>


         <CartProvider>
          <button onClick={handleAddToCart} style={{ backgroundColor: 'black' }} type='button' className='btn btn-dark mt-5'>
            ADD TO CART
          </button>
          </CartProvider>
          
          <button style={{ backgroundColor: 'black' }} type='button' className='btn btn-dark mt-5 ms-5'>
            Buy Now
          </button>
          
      <ToastContainer />
          {/* modal for size chart */}
          <div className='modal fade' id='exampleModal' tabindex='' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content' style={{ width: '1100px' }}>
                <div className='modal-header'>
                  <h3 className='modal-title text-center justify-content-center' id='exampleModalLabel' style={{ color: 'black' }}>
                    SIZE GUIDE
                  </h3>
                  <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                </div>
                <div className='modal-body' style={{ width: '1300px' }}>
                  <h3 className='text-center' style={{ color: 'black', fontSize: '35px' }}>
                    a c e c r a f t
                  </h3>
                  <img src={sizeguide} alt='size' style={{ width: '800px' }} />
                  <img src={scluniform.image} alt='srcimg' width='250px' />
                </div>
                <div className='modal-footer'>
                  <button type='button' className='btn' data-bs-dismiss='modal' style={{ backgroundColor: 'black', color: 'white' }}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
      {/* description */}
      <div className='description'>
        <div style={{ background: '#f5f5f5', padding: '10px' }}>
          <h6 >Description of product</h6>
        </div>
        <div style={{ color: 'black', paddingTop: '19px', paddingBottom: '2em' }}>
          <h6 >NO RETURNS & NO EXCHANGE.</h6>
          <h6 style={{ fontWeight: 200, fontSize: 13 }}>Made from Poly-cotton. Henley neckline. Short sleeves.</h6>
        </div>
        <div style={{ background: '#f5f5f5', padding: '10px ' }}>
          <h6 >Related products</h6>
        </div>

      </div>
    </div>

  );
};



