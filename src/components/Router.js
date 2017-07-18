import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import News from './News';
import Blog from './Blog';
import FAQ from './FAQ';
import Payments from './Payments';
import ContactUs from './ContactUs';
import TreatmentOptions from './TreatmentOptions';

export default (
  <Switch>
    <Route component={ LandingPage } exact path="/" />
    <Route component={ News } path="/news" />
    <Route component={ Blog } path="/blog" />
    <Route component={ Payments } path="/payments" />
    <Route component={ FAQ } path="/faq" />
    <Route component={ ContactUs } path="/contactus" />
    <Route component={ TreatmentOptions } path="/treatmentoptions" />
  </Switch>
)