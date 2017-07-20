import React, { Component } from 'react';
import NavBar from './NavBar';
import axios from 'axios'

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
                    <h1>{posts.title}</h1>
                    <h4>{posts.date}</h4>
                    <h4>{posts.text.slice(0,300)}. . . <a>Read more</a></h4>
                </div>
            );
        })

        if(this.state.loading === false){
            console.log(this.state.posts)
            console.log(this.state.posts[1].title)
        }

        if(this.state.loading === true){
            return (
                <div>
                    <NavBar className='NavBar'/>
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