import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AdminNavBar from './AdminNavBar';
import config from './../config.js'

class AdminLogin extends Component {
    render() {
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <h1>AdminLogin PAGE</h1>
                <h2>AUTH0</h2>
                <a href={config.loginURL}>
                    <Button>Login</Button>
                </a>
                <Link to='/'>
                    <Button>Go to PSAC's Website</Button>
                </Link>
            </div>
        );
    }
}

export default AdminLogin;