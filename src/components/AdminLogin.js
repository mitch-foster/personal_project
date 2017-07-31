import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import AdminNavBar from './AdminNavBar';
import config from './../config.js';
import logo from './PSAC_logo.jpg';

class AdminLogin extends Component {
    render() {
        return (
            <div>
                <div className='admin_login'>
                    <div className='login_portal'>
                        <img src={logo} alt="PSAC Logo"/>
                        <h2>PSAC Admin Login</h2>
                        <a href={config.loginURL}>
                            <Button>Login</Button>
                        </a>
                        <Link to='/'>
                            <Button>PSAC Website</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLogin;