import React, { Component } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';
import loading from './loading.gif';


class BlogPost extends Component {
        constructor(props){
            super(props);
            this.state = {
                postid: this.props.match.params.postid,
                post: [],
                postLoading: true,
            }

        }
        componentDidMount(){
            const URL = `/api/getblogpost/${this.props.match.params.postid}`;
            axios.get(URL).then(response=>{this.setState({post: response.data, postLoading: false})})
        }
        
    render() {
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
                    <h1>{this.state.post[0].title}</h1>
                    <h4>{this.state.post[0].date}</h4>
                    <h4>{this.state.post[0].text}</h4>
                </div>
            </div>
        );
    }
}

export default BlogPost;