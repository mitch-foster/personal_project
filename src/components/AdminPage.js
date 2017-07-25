import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar';
import NavBar from './NavBar';
import loading from './loading.gif';

class AdminPage extends Component {
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
                    <h1>AdminPage PAGE</h1>
                    <h2>NOT ADMIN</h2>
            </div>
            )
        }
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <h1>AdminPage PAGE</h1>
                <div className='admin_page_div'>
                    <div className='navagation_div'><h3>Blog Entries</h3></div>
                    <div className='navagation_div'><h3>News Articles</h3></div>
                </div>
            </div>
        );
    }
}

export default AdminPage;