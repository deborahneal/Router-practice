import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';

  

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Switch>
          <Route path="/"component={Home} exact />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
