import React, { Component } from 'react';
import NavBar from './NavBar';

class News extends Component {
    render() {
        return (
            <div>
                <NavBar className='NavBar'/>
                <h1>NEWS PAGE</h1>
            </div>
        );
    }
}

export default News;