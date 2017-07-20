import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import News from './News';
import Blog from './Blog';
import BlogPost from './BlogPost';
import FAQ from './FAQ';
import Payments from './Payments';
import ContactUs from './ContactUs';
import TreatmentOptions from './TreatmentOptions';
import AdminPage from './AdminPage';
import AdminLogin from './AdminLogin';
import AdminNews from './AdminNews';
import AdminBlog from './AdminBlog';

export default (
  <Switch>
    <Route component={ LandingPage } exact path="/" />
    <Route component={ News } path="/news" />
    <Route component={ BlogPost } exact path="/blog/:postid" />
    <Route component={ Blog } path="/blog" />
    <Route component={ Payments } path="/payments" />
    <Route component={ FAQ } path="/faq" />
    <Route component={ ContactUs } path="/contactus" />
    <Route component={ TreatmentOptions } path="/treatmentoptions" />
    <Route component={ AdminPage } path="/admin" />
    <Route component={ AdminLogin } path="/login" />
    <Route component={ AdminNews } path="/adminnews" />
    <Route component={ AdminBlog } path="/adminblog" />
  </Switch>
)