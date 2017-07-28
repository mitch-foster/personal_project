import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import axios from 'axios';

import LandingPage from './components/LandingPage';
import News from './components/News';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import FAQ from './components/FAQ';
import Payments from './components/Payments';
import ContactUs from './components/ContactUs';
import TreatmentOptions from './components/TreatmentOptions';
import AdminPage from './components/AdminPage';
import AdminLogin from './components/AdminLogin';
import AdminBlog from './components/AdminBlog';
import AdminBlogPost from './components/AdminBlogPost';
import AdminBlogCreatePost from './components/AdminBlogCreatePost';
import AdminBlogEditPost from './components/AdminBlogEditPost';
import AdminNews from './components/AdminNews';


import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // admin: false,
      // author: null,
      // loading: true,
      admin: true,
      author: 1,
      loading: false,
    }
  }

componentDidMount(){
  // axios.get('/auth/me')
  //   .then( response => {
  //     response.data[0].admin === true ? this.setState({admin: true, author: response.data[0].id, loading: false}) : this.setState({admin: false, author: response.data[0].id, loading: false})
  //   }
  // )
}

  render() {
    return (
      <div>
        <Switch>
          <Route component={ LandingPage } exact path="/" />
          <Route component={ News } path="/news" /> 
          <Route component={ BlogPost } exact path="/blog/:postid" />
          <Route component={ Blog } path="/blog" />
          <Route component={ Payments } path="/payments" />
          <Route component={ FAQ } path="/faq" />
          <Route component={ ContactUs } path="/contactus" />
          <Route component={ TreatmentOptions } path="/treatmentoptions" />
          <Route component={ AdminLogin } path="/login" />
          <Route path="/admin" render={ () => <AdminPage admin={this.state.admin} loading={this.state.loading}/>}/>
          <Route exact path="/adminblog/:postid" render={ (props) => <AdminBlogPost {...props} admin={this.state.admin} loading={this.state.loading}/>} />
          <Route exact path="/adminblogcreatepost" render={ () => <AdminBlogCreatePost admin={this.state.admin} loading={this.state.loading} author={this.state.author}/>} />
          <Route exact path="/adminblogeditpost/:postid" render={ () => <AdminBlogEditPost admin={this.state.admin} loading={this.state.loading} author={this.state.author}/>} />
          <Route path="/adminblog" render={ () => <AdminBlog admin={this.state.admin} loading={this.state.loading}/>} />
          <Route path="/adminnews" render={ () => <AdminNews admin={this.state.admin} loading={this.state.loading}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
