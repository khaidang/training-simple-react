import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusSquare, faFacebook, faTwitterSquare, faLinkedin } from '@fortawesome/fontawesome-free-brands';

const Footer = () => {
    return (
        <footer className="footer footer-cus pt3 pb3">
            <div className="container">
                <div className="footer-content flex justify-between items-center">
                    <span className="f5 white">Copyright2018</span>
                    <div>
                        <a href="#" title="facebook" className="f3 ml1 mr1">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" title="google+" className="f3 ml1 mr1">
                            <FontAwesomeIcon icon={faGooglePlusSquare} />
                        </a>
                        <a href="#" title="twitter" className="f3 ml1 mr1">
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                        <a href="#" title="linkedin" className="f3 ml1 mr1">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;