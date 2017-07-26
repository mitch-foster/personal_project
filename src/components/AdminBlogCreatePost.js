import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import AdminNavBar from './AdminNavBar';
import NavBar from './NavBar';
import CreateQuill from './CreateQuill';
import loading from './loading.gif';




class AdminBlogCreatePost extends Component {
    render() {
        console.log('HST', this.props.history)
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
                <h1>AdminBlogCreatePost PAGE</h1>
                <div>
                    <CreateQuill    author={this.props.author}
                                    history={this.props.history}
                    />
                </div>
                
            </div>
        );
    }
}

export default withRouter(AdminBlogCreatePost);