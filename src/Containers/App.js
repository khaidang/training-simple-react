import React, { Component } from 'react';
import Header from '../Components/Header';
import Slider from '../Components/Slider';
import Testimonial from '../Components/Testimonial';
import Team from '../Components/Team';
import FormContact from '../Components/FormContact';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import scrollToComponent from 'react-scroll-to-component';
import * as Scroll from 'react-scroll';
import { Link, Element } from 'react-scroll'
import Logo from '../Assets/images/logo-training.png';
import map from '../Assets/images/map.jpg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="container">
            <nav className="navbar navbar-expand-md">
                <a className="navbar-brand" href="#"><img src={Logo} alt="Training" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className="link fw5 nav-link">Contact</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="teams" spy={true} smooth={true} offset={0} duration={500} className="link fw5 nav-link">Team</Link>
                      </li>
                      <li className="nav-item"><a title="About Us" href="#" className="link fw5 nav-link">About Us</a></li>
                      <li className="nav-item"><a title="Welcome" href="#" className="link fw5 nav-link">Welcome</a></li>
                  </ul>
                </div>
            </nav>
        </header>

        <Element name="slider" className="element">
          <div className="section-slider">
            <Slider />
          </div>
        </Element>

        <div className="section-cus">
          <h1 className="text-center f2-l fw6">Testimonials</h1>
          <Testimonial />
        </div>

        <Element name="teams" className="element">
          <div className="section-team">
            <h1 className="text-center f2-l white fw6 pt4">Teams</h1>
            <Team />
            <p className="text-center pb4 mb0">
              <a className="f4 link dim ph3 pv2 mb2 dib white bg-orange-cus" href="#">Join Our Team</a>
            </p>
          </div>
        </Element>

        <div className="section-map">
          <img src={map} className="img-fluid" alt="Responsive image"></img>
        </div>

        <Element name="contact" className="element">
          <div className="container section-cus">
            <h1 className="text-center f2-l fw6">Contact Us</h1>
            <FormContact />
          </div>
        </Element>
        
        <Footer />
      </div>
    );
  }
}

export default App;
