import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar';

class AdminPage extends Component {
    render() {
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <h1>AdminPage PAGE</h1>
            </div>
        );
    }
}

export default AdminPage;