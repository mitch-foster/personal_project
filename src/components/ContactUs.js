import React, { Component } from 'react';
import NavBar from './NavBar';

class ContactUs extends Component {
    render() {
        return (
            <div>
                <NavBar className='NavBar'/>
                <h1>CONTACT US PAGE</h1>
                <p>Email PSAC at <a href="mailto:carol@psacutah.com">Carol@PSACUTAH.com</a></p>
            </div>
        );
    }
}

export default ContactUs;