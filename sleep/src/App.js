import React from 'react';
import {useHistory,Route, Link} from 'react-router-dom'
import './App.css';
import SleepApp from './SleepApp'
import Sleep from './components/Sleep'

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
      {/* <img src={image} alt= "pizza"></img> */}
      <Route path="/sleep" component={SleepApp}/>
    </>
  );
};
export default App;