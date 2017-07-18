import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './PSAC_Utah_logo.png'

class componentName extends Component {
    render() {
        return (
            <div className="NavBar">
                {/* <img src={logo} alt="PSAC Utah Logo"/> */}
                <Link to='/'>HOME</Link>
                <Link to='/treatmentoptions'>Treatment Options</Link>
                <Link to='/payments'>PAYMENTS</Link>
                <Link to='/faq'>FAQ</Link>
                <Link to='/news'>NEWS</Link>
                <Link to='/blog'>BLOG</Link>
                <Link to='/contactus'>COUNTACT US</Link>
            </div>
        );
    }
}

export default componentName;