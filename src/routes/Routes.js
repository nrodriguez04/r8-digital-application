
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../components/LandingPage';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Privacy from '../pages/Privacy';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/about" component={About} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/privacy" component={Privacy} />
  </Switch>
)

export default Main;


