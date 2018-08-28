import React from 'react';

const Testimonial = () => {
    return (
        <div id="carouselIndicators" data-interval="false" className="carousel slide carousel-testimonial" data-ride="carousel">
            <ol className="carousel-indicators carousel-indicators-testimonial">
                <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselIndicators" data-slide-to="1"></li>
                <li data-target="#carouselIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container text-center">
                        <p className="f4">
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur. <br />
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        <p className="f5 fw5">Guillermo Maldonado Ibarguen – CEO @ KSUBASTA</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container text-center">
                        <p className="f4">
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.<br />
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        <p className="f5 fw5">Guillermo Maldonado Ibarguen – CEO @ KSUBASTA</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container text-center">
                        <p className="f4">
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.<br />
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        <p className="f5 fw5">Guillermo Maldonado Ibarguen – CEO @ KSUBASTA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;