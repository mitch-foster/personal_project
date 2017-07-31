import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

import NavBar from './NavBar';
import question_mark from './question_mark.png'
import treatment_options from './treatment_options.png'
import smartphone from './smartphone.png'

class LandingPage extends Component {
    render() {
        return (
            <div id='landing_page'>
                <NavBar/>
                <div className='mountain_div_landing_page'>
                    <h1>PERSONAL SLEEP APNEA CARE</h1>
                    <h2>Your Sleep Apnea Specialist</h2>
                    <Link to='/contactus'>
                        <Button className='contact'>SCHEDULE YOUR CONSULTATION</Button>
                    </Link>
                </div>
                <div style={{textAlign: 'center'}} className='landing_div'>
                    <h2 style={{fontWeight: '500'}}>Welcome to Personal Sleep Apnea Care</h2>
                </div>
                <div className='welcome_text' style={{width: '75vw', marginLeft: '12.5vw', marginBottom: '75px'}}>
                    <h3>Sit ex enim magna ipsum excepteur. Non esse nostrud occaecat exercitation. Mollit velit consequat Lorem quis ad officia tempor cupidatat deserunt laborum est qui eiusmod deserunt. Commodo aliquip Lorem est duis pariatur ex exercitation deserunt enim. Voluptate in exercitation do non. Excepteur ut excepteur eiusmod excepteur id quis laborum cillum magna deserunt pariatur in. Tempor excepteur proident id pariatur non in qui mollit amet ex nisi laboris laboris ea.</h3>
                    <h3>Sit ex enim magna ipsum excepteur. Non esse nostrud occaecat exercitation. Mollit velit consequat Lorem quis ad officia tempor cupidatat deserunt laborum est qui eiusmod deserunt. Commodo aliquip Lorem est duis pariatur ex exercitation deserunt enim. Voluptate in exercitation do non. Excepteur ut excepteur eiusmod excepteur id quis laborum cillum magna deserunt pariatur in. Tempor excepteur proident id pariatur non in qui mollit amet ex nisi laboris laboris ea.</h3>
                    <h3>Sit ex enim magna ipsum excepteur. Non esse nostrud occaecat exercitation. Mollit velit consequat Lorem quis ad officia tempor cupidatat deserunt laborum est qui eiusmod deserunt. Commodo aliquip Lorem est duis pariatur ex exercitation deserunt enim. Voluptate in exercitation do non. Excepteur ut excepteur eiusmod excepteur id quis laborum cillum magna deserunt pariatur in. Tempor excepteur proident id pariatur non in qui mollit amet ex nisi laboris laboris ea.</h3> 
                </div>
                <div style={{textAlign: 'center', marginBottom: '50px'}} className='landing_div'>
                    <h1 style={{fontWeight: '500'}}>Learn More</h1>
                </div>
                <div className='main_navagation'>
                    <div className='navagation_div'>
                        <img src={question_mark} alt="question mark"/>
                        <Link to='/faq'>
                            <Button>Frequent Questions</Button>
                        </Link>
                    </div>
                    <div className='navagation_div'>
                        <img src={treatment_options} alt="treatment options"/>
                        <Link to='/treatmentoptions'>
                            <Button>Treatment Options</Button>
                        </Link>
                    </div>
                    <div className='navagation_div'>
                        <img src={smartphone} alt="phone"/>
                        <Link to='/contactus'>
                            <Button>Contact Us</Button>
                        </Link>
                    </div>
                </div>
                <div style={{height: '10vh'}}></div> 
            </div>
        );
    }
}

export default LandingPage;