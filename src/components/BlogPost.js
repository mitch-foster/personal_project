import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
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
                    <img src={loading} alt='Loading'/>
                </div>    
            )
        }
        return (
            <div>
                <NavBar className='NavBar'/>
                <div className='blog_div'>    
                    <h1>{this.state.post[0].title}</h1>
                    <h2>{this.state.post[0].teaser}</h2>
                    <h4>{this.state.post[0].date}</h4>
                    <div dangerouslySetInnerHTML={{__html: this.state.post[0].text}}></div>
                </div>
            </div>
        );
    }
}

export default BlogPost;