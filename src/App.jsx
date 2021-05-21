import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import MisterBitCoinApp from './pages/MisterBitCoinApp/';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { ContactDetailsPage } from './pages/ContactDetailsPage/ContactDetailsPage';
import { ContactEditPage } from './pages/ContactEditPage/ContactEditPage';
import { SignupPage } from './pages/SignupPage/SignupPage';

import "./assets/styles/global.scss";

export function App() {
  const PrivateRoute = (props) => {
    return props.isUserLoggedIn? <Route {...props} /> : <Redirect to="/" />
  }
  return (
    <div className="app">
      <Router>
        <AppHeader />
          <Switch>
            <Route path="/signup" component={ SignupPage } />
            <Route path="/contact/edit/:id?" component={ ContactEditPage } />
            <Route path="/contact/:id" render={ props => <ContactDetailsPage { ...props }  /> } />
            <PrivateRoute isUserLoggedIn={ true } path="/contact" component={ ContactPage } />
            <Route path="/" component={ MisterBitCoinApp } />
          </Switch> 
      </Router>
    </div>
  );
}
