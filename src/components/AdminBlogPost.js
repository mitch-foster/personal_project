import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import {Button} from 'react-bootstrap';

import AdminNavBar from './AdminNavBar';
import loading from './loading.gif';


class AdminBlogPost extends Component {
        constructor(props){
            super(props);
            this.state = {
                postid: null,
                post: [],
                postLoading: true,
                redirect: false
            }
        this.deletePost = this.deletePost.bind(this)
        }
        deletePost(){
            axios.delete('/api/deleteblogpost', {data:{postid: this.state.postid}}).then(response => {
                this.props.history.push('/adminblog')
            })
        }
        componentDidMount(){
            const URL = `/api/getblogpost/${this.props.match.params.postid}`;
            axios.get(URL).then(response=>{
                if(response.data[0]){
                    this.setState({
                    postid: response.data[0].postid,
                    post: response.data, 
                    postLoading: false})
                } else this.setState({
                    postLoading: false,
                    redirect: true,
                })
            })
            
        }
        
    render() {
        if(this.state.redirect === true){
            return (
                <Redirect to='/adminblog'/>
            )
        }
        if(this.state.postLoading === true){
            return (
                <div>
                    <AdminNavBar className='NavBar'/>
                    <img src={loading} alt='Loading'/>
                </div>    
            )
        }
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <div className='blog_div'>
                    <div>
                        <Link to={`/adminblogeditpost/${this.props.match.params.postid}`}>
                            <Button>Edit Post</Button>   
                        </Link> 
                        <Button onClick={this.deletePost}>Delete Post</Button>    

                    </div>
                    <h1>{this.state.post[0].title}</h1>
                    <h4>{this.state.post[0].date}</h4>
                    <h4>{this.state.post[0].text}</h4>
                </div>
            </div>
        );
    }
}

export default AdminBlogPost;