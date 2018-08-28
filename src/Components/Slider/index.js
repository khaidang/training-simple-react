import React from 'react';
import Banner1 from '../../Assets/images/banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={Banner1} alt="First slide" />
                    <div className="carousel-caption">
                        <h1 className="f2-l measure"><FontAwesomeIcon icon={faStar} /> Our Mission <FontAwesomeIcon icon={faStar} /></h1>
                        <p className="f4 d-none d-md-block">
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://picsum.photos/1440/600/?random" alt="Second slide" />
                    <div className="carousel-caption">
                        <h1 className="f2-l measure">Second slide label</h1>
                        <p className="f4 d-none d-md-block">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://picsum.photos/1440/600/?random" alt="Third slide" />
                    <div className="carousel-caption">
                        <h1 className="f2-l measure">First slide label</h1>
                        <p className="f4 d-none d-md-block">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon carousel-arrow" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon carousel-arrow" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
};

export default Slider;