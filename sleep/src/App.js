import React from 'react';
import {useHistory,Route, Link} from 'react-router-dom'
import './App.css';
import SleepApp from './SleepApp'
import Sleep from './components/Sleep'
import LoginForm from './components/LoginForm'
import image from "./Assets/undraw_sleep_analysis_o5f9.svg"
import RegistrationForm from './components/RegistrationForm'

const App = () => {
const history= useHistory()
const routetoHome= ()=>{
  history.push("/");
}

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
      <Route exact path="/login" component={LoginForm}/>
      <Route exact path="/newmember" component={RegistrationForm}/>
    </>
  );
};
export default App;