import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar';
import NavBar from './NavBar';

class AdminPage extends Component {
    render() {
        console.log(this.props.admin)
        if(this.props.admin === false){
            return(
                <div>
                    <NavBar className='NavBar'/>
                    <h1>AdminPage PAGE</h1>
                    <h2>NOT ADMIN</h2>
            </div>
            )
        }
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <h1>AdminPage PAGE</h1>
            </div>
        );
    }
}

export default AdminPage;