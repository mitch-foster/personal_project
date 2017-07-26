import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import {Button} from 'react-bootstrap'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className='mountain_div'>
                    <h1>PERSONAL SLEEP APNEA CARE</h1>
                    <h2>YOUR Sleep Apnea Specialist</h2>
                    <h2>Mission Statement</h2>
                    <Link to='/contactus'>
                        <Button className='contact'>CONTACT PSAC TO SCHEDULE YOUR CONSULTATION</Button>
                    </Link>
                </div>
                <div className='main_navagation'>
                    <div className='navagation_div'>FAQ</div>
                    <div className='navagation_div'>Treatment Options</div>
                    <div className='navagation_div'>Contact Us</div>
                </div>
            </div>
        );
    }
}

export default LandingPage;