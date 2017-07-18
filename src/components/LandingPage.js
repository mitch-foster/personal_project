import React, { Component } from 'react';
import NavBar from './NavBar';
import {Button} from 'react-bootstrap'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar className='NavBar'/>
                <div className='mountain_div'>
                    <h1>PERSONAL SLEEP APNEA CARE</h1>
                    <h2>YOUR Sleep Apnea Specialist</h2>
                    <h2>Mission Statement</h2>
                    <Button className='contact'>CONTACT PSAC TO SCHEDULE YOUR CONSULTATION</Button>
                </div>
                <div className='home_navagation'>
                    <div className='navagation_div'>FAQ</div>
                    <div className='navagation_div'>Treatment Options</div>
                    <div className='navagation_div'>Contact Us</div>
                </div>
            </div>
        );
    }
}

export default LandingPage;