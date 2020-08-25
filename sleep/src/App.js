import React from 'react';
import {Route,  Link} from 'react-router-dom'
import './App.css';
import SleepApp from './SleepApp'

import LoginApp from './LoginApp'
import RegistrationApp from './RegistrationApp'
import image from "./Assets/undraw_sleep_analysis_o5f9.svg"

const App = () => {
  return (
    <>
      <nav className="navbar">
         <button><Link to="/">Home</Link></button>
        <button><Link to="/sleep">Tracker</Link></button>
      </nav>
      <h1>Weekly Sleep Tracker</h1>
      <button><Link to="/newmember">Register</Link></button>
      <button><Link to="/login">Login</Link></button>
      <img src={image} alt= "pizza"></img>
      <Route  exact path="/sleep" component={SleepApp}/>
      <Route exact path="/login" component={LoginApp}/>
      <Route exact path="/newmember" component={RegistrationApp}/> 
    </>
  );
};
export default App;