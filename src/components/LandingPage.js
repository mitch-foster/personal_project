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
                    <Link to='/contactus'>
                        <Button className='contact'>SCHEDULE YOUR CONSULTATION</Button>
                    </Link>
                </div>
                    <h2>Veniam tempor enim sint labore dolor dolore enim reprehenderit quis fugiat nostrud aliqua. Ipsum ea deserunt consectetur occaecat. Deserunt officia aute non qui magna et.</h2>
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