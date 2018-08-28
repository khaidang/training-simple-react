import React from 'react';
import scrollToComponent from 'react-scroll-to-component';

const Nav = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item"><a onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 1500})} title="Contact" href="#" className="link fw5 nav-link">Contact</a></li>
            <li className="nav-item"><a title="Team" href="#" className="link fw5 nav-link">Team</a></li>
            <li className="nav-item"><a title="About Us" href="#" className="link fw5 nav-link">About Us</a></li>
            <li className="nav-item"><a title="Welcome" href="#" className="link fw5 nav-link">Welcome</a></li>
        </ul>
    )
};

export default Nav;