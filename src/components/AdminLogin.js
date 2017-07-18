import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar';

class AdminLogin extends Component {
    render() {
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <h1>AdminLogin PAGE</h1>
                <h2>AUTH0</h2>
            </div>
        );
    }
}

export default AdminLogin;