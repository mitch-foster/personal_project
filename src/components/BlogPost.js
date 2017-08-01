import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import {Button} from 'react-bootstrap';
 
import NavBar from './NavBar';
import loading from './loading.gif';


class BlogPost extends Component {
        constructor(props){
            super(props);
            this.state = {
                postid: this.props.match.params.postid,
                post: [],
                loading: true,
                redirect: false
            }

        }
        componentDidMount(){
            const URL = `/api/getblogpost/${this.props.match.params.postid}`;
            axios.get(URL).then(response=>{
                if(response.data[0]){
                    this.setState({
                        post: response.data, 
                        loading: false
                    })
                } else this.setState({
                    loading: false,
                    redirect: true,
                })
            })
        }
        
    render() {
        if(this.state.redirect === true){
            return (
                <Redirect to='/blog'/>
            )
        }
        if(this.state.loading === true){
            return (
              <div>
                    <NavBar className='NavBar'/>
                    <div className='mountain_div'>
                        <h1>PERSONAL SLEEP APNEA CARE</h1>
                        <h2>Your Sleep Apnea Specialist</h2>
                        <Link to='/contactus'>
                            <Button className='contact'>SCHEDULE YOUR CONSULTATION</Button>
                        </Link>                 
                    </div> 
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={loading} alt='Loading'/>
                    </div>    
                </div>    
            )
        }
        return (
            <div>
                <NavBar className='NavBar'/>
                 <div className='mountain_div'>
                     <h1>PERSONAL SLEEP APNEA CARE</h1>
                    <h2>Your Sleep Apnea Specialist</h2>
                    <Link to='/contactus'>
                        <Button className='contact'>SCHEDULE YOUR CONSULTATION</Button>
                    </Link>                 
                </div>  
                <div className='posts'>  
                    <div className='blog_div'> 
                        <h1 style={{alignSelf: 'center', fontWeight: '700', textAlign: 'center'}}>{this.state.post[0].title}</h1>
                        <h4 style={{alignSelf: 'center'}}>{this.state.post[0].date}</h4>
                        <h4>{this.state.post[0].teaser}</h4>
                        <div dangerouslySetInnerHTML={{__html: this.state.post[0].text}}></div>
                    </div>
                </div>
                <div style={{height: '10vh', display: 'flex', justifyContent: 'center'}}><h4 style={{textAlign: 'center', alignSelf: 'center'}}>Want to learn more? <Link to='/contactus'>Contact us</Link> for more info.</h4></div>  
            </div>
        );
    }
}

export default BlogPost;