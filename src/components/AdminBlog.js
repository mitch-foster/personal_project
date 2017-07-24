import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar';
import NavBar from './NavBar';
import loading from './loading.gif';

class AdminBlog extends Component {
    render() {
         if(this.props.loading === true){
            return (
                <div>
                    <AdminNavBar className='NavBar'/>
                     <img src={loading} alt='Loading'/>
                </div>    
            )
        }
        if(this.props.admin === false){
            return(
                <div>
                    <NavBar className='NavBar'/>
                    <h1>AdminBlog PAGE</h1>
                    <h2>NOT ADMIN</h2>
            </div>
            )
        }
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <h1>AdminBlog PAGE</h1>
            </div>
        );
    }
}

export default AdminBlog;