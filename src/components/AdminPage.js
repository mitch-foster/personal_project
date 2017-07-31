import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import AdminNavBar from './AdminNavBar';
import NavBar from './NavBar';
import loading from './loading.gif';
import blog from './blog.png';

class AdminPage extends Component {
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
                 <div style ={{marginBottom: '5px'}}className='mountain_div'>
                    <h1>PERSONAL SLEEP APNEA CARE</h1>              
                </div>
                <div className='admin'>
                    <div className='admin_navagation_div'>
                        <Link to='/adminblog'>
                            <img src={blog} alt="blog"/>
                        </Link>
                        <h3 style={{textAlign: 'center'}}>Blog</h3>
                    </div>
                </div>    
            </div>
        );
    }
}

export default AdminPage;