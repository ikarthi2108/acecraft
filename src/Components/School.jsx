import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/school.css";
import { Link } from "react-router-dom";
import "../Styles/Uniform.css";
import sizeguide from "../assests/sizess.png";
import { CartProvider, useCart } from "react-use-cart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carousel from 'react-bootstrap/Carousel';

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

  //fetching the logo images from the api
  const fetchData = () => {
    fetch("https://acecraft-deploy.onrender.com/schools")
      .then((response) => response.json())
      .then((data) => {
        setLogos(data);
      })
      .catch((error) => {
        console.error("Error fetching school data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center" id="bg1">
      {logos.map((school) => (
        <div key={school.schoolid} className="logo-item text-center">
          <Link to="/Uniforms">
            {" "}
            <img
              src={school.logo}
              alt={school.schoolname}
              className="logo-img"
            />
          </Link>
          <p className="school-name">{school.schoolname}</p>
        </div>
      ))}
    </div>
  );
}
function Imagescroll() {
  return <div className="main"></div>;
}

function Text() {
  return (
    <div className="container-fluid">
      <h1 className="workwear">Designer Uniforms for the doers</h1>
      <h1>
        <i className="fas fa-chevron-down "></i>
      </h1>
    </div>
  );
}

function Secondscroll() {
  return (
    <div className="section2">
      <section className="bg-black">
        <div className="container-fluid">
          <div id="text1">
            <div className="fs-1 text-center">
              <p>Aesthetically advanced,</p>
              <p>
                {" "}
                our designer uniforms are<b> a cut above the rest,</b>
              </p>
              <p>
                <b>in every sense of the word.</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function Thirdscroll() {
  return (
    <section className="main2">
      <div className="designer1 text-black">
        <div className="row bg-transprent justify-content-center">
          <div className="col-12 text-center">
            <h6 className="ms-4 fw-normal fs-1" style={{ marginTop: "500px" }}>
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
              style={{ marginTop: "270px", paddingBottom: "250px" }}
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
          <img
            src={
              "https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/BK,.jpg"
            }
            alt="img"
            className="img-responsive"
            width="100%"
          />
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
          <p
            className="fs-2 fw-lighter"
            style={{ fontFamily: "Courier New, monospace" }}
          >
            acecraft
          </p>
        </div>

        <div className="fs-4 fw-lighter">
          Establish a <b className="fw-bold">signature look</b> for your school.
        </div>

        <div className="fs-4 fw-lighter mt-5">
          Looking to change your supplier?
          <br />
          <button className="btn  mt-5 text-white" type="button" data-bs-toggle="modal" data-bs-target=".example5Modal" data-bs-whatever="@mdo" style={{ border: '1px solid white' }}>Get In Touch</button>
        </div>
        <div className="modal fade example5Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ width: '550px', height: '600px' }}>
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
                                        <div className="input-group">
                                            <input type="email" className="form-control" placeholder="Professional Email" style={{ fontWeight: '650' }} />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="input-group">

                                            <input type="text" className="form-control" placeholder="Organisation" style={{ fontWeight: '650' }} />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="input-group">

                                            <input type="text" className="form-control" placeholder="Phone No." style={{ fontWeight: '650' }} />
                                        </div>
                                    </div>
                                    <p className="quan mt-3" style={{ color: 'grey', fontWeight: '650',fontSize:'15px' }}>Quantity required</p>
                                    <div className="choice" style={{ color: 'grey', fontWeight: '600',fontSize:'15px'  }}>
                                        <input type="radio" className="quantity1" name="age" value="50" />
                                        <label htmlFor="age1" className="ps-1 ">10 - 50 Sets</label>
                                        <input type="radio" className="quantity2 ms-5 " name="age" value="100" />
                                        <label htmlFor="age2" className="ps-1">51 - 100 Sets</label>
                                        <input type="radio" className="quantity3 ms-5" name="age" value="100+" />
                                        <label htmlFor="age3" className="ps-1">100+ Sets</label>
                                    </div>
                                    <button type="button" className="btn2 btn btn-secondary mt-3" data-bs-dismiss="modal" style={{ width: '100%', color: 'white', backgroundColor: 'grey', borderRadius: '30px' }}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

      </div>
    </section>
  );
}

export const Uniforms = () => {
  const [dressData, setDressData] = useState([]);
  const [sortOption, setSortOption] = useState("");

  //fetching the details from the json (uniform details)
  useEffect(() => {
    fetch("https://acecraft-deploy.onrender.com/dress")
      .then((response) => response.json())
      .then((data) => {
        setDressData(data);
      })
      .catch((error) => {
        console.log("Error fetching dress data:", error);
      });
  }, []);

//sorting functionality
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const getSortedData = () => {
    const sortedData = [...dressData];
    switch (sortOption) {
      case "ascending":
        sortedData.sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
        break;
      case "descending":
        sortedData.sort((a, b) =>
          b.title.toLowerCase().localeCompare(a.title.toLowerCase())
        );
        break;
      case "priceLowToHigh":
        sortedData.sort(
          (a, b) => parseFloat(getNumericValue(a.discountedprice)) - parseFloat(getNumericValue(b.discountedprice))
        );
        break;
      case "priceHighToLow":
        sortedData.sort(
          (a, b) => parseFloat(getNumericValue(b.discountedprice)) - parseFloat(getNumericValue(a.discountedprice))
        );
        break;
      default:
        break;
    }
    return sortedData;
  };

  // Helper function to extract numeric value from a formatted price string
  const getNumericValue = (priceString) => {
    return parseFloat(priceString.replace(/[₹,]/g, ""));
  };

  const sortedData = getSortedData(); // Assign the sorted data to a variable

  return (
    <div>
      <div>
        <img
          src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/MJK07401.jpg"
          alt="bgimg"
          className="img-fluid"
        ></img>
      </div>
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "grey",
        }}
      >
        <h2 id="imgt">Decode</h2>
        <h2 id="imgt1">Your kind of designer uniforms.</h2>
      </div>
      <div className="container-fluid">
        <div className="row"> 
        <div className="col">
      <h3 className="mt-2 ms-5" style={{color:"black"}}>Total Items : {dressData.length}</h3>
      </div>
      <div className="col-md-2">
      <div className="ms-5 mt-4" >
        <select id="sortOrder" value={sortOption} onChange={handleSortChange}>
          <option value="/">Sort</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>
      </div>
      </div>
      
      </div>
      <div className="uniforms-container">
        {dressData.length > 0 ? (
          sortedData.map((item) => (
            <div className="uniform-item" key={item.id}>
              <Link
                key={dressData.id}
                to={`/Uniform/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="uniform-item-image">
                  <img src={item.image} alt={item.title} />
                  <div className="quick-view-overlay">
                    <button className="quick-view-button">Quick View</button>
                  </div>
                </div>
                <p>
                  <b>{item.title}</b>
                </p>
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
  const [selectedSize, setSelectedSize] = useState("18");
  const [selectedQuantity, setSelectedQuantity] = useState("1");
  const { addItem } = useCart();

//used to fectch the details of the uniforms from the uniforms page fetching based on the id
  useEffect(() => {
    fetch(`https://acecraft-deploy.onrender.com/dress/${id}`)
      .then((response) => response.json())
      .then((data) => setscluniform(data));
  }, [id]);

  if (!scluniform) {
    return <div>Loading...</div>;
  }
//navigate hook to go back to the uniforms page
  const handleGoBack = () => {
    navigate("School/Uniforms");
  };
//functions for size and size updating
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value); 
  };

  const Updatedcost = () => {
    const newprice = parseFloat(scluniform.discountedprice.replace(/₹|,/g, ""));

    if (!selectedSize) {
      return newprice.toString();
    }

    if (selectedSize === "20") {
      return (newprice + 20).toString();
    } else if (selectedSize === "22") {
      return (newprice + 40).toString();
    } else if (selectedSize === "24") {
      return (newprice + 60).toString();
    } else if (selectedSize === "26") {
      return (newprice + 80).toString();
    } else if (selectedSize === "28") {
      return (newprice + 100).toString();
    } else if (selectedSize === "30") {
      return (newprice + 120).toString();
    } else if (selectedSize === "32") {
      return (newprice + 140).toString();
    } else if (selectedSize === "34") {
      return (newprice + 160).toString();
    }

    return newprice.toString();
  };
  const Updatedoriginalcost = () => {
    const originalprice = parseFloat(
      scluniform.originalprice.replace(/₹|,/g, "")
    );

    if (!selectedSize) {
      return originalprice.toString();
    }

    if (selectedSize === "20") {
      return (originalprice + 30).toString();
    } else if (originalprice === "22") {
      return (originalprice + 30).toString();
    } else if (originalprice === "24") {
      return (originalprice + 30).toString();
    } else if (originalprice === "26") {
      return (originalprice + 30).toString();
    } else if (originalprice === "28") {
      return (originalprice + 30).toString();
    } else if (originalprice === "30") {
      return (originalprice + 30).toString();
    } else if (originalprice === "32") {
      return (originalprice + 30).toString();
    } else if (originalprice === "34") {
      return (originalprice + 30).toString();
    }

    return originalprice.toString();
  };
  const updatediscount = () => {
    const newdiscount = parseFloat(scluniform.discount.replace(/₹|,/g, ""));

    if (!selectedSize) {
      return newdiscount.toString();
    }
    if (selectedSize === "20") {
      return (newdiscount + 3).toString();
    } else if (selectedSize === "22") {
      return (newdiscount + 4).toString();
    } else if (selectedSize === "24") {
      return (newdiscount + 5).toString();
    } else if (selectedSize === "26") {
      return (newdiscount + 6).toString();
    } else if (selectedSize === "28") {
      return (newdiscount + 7).toString();
    } else if (selectedSize === "30") {
      return (newdiscount + 8).toString();
    } else if (selectedSize === "32") {
      return (newdiscount + 9).toString();
    } else if (selectedSize === "34") {
      return (newdiscount + 9).toString();
    }
    return newdiscount.toString();
  };
//function for quantity not going below
  const handleQuantityChange = (event) => {
    let quantity = event.target.value;
    if (quantity < 1) {
      quantity = 1;
    }
    setSelectedQuantity(quantity);
  };
//Add to cart functionality
  const handleAddToCart = () => {
    const item = {
      image: scluniform.image,
      id: scluniform.id,
      title: scluniform.title,
      price: Updatedcost(),
      quantity: selectedQuantity,
      size:selectedSize
    };

    addItem(item);
    console.log("Item added to cart:", item);
    console.log(item.quantity);

    // POST item to Cartitems endpoint
    fetch("https://acecraft-deploy.onrender.com/Cartitems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Item added to cart", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
        toast.error("Product already in the cart", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  return (
    
    <div className="container-fluid ms-5" style={{ paddingBottom: "160px" }}>
      <div className="container-fluid ms-5" style={{ paddingBottom: "160px" }}>
        <div className="row mt-5 ms-5">
          <div className="col-5 mt-5">
            <img
              className="ps-5 ms-5"
              src={scluniform.image}
              alt="sclimg"
              height={550}
              width={500}
              onClick={handleGoBack}
            />
          </div>
          <div className="col-3 mt-5">
            <h1 style={{ color: "black", fontSize: "35px" }}>
              {scluniform.title}
            </h1>
            <div className="d-flex">
              <h6 style={{ fontWeight: "bold", color: "black" }}>
                Product Code:
              </h6>
              <h6 className="mt-1" style={{ fontSize: "14px", color: "black" }}>
                {scluniform.prodcode}
              </h6>
            </div>
            <div className="d-flex">
              <h6 style={{ fontWeight: "bold", color: "black" }}>Brand:</h6>
              <h6 className="mt-1" style={{ fontSize: "14px", color: "black" }}>
                {scluniform.brand}
              </h6>
            </div>
            <div className="d-flex">
              <h6 style={{ fontWeight: "bold", color: "black" }}>Sold By:</h6>
              <h6 className="mt-1" style={{ fontSize: "14px", color: "black" }}>
                {scluniform.soldby}
              </h6>
            </div>
            <div>
              <h5
                className="pt-3"
                style={{
                  color: "black",
                  fontSize: "40px",
                  fontWeight: "450",
                }}
              >
                ₹{Updatedcost()}
              </h5>

              <h6
                className="ms-5 ps-5 mt-n5"
                style={{
                  color: "black",
                  fontSize: "24px",
                  fontWeight: "500",
                }}
              >
                <del> ₹{Updatedoriginalcost()}</del>
              </h6>
            </div>

            <div>
              <h5
                className="text-center justify-content-center pt-1 mt-3 ms-4"
                style={{
                  fontSize: "16px",
                  backgroundColor: "black",
                  color: "white",
                  width: "69px",
                  height: "30px",
                  fontWeight: "400",
                }}
              >
                {updatediscount()}% OFF
              </h5>
            </div>
            <hr></hr>
            <div>
              <button
                type="button"
                className="btn mt-2 ms-n1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{
                  fontSize: "14px",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                SIZE GUIDE
              </button>
            </div>

            {/* Dropdown for selecting size */}
            <div className="mt-4 d-flex align-items-center">
              <label
                htmlFor="selectSize"
                className="form-label py-2 select-label"
                id="sizeselect"
              >
                Select Size
              </label>
              <div id="boxsize">
                <select
                  id="selectSize"
                  className="form-select select-input"
                  value={selectedSize}
                  onChange={handleSizeChange}
                >
                  <option value="">Choose Size</option>
                  <option value="18">18</option>
                  <option value="20">20</option>
                  <option value="22">22</option>
                  <option value="24">24</option>
                  <option value="26">26</option>
                  <option value="28">28</option>
                  <option value="30">30</option>
                  <option value="32">32</option>
                  <option value="34">34</option>
                </select>
              </div>
            </div>
            <hr></hr>
            <div className="mt-4 d-flex align-items-center">
              <label
                htmlFor="selectQuantity"
                className="form-label select-label "
                id="labelquantity"
              >
                Quantity
              </label>
              <div id="quantity">
                <input
                  type="number"
                  id="selectQuantity"
                  className="form-control"
                  value={selectedQuantity}
                  onChange={handleQuantityChange}
                />
              </div>
            </div>

            <CartProvider>
              <button
                onClick={handleAddToCart}
                style={{ backgroundColor: "black" }}
                type="button"
                className="btn btn-dark mt-5"
              >
                ADD TO CART
              </button>
            </CartProvider>

            <button
              style={{ backgroundColor: "black" }}
              type="button"
              className="btn btn-dark mt-5 ms-5"
            >
              Buy Now
            </button>

            <ToastContainer />
            {/* modal for size chart */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex=""
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content" style={{ width: "1100px" }}>
                  <div className="modal-header">
                    <h3
                      className="modal-title text-center justify-content-center"
                      id="exampleModalLabel"
                      style={{ color: "black" }}
                    >
                      SIZE GUIDE
                    </h3>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body" style={{ width: "1300px" }}>
                    <h3
                      className="text-center"
                      style={{ color: "black", fontSize: "35px" }}
                    >
                      a c e c r a f t
                    </h3>
                    <img
                      src={sizeguide}
                      alt="size"
                      style={{ width: "800px" }}
                    />
                    <img src={scluniform.image} alt="srcimg" width="250px" />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn"
                      data-bs-dismiss="modal"
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
        {/* description */}
        <div className="description">
          <div style={{ background: "#f5f5f5", padding: "10px" }}>
            <h6>Description of product</h6>
          </div>
          <div
            style={{ color: "black", paddingTop: "19px", paddingBottom: "2em" }}
          >
            <h6>NO RETURNS & NO EXCHANGE.</h6>
            <h6 style={{ fontWeight: 200, fontSize: 13 }}>
              Made from Poly-cotton. Henley neckline. Short sleeves.
            </h6>
          </div>
          <div style={{ background: "#f5f5f5", padding: "10px " }}>
            <h6>Related products</h6>

          </div>
          <Carousel>
            <Carousel.Item>
              <div className="d-flex justify-content-between">
                <img
                  className="d-block w-25"
                  src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/601d7044a72cc46b41ac7ca4/webp/hi-school-480x480.jpg"
                  alt="1st Product"
                />
                <img
                  className="d-block w-25"
                  src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/627b614b1b723d40d4a3954a/webp/front-view-nhg-shirt-boys-grade-11-12--480x480.jpg"
                  alt="2nd Product"
                />
                <img
                  className="d-block w-25"
                  src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/601d706374c88c6b06d39dc1/webp/h-school-480x480.jpg"
                  alt="3rd Product"
                />
                <img
                  className="d-block w-25"
                  src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/627bd26c3f76019779ceeb39/webp/henley-polos-blue-480x480.jpg"
                  alt="4th Product"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-between">
                <img
                  className="d-block w-25"
                  src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/601ba78c752f902f88d0e6de/webp/t3-1-480x480.png"
                  alt="5th Product"
                />
                <img
                  className="d-block w-25"
                  src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/601aba7db45549b7460788f0/webp/t1-1-480x480.png"
                  alt="6th Product"
                />
                <img
                  className="d-block w-25"
                  src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/601ba70c7779a13e481409f5/webp/t4-1-480x480.png"
                  alt="7th Product"
                />
                <img
                  className="d-block w-25"
                  src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/601d70c2cbfb666ae114a053/webp/yellow-house-t-shirt-480x480.jpg"
                  alt="8th Product"
                />
              </div>
            </Carousel.Item>
          </Carousel>

        </div>

      </div>
    </div>
  );
};
