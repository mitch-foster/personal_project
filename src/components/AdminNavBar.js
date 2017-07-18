import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './PSAC_logo.jpg'

class AdminNavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                 
                <Link to='/admin'><img className='logo' src={logo} alt="PSAC Utah Logo"/></Link>
                <Link to='/adminnews'>NEWS ARTICLES</Link>
                <Link to='/adminblog'>BLOG ENTRIES</Link>
            </div>
        );
    }
}

export default AdminNavBar;