import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './PSAC_logo.jpg'
import menu_bars from './menu.png'

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            display: 'none',
        }
        this.hamburger = this.hamburger.bind(this);
    }

    hamburger(){
        if(this.state.display === 'none'){
            this.setState({
                display: 'flex',
            })
        } else {
            this.setState({
                    display: 'none',
                })
        }
    }
    render() {
        return (
            <div style={{position: 'relative'}}>
                <div className="NavBar">
                    <Link to='/'><img src={logo} className='navbar_logo' alt="PSAC Utah Logo"/></Link>
                    <Link className='navbar_link' to='/treatmentoptions'>TREATMENT OPTIONS</Link>
                    <Link className='navbar_link' to='/faq'>FAQ</Link>
                    <Link className='navbar_link' to='/blog'>BLOG</Link>
                    <Link className='navbar_link' to='/contactus'>CONTACT US</Link>
                    {/* <Link to='/payments'>PAYMENTS</Link> */}
                    {/* <Link to='/news'>NEWS</Link> */}
                    <img    src={menu_bars} 
                            className='navbar_hamburger_icon' 
                            alt="menu bars"
                            onClick={this.hamburger}
                    />
                </div>
                <div style={{height: '10vh'}}></div> 
                <div style={{display: this.state.display}} className='navbar_hamburger'>
                    <Link className='navbar_hamburger_link' to='/treatmentoptions'>TREATMENT OPTIONS</Link>
                    <Link className='navbar_hamburger_link' to='/faq'>FAQ</Link>
                    <Link className='navbar_hamburger_link' to='/blog'>BLOG</Link>
                    <Link className='navbar_hamburger_link' to='/contactus'>COUNTACT US</Link>
                </div> 
            </div>
        );
    }
}

export default NavBar;