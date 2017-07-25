import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import AdminNavBar from './AdminNavBar';
import NavBar from './NavBar';
import EditQuill from './EditQuill';
import loading from './loading.gif';


class AdminBlogEditPost extends Component {
    constructor(props){
            super(props);
            this.state = {
                postid: null,
                post: [],
                postLoading: true,
            }

        }
        componentDidMount(){
            const URL = `/api/getblogpost/${this.props.match.params.postid}`;
            axios.get(URL).then(response=>{
                this.setState({
                    postid: response.data[0].postid,
                    post: response.data, 
                    postLoading: false
                })
            })
        }
    render() {
         if(this.props.loading === true){
            return (
                <div>
                    <AdminNavBar className='NavBar'/>
                     <img src={loading} alt='Loading'/>
                </div>    
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
        if(this.props.admin != true){
            return(
                <div>
                    <NavBar className='NavBar'/>
                    <h1>AdminBlog PAGE</h1>
                    <h2>NOT ADMIN</h2>
            </div>
            )
        }
        console.log("DATA", this.state.post);
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <h1>AdminBlogEditPost PAGE</h1>
                <div>
                     <EditQuill  author={this.props.author}
                                postid={this.state.postid}
                                title={this.state.post[0].title}
                                date={this.state.post[0].date}
                                text={this.state.post[0].text}
                    
                    /> 
                </div>
                
            </div>
        );
    }
}

export default withRouter(AdminBlogEditPost);