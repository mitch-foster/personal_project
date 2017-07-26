import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './PSAC_logo.jpg'

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                 
                <Link to='/'><img className='logo' src={logo} alt="PSAC Utah Logo"/></Link>
                <Link to='/treatmentoptions'>TREATMENT OPTIONS</Link>
                <Link to='/payments'>PAYMENTS</Link>
                <Link to='/faq'>FAQ</Link>
                {/* <Link to='/news'>NEWS</Link> */}
                <Link to='/blog'>BLOG</Link>
                <Link to='/contactus'>COUNTACT US</Link>
            </div>
        );
    }
}

export default NavBar;