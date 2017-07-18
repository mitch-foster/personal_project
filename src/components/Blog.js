import React, { Component } from 'react';
import NavBar from './NavBar';

class Blog extends Component {
    render() {
        return (
            <div>
                <NavBar className='NavBar'/>
                <h1>BLOG PAGE</h1>
            </div>
        );
    }
}

export default Blog;