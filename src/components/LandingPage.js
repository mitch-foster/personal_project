import React, { Component } from 'react';
import NavBar from './NavBar';
import {Button} from 'react-bootstrap';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar className='NavBar'/>
                <h1>LANDING PAGE</h1>
                <h2>ABOUT US INFO</h2>
                <Button>Button</Button>
            </div>
        );
    }
}

export default LandingPage;