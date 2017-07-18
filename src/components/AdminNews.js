import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar';

class AdminNews extends Component {
    render() {
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <h1>AdminNews PAGE</h1>
            </div>
        );
    }
}

export default AdminNews;