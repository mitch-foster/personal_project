import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import AdminNavBar from './AdminNavBar';
import NavBar from './NavBar';
import CreateQuill from './CreateQuill';
import loading from './loading.gif';




class AdminBlogCreatePost extends Component {
    render() {
         if(this.props.loading === true){
            return (
                 <div>
                    <AdminNavBar className='NavBar'/>
                    <div style ={{marginBottom: '5px'}}className='mountain_div'>
                        <h1>PERSONAL SLEEP APNEA CARE</h1>              
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={loading} alt='Loading'/>
                    </div> 
                </div>    
            )
        }
        if(this.props.admin === false){
            return(
                <Redirect to='/login'/>
            )
        }
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <div style ={{marginBottom: '5px'}}className='mountain_div'>
                    <h1>PERSONAL SLEEP APNEA CARE</h1>              
                </div>
                 <div style={{display: 'flex', justifyContent: 'center'}} >   
                    <h1>New Post</h1>
                </div>
                <div className='posts'>
                    <CreateQuill    author={this.props.author}
                                    history={this.props.history}
                    />
                </div>
                <div style={{height: '10vh'}}></div> 
            </div>
        );
    }
}

export default withRouter(AdminBlogCreatePost);