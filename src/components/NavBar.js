import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './PSAC_logo.jpg'

class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="NavBar">
                    <Link to='/'><img className='logo' src={logo} alt="PSAC Utah Logo"/></Link>
                    <Link to='/treatmentoptions'><b>TREATMENT OPTIONS</b></Link>
                    <Link to='/faq'><b>FAQ</b></Link>
                    <Link to='/blog'><b>BLOG</b></Link>
                    <Link to='/contactus'><b>COUNTACT US</b></Link>
                    {/* <Link to='/payments'>PAYMENTS</Link> */}
                    {/* <Link to='/news'>NEWS</Link> */}
                </div>
                <div style={{height: '10vh'}}></div> 
            </div>
        );
    }
}

export default NavBar;