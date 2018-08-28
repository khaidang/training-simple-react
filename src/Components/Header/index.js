import React from 'react';
import Nav from '../Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Assets/images/logo-training.png';

const Header = () => {
    return (
        <header className="container">
            <nav className="navbar navbar-expand-md">
                <a className="navbar-brand" href="#"><img src={Logo} alt="Training" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                    <Nav />
                </div>
            </nav>
        </header>
    )
};

export default Header;