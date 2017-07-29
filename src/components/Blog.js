import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

import NavBar from './NavBar';
import loading from './loading.gif'
import mountains from './mountains.jpg'


class Blog extends Component {

    constructor(){
        super();
        this.state = {
            posts: [],
            loading: true
        }
    }

    componentDidMount(){
        axios.get('/api/getblogposts').then(response=>{this.setState({posts: response.data, loading: false})})
    }

    render() {
          const displayPosts = this.state.posts.map( (posts, i) => {
            return (
                <div key={i} className='blog_div'>    
                    <h1 style ={{}}><Link to ={`/blog/${posts.postid}`} className='title_atag'>{posts.title}</Link></h1>
                    <h4>{posts.date}</h4>
                    <h4>{posts.teaser} <Link to ={`/blog/${posts.postid}`}>Read more --></Link></h4> 
                </div>
            );
        })

        if(this.state.loading === true){
            return (
                <div>
                    <NavBar className='NavBar'/>
                    <div className='mountain_div'>
                        <h1>PERSONAL SLEEP APNEA CARE</h1>
                        <h2>YOUR Sleep Apnea Specialist</h2>
                        <Link to='/contactus'>
                            <Button className='contact'>SCHEDULE YOUR CONSULTATION</Button>
                        </Link>                 
                    </div> 
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={loading} alt='Loading'/>
                    </div>    
                </div>    
            )
        }
        return (
            <div>
                <NavBar className='NavBar'/>
                <div style ={{marginBottom: '5px'}}className='mountain_div'>
                    <h1>PERSONAL SLEEP APNEA CARE</h1>
                    <h2>YOUR Sleep Apnea Specialist</h2>
                    <Link to='/contactus'>
                        <Button className='contact'>SCHEDULE YOUR CONSULTATION</Button>
                    </Link>                 
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}} >   
                    <h1>BLOG</h1>
                </div>
                <div className='posts'>
                    {displayPosts}
                </div>    
            </div>
        );
    }
}

export default Blog;