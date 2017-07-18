import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar';

class AdminBlog extends Component {
    render() {
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <h1>AdminBlog PAGE</h1>
            </div>
        );
    }
}

export default AdminBlog;