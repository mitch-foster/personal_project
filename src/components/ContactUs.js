import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

import NavBar from './NavBar';
import smartphone from './smartphone.png';
import email from './email.png';
import office from './office.png';

class ContactUs extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <NavBar className='NavBar'/>
               
                <div className='mountain_div'>
                    <h1>PERSONAL SLEEP APNEA CARE</h1>
                    <h2>Your Sleep Apnea Specialist</h2>
                    {/* <Button className='contact'
                            onClick={()=> {window.scrollTo(500,0); console.log('click')}}
                    >
                        SCHEDULE YOUR CONSULTATION
                    </Button> */}
                </div> 
                <h1 style={{textAlign: 'center', marginBottom: '3vh'}}>Contact Us</h1>
                 <div className='contact_us'>
                    <div className='navagation_div'>
                        <img src={smartphone} alt="phone"/>
                        <h4 style={{textAlign: 'center'}}>Call or Text PSAC at <a href="tel:801-602-1121">(801) 602-1121</a></h4>
                    </div>
                    <div className='navagation_div'>
                        <img src={email} alt="email"/>
                        <h4 style={{textAlign: 'center'}}>Email PSAC at <a href="mailto:carol@psacutah.com">Carol@PSACUTAH.com</a></h4>
                    </div>
                </div>
                <div className='contact_us_office'>
                    <div>
                        <img src={office} alt="office"/>
                        <h2>Office</h2>
                        <h4>Hours: Monday-Friday 9am to 5pm</h4>
                        <h4>By Appointment</h4>
                    </div>    
                </div>
                <div style={{height: '10vh'}}></div> 
            </div>
        );
    }
}

export default ContactUs;