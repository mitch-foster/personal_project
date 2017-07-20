import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import AdminNavBar from './AdminNavBar';

class AdminLogin extends Component {
    render() {
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <h1>AdminLogin PAGE</h1>
                <h2>AUTH0</h2>
                <a href='http://localhost:3333/auth'>
                    <Button>Login</Button>
                </a>
                <a href='http://localhost:3000'>
                    <Button>Go to PSAC's Website</Button>
                </a>
            </div>
        );
    }
}

export default AdminLogin;