import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import MisterBitCoinApp from './pages/MisterBitCoinApp/';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { ContactDetailsPage } from './pages/ContactDetailsPage/ContactDetailsPage';
import { ContactEditPage } from './pages/ContactEditPage/ContactEditPage';

import "./assets/styles/global.scss";

export function App() {
  return (
    <div className="app">
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/contact/edit/:id?" component={ ContactEditPage } />
          <Route path="/contact/:id" render={ props => <ContactDetailsPage { ...props }  /> } />
          <Route path="/contact" component={ ContactPage } />
          <Route path="/" component={ MisterBitCoinApp } />
        </Switch>
      </Router>
    </div>
    // <React.Fragment>
    //   <MisterBitCoinApp />
    // </React.Fragment>
  );
}
