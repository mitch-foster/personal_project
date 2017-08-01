import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

import NavBar from './NavBar';

class FAQ extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <NavBar className='NavBar'/>
                <div style ={{marginBottom: '5px'}}className='mountain_div'>
                    <h1>PERSONAL SLEEP APNEA CARE</h1>
                    <h2>Your Sleep Apnea Specialist</h2>
                    <Link to='/contactus'>
                        <Button className='contact'>SCHEDULE YOUR CONSULTATION</Button>
                    </Link>                 
                </div>
                <div className='faq'>   
                    <h1 style={{textAlign: 'center', marginBottom: '3vh'}}>Frequent Questions</h1>
                    <div style={{width: '60vw'}}>
                        <h2>How do I know if I have sleep apnea?</h2>
                            <h3>Snoring and waking frequently to use the bathroom are 
                                signs that you have sleep apnea.  Often partners know more about symptoms than you do.  
                                Sleep Apnea is connected to many cormobidities such as High Blood Pressure, Diabetes, Hypertension, 
                                Stroke, Obesity, Gastroenteritis. 
                            </h3>
                        <h2>How do I get tested for sleep apnea?</h2>
                            <h3>PSAC will supply you with a 2 night home sleep test done in the comfort of your own home.</h3>  
                        <h2>Does Insurance cover Sleep Apnea?</h2> 
                        <h3>Although every insurance is different, most insurance companies have a sleep apnea allowable.
                            PSAC will help you understand all of the options available to you. 
                            Payment programs are also available. 
                        </h3> 
                        <h2>How do you treat sleep apnea?</h2> 
                        <h3>Treatment for sleep apnea is very individual but could include a CPAP, BIPAP. 
                            Oral Appliance and even a combination of treatments.
                            PSAC will help you understand all options that are available. 
                        </h3>
                    </div>
                </div>
                <div style={{height: '10vh', display: 'flex', justifyContent: 'center'}}>
                    <h4 style={{textAlign: 'center', alignSelf: 'center'}}>
                        Do you still have unanswered questions? Schedule a <Link to='/contactus'>complimentary consultation</Link> to get answers, get tested, or explore your best treatment option.
                    </h4>
                </div>  
            </div>
        );
    }
}

export default FAQ;