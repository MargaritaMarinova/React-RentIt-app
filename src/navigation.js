import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import HomePage from './pages/home'
import ItemsPage from './pages/items'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import ProfilePage from './pages/profile'
import LogoutPage from './pages/logout'
import CreatePage from './pages/create'
import CheckoutPage from './pages/checkout'
import ThankyouPage from './pages/thankyou'



const Navigation = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/items" component={ItemsPage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile/:userid" component={ProfilePage} />
        <Route path="/logout" component={LogoutPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/thankyou" component={ThankyouPage} />
        
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation