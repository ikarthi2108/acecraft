import React from "react";
import Carousel1 from '../assests/Carousel.png';
import Carousel2 from '../assests/Carousel2.png';
import Carousel3 from '../assests/carousel3.png';
import College3 from '../assests/College3.jpg';
import College1 from '../assests/College1.jpg';
import College2 from '../assests/College2.jpg';
import Cotton from '../assests/Cotton-3.png';
import Wool from '../assests/Wool-2.png';
import Woolenball from '../assests/woolen-ball-1.jpg';
import Viscose from '../assests/Viscose-4.png';



import '../Styles/college.css';

export default function College() {
    return (
        <>
            <div className="" style={{ position: 'relative', backgroundColor: 'black' }}>

                <img src={College1} alt="college1img" className="img-responsive img-fluid" style={{ backgroundColor: 'black' }} />


                <div className="container">

                    <div className="row">

                        <div className="col offset-7 pe-5" style={{ position: 'absolute', marginTop: '-400px', color: '#978F8F' }}>

                            <h1>The acecraft Collection.</h1>

                            <p>Simple. Sharp.<br />

                                Detailed perfection that makes you<br />

                                look good and feel great. Put it on. It's like magic.</p>

                            <p style={{ letterSpacing: '1px' }}><h4>Classic    &nbsp;  |    &nbsp;  Absolute   &nbsp;   |  &nbsp;    Signature</h4></p>

                        </div>
                    </div>

                </div>

            </div>

            {/* items */}



            <div className="container-fluid itemsdiv">

                <div className="row">

                    <div className="col offset-4 ">
                        <img src={Woolenball} alt="Woolenball" className="woolenball" width='390px' />
                        <h1 className="" style={{ color: '#978F8F' }}>Naturally Cutting-Edge.</h1>
                        <h6 style={{ color: 'black', fontWeight: '400' }}>The ‘best of both worlds’ has a new definition. Every fabric in<br /> the acecraft line-up is made from a blend of two fibres to<br /> give you the best range. No tech involved - it’s just the touch<br /> of nature.</h6>
                    </div>

                </div>

                <div className="row">

                    <div className="col offset-2 mt-n5">
                        <img src={Wool} alt="Wool" width='250px' className="mt-5 pt-5" />
                        <h1 className="offset-6 mt-n5" style={{ color: '#978F8F' }}>The Blended Wool</h1>
                        <h6 style={{ color: 'black', fontWeight: '400' }} className="offset-6">The Blended Wool is a class apart - with a mix of polyester <br /> for its wrinkle/crease-resistance and wool for warmth and absorbency,<br />  end your day looking the same as how you<br /> began it.</h6>
                    </div>

                </div>


                <div className="row">

                    <div className="col  mt-n5">
                        <img src={Cotton} alt="Cotton" width='230px' className="mt-5 offset-8 pt-5" />
                        <h1 className="mt-n5 offset-2" style={{ color: '#978F8F' }}>The Blended Cotton</h1>
                        <h6 style={{ color: 'black', fontWeight: '400' }} className="offset-2">The Blended Cotton is extremely strong and breathable.<br /> Easy to iron, this variant shrinks lesser than pure cotton and <br />retains its colour, which makes it a favourite choice for your<br /> everyday college wear.</h6>

                    </div>

                </div>


                <div className="row">

                    <div className="col offset-2 mt-n5">

                        <img src={Viscose} alt="Cotton" width='230px' className="mt-5" />
                        <h1 className="offset-6 mt-n5" style={{ color: '#978F8F' }}>The Blended Viscose</h1>
                        <h6 style={{ color: 'black', fontWeight: '400' }} className="offset-6">The Blended Viscose addition combines two ends of the<br /> spectrum - durability and a sense of softness. While the<br /> polyester contributes to resilience and shape retention, the<br /> viscose adds on to the overall absorbency, both sharpening <br />and softening your look at the same time.</h6>

                    </div>

                </div>

            </div>

            <img src={College2} alt='college' className="" />

            <div className="container" style={{ position: 'absolute', marginTop: '-150px', color: '#978F8F' }}>
                <div className="row mt-n5">
                    <div className="col mt-n5">
                        <h6 className="mt-n5 offset-7">THE ACECRAFT FIT</h6>
                        <h2 className=" ps-4 offset-7 ">Comfy.</h2>
                        <h1 className="offset-6 ps-5">Very comfy.</h1>
                        <p className="offset-6">It’s not just the fabric - it’s also the fit.<br />

                            The shoulders and sleeves fit right while the body feels <br />relaxed, making it undoubtedly the best.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ backgroundColor: 'black', height: '500px' }}>
                <Black />
            </div>

            <div className="" style={{backgroundColor:"black"}}>
                <img src={College3} alt="college3img" className="" style={{borderColor: 'black'}} />
            </div>

        </>


    );
}


export function Black() {

    return (
        <div id='bg1' className="row w-100" style={{ color: '#978F8F' }}>
            <div className="col mt-5">
                <h2 style={{ fontSize: 40, paddingTop: 90, paddingLeft: 90 }}> Your pretrial.</h2>
                <h2 style={{ fontSize: 40, paddingLeft: 90, lineHeight: 0.4 }}>Powered by our AI.
                </h2>
                <p className="mt-5 offset-1 ps-5" style={{ fontSize: '18px' }}>The acecraft Measurement Process is one <br></br> among the world's most accurate methods.<br></br> We set up a pre-trial event in your campus <br></br> and make each one try on the right fit. No<br></br> more guessing the right size business.</p>
            </div>
            <div className="col mt-5" >
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-interval="1000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Carousel1} class="d-block w-100" alt="..." height={400} width={500}></img>
                        </div>

                        <div class="carousel-item">
                            <img src={Carousel2} class="d-block w-100" alt="..." height={400} width={500}></img>
                        </div>
                        <div class="carousel-item">
                            <img src={Carousel3} class="d-block w-100" alt="..." height={400} width={500}></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}