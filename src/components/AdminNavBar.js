import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from './../config.js'

import logo from './PSAC_logo.jpg'

class AdminNavBar extends Component {
    render() {
        return (
            <div>
                <div className="NavBar">
                    <Link to='/admin'><img className='navbar_logo' src={logo} alt="PSAC Utah Logo"/></Link>
                    <Link to='/adminblog'>BLOG ENTRIES</Link>
                    {/* <Link to='/adminnews'>NEWS ARTICLES</Link> */}
                    <a href={config.logoutURL}>LOGOUT</a>
                </div>
                <div style={{height: '10vh'}}></div> 
             </div>   
        );
    }
}

export default AdminNavBar;