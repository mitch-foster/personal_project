import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import loading from './loading.gif'


class Blog extends Component {

    constructor(){
        super();
        this.state = {
            posts: [],
            loading: true
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3333/api/getblogposts').then(response=>{this.setState({posts: response.data, loading: false})})
    }

    render() {
          const displayPosts = this.state.posts.map( (posts, i) => {
            return (
                <div key={i} className='blog_div'>    
                    <h1><Link to ={`/blog/${posts.postid}`} className='title_atag'>{posts.title}</Link></h1>
                    <h4>{posts.date}</h4>
                    <h4>{posts.text.slice(0,300)}. . . <Link to ={`/blog/${posts.postid}`}>Read more</Link></h4>
                </div>
            );
        })

        if(this.state.loading === true){
            return (
                <div>
                    <NavBar className='NavBar'/>
                     <img src={loading}/>
                </div>    
            )
        }
        return (
            <div>
                <NavBar className='NavBar'/>
                <h1>BLOG PAGE</h1>
                {displayPosts}

            </div>
        );
    }
}

export default Blog;