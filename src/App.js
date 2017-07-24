import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

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
import AdminNews from './components/AdminNews';
import AdminBlog from './components/AdminBlog';


import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false
    }
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
          <Route path="/admin" render={ () => <AdminPage admin={this.state.loggedIn}/>}/>
          <Route path="/adminblog" render={ () => <AdminBlog admin={this.state.loggedIn}/>} />
          <Route path="/adminnews" render={ () => <AdminNews admin={this.state.loggedIn}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
