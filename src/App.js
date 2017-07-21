import React, { Component } from 'react';
// import Router from './components/Router'
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

          {/* <Route component={ News } path="/news" /> */}

          <Route path="/news" render={ () => <News name='john'/> }/>

          <Route component={ BlogPost } exact path="/blog/:postid" />
          <Route component={ Blog } path="/blog" />
          <Route component={ Payments } path="/payments" />
          <Route component={ FAQ } path="/faq" />
          <Route component={ ContactUs } path="/contactus" />
          <Route component={ TreatmentOptions } path="/treatmentoptions" />
          <Route component={ AdminLogin } path="/login" />
          <Route component={ AdminPage } path="/admin" />
          <Route component={ AdminNews } path="/adminnews" />
          <Route component={ AdminBlog } path="/adminblog" />
        </Switch>
         {/* {Router}  */}
      </div>
    );
  }
}

export default App;
