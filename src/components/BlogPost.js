import React, { Component } from 'react';
import NavBar from './NavBar';

class BlogPost extends Component {
        constructor(props){
            super(props);
            this.state = {
                postId = this.props.params.postId,
                post = []
            }

        }
    render() {
        return (
            <div>
                <NavBar className='NavBar'/>
                <div className='blog_div'>    
                    <h1>{post[0].title}</h1>
                    <h4>{post[0].date}</h4>
                    <h4>{post[0].text}</h4>
                </div>
            </div>
        );
    }
}

export default BlogPost;