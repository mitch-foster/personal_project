import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

import NavBar from './NavBar';


class TreatmentOptions extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <NavBar/>
                 <div style ={{marginBottom: '5px'}}className='mountain_div'>
                    <h1>PERSONAL SLEEP APNEA CARE</h1>
                    <h2>Your Sleep Apnea Specialist</h2>
                    <Link to='/contactus'>
                        <Button className='contact'>SCHEDULE YOUR CONSULTATION</Button>
                    </Link>                 
                </div>
                <div className='treatment_options'>   
                    <h1 style={{textAlign: 'center'}}>TREATMENT OPTIONS</h1>
                    <div style={{width: '60vw'}}>
                        <h4 style={{textAlign: 'center'}}>Here at PSAC we believe in custom treatment. At your free consoltation we will explore which method of treatment will help you get your best sleep.</h4>
                    </div>
                </div>
                <div className='treatment'>   
                    <div className='treatment_image_appliance'></div>
                    <div className='treatment_description'>
                        <h2 style={{alignSelf: 'center'}}>Oral Applaince</h2>
                        <h3 style={{textAlign: 'center'}}>Description of the Treatment 1. Description of the Treatment 1. Description of the Treatment 1. Description of the Treatment 1.</h3>
                        <h3 style={{paddingLeft: '2vw'}}>Pros</h3>
                        <ul style={{paddingLeft: '5vw'}}>
                            <li><h3>reason 1</h3></li>
                            <li><h3>reason 2</h3></li>
                            <li><h3>reason 3</h3></li>
                        </ul>
                    </div>
                </div>
                <div className='treatment'>   
                    <div className='treatment_image_mask'></div>
                    <div className='treatment_description'>
                        <h2 style={{alignSelf: 'center'}}>CPAP Oxygen Mask</h2>
                        <h3>Description of the Treatment 2. Description of the Treatment 2. Description of the Treatment 2. Description of the Treatment 2.</h3>
                        <h3 style={{paddingLeft: '2vw'}}>Pros</h3>
                        <ul style={{paddingLeft: '5vw'}}>
                            <li><h3>reason 1</h3></li>
                            <li><h3>reason 2</h3></li>
                            <li><h3>reason 3</h3></li>
                        </ul>
                    </div>
                </div>
                <div style={{height: '10vh', display: 'flex', justifyContent: 'center'}}><h4 style={{textAlign: 'center', alignSelf: 'center'}}>Schedule a <Link to='/contactus'>complimentary consoltation</Link> to explore your best treatment option.</h4></div>  
            </div>
        );
    }
}

export default TreatmentOptions;