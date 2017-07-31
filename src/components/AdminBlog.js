import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import {Button} from 'react-bootstrap';

import AdminNavBar from './AdminNavBar';
import NavBar from './NavBar';
import loading from './loading.gif';




class AdminBlog extends Component {
     constructor(){
        super();
        this.state = {
            posts: [],
            loading: true
        }
        this.getBlogPosts = this.getBlogPosts.bind(this);
    }

    componentDidMount(){
        this.getBlogPosts();
    }

    getBlogPosts() {
        axios.get('/api/getblogposts').then(response=>{this.setState({posts: response.data, loading: false})})
    }

    render() {
        const displayAdminPosts = this.state.posts.map( (posts, i) => {
            return (
                <div key={i} className='blog_div'>    
                    <h1><Link to ={`/adminblog/${posts.postid}`} className='title_atag'>{posts.title}</Link></h1>
                    <h4>{posts.date}</h4>
                    <h4>{posts.teaser} <Link to ={`/adminblog/${posts.postid}`}>Read more --></Link></h4>
                </div>
            );
        })

        if(this.props.admin === false){
            return(
                <Redirect to='/login'/>
            )
        }
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
        if(this.state.loading === true){
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
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <div style ={{marginBottom: '5px'}}className='mountain_div'>
                        <h1>PERSONAL SLEEP APNEA CARE</h1>              
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}} >   
                    <h1>BLOG</h1>
                </div>
                <div className='posts'>
                    <div>
                        <Link to = '/adminblogcreatepost'>
                            <Button>New Post</Button>
                        </Link>
                    </div>
                    {displayAdminPosts}
                </div>
                <div style={{height: '10vh'}}></div> 
            </div>
        );
    }
}

export default AdminBlog;