import React, { Component } from 'react';
import { withRouter, Redirect} from 'react-router-dom';
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
                redirect: false
            }

        }
        componentDidMount(){
            const URL = `/api/getblogpost/${this.props.match.params.postid}`;
            axios.get(URL).then(response=>{
                if(response.data[0]){
                    this.setState({
                        postid: response.data[0].postid,
                        post: response.data, 
                        postLoading: false
                    })
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
         if(this.props.loading === true){
            return (
                 <div>
                    <AdminNavBar className='NavBar'/>
                    <div style ={{marginBottom: '5px'}}className='mountain_div'>
                        <h1>PERSONAL SLEEP APNEA CARE</h1>              
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={loading} alt='Loading'/>
                    </div> 
                </div>    
            )
        }
          if(this.state.postLoading === true){
            return (
               <div>
                    <AdminNavBar className='NavBar'/>
                    <div style ={{marginBottom: '5px'}}className='mountain_div'>
                        <h1>PERSONAL SLEEP APNEA CARE</h1>              
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={loading} alt='Loading'/>
                    </div> 
                </div>    
            )
        }
        if(this.props.admin === false){
            return(
                <Redirect to='/login'/>
            )
        }
        return (
            <div>
                <AdminNavBar className='NavBar'/>
                <div style ={{marginBottom: '5px'}}className='mountain_div'>
                    <h1>PERSONAL SLEEP APNEA CARE</h1>              
                </div>
                 <div style={{display: 'flex', justifyContent: 'center'}} >   
                    <h1>Edit Post</h1>
                </div>
                <div className='posts'>
                     <EditQuill history={this.props.history}
                                author={this.props.author}
                                postid={this.state.postid}
                                title={this.state.post[0].title}
                                date={this.state.post[0].date}
                                teaser={this.state.post[0].teaser}
                                text={this.state.post[0].text}
                    
                    /> 
                </div>
                <div style={{height: '10vh'}}></div> 
            </div>
        );
    }
}

export default withRouter(AdminBlogEditPost);