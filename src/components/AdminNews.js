import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar';
import NavBar from './NavBar';

class AdminNews extends Component {
    render() {
        if(this.props.admin === false){
            return(
                <div>
                    <NavBar className='NavBar'/>
                    <h1>AdminNews PAGE</h1>
                    <h2>NOT ADMIN</h2>
            </div>
            )
        }
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <h1>AdminNews PAGE</h1>
            </div>
        );
    }
}

export default AdminNews;