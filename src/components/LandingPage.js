import React, { Component } from 'react';
import NavBar from './NavBar';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar className='NavBar'/>
                <h1>LANDING PAGE</h1>
                <h2>ABOUT US INFO</h2>
            </div>
        );
    }
}

export default LandingPage;