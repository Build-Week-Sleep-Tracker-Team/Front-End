import React from 'react';
import{Route, Link} from 'react-router-dom'
import './App.css';
import SleepApp from './SleepApp'

const App = () => {
  return (
    <>
      <nav className="navbar">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/pizza">Tracker</Link></button>
      </nav>
      <h1>Weekly Sleep Tracker</h1>
      {/* <img src={image} alt= "pizza"></img> */}
      <Route path="/pizza" component={SleepApp}/>
    </>
  );
};
export default App;