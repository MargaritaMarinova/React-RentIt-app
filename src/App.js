import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageLayout from './components/page-layout';
import HomePage from './pages/home'
import ItemsPage from './pages/items'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import ProfilePage from './pages/profile'
import Logout from './components/logout/logout'
import CreatePage from './pages/create'
import CheckoutPage from './pages/checkout'
import ThankyouPage from './pages/thankyou'




class App extends Component {
    render () {
      return (
        <div>
          <PageLayout>
          <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/items" component={ItemsPage} />
          <Route path="/create" component={CreatePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile/:userid" component={ProfilePage} />
          <Route path="/logout" component={Logout} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/thankyou" component={ThankyouPage} />
        
          </Switch>
          </PageLayout>
        </div>
      );
    }
  }

export default App
