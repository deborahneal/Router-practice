import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';

  

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1 className="coder" >N</h1>
      <header className="App-header">
        <Switch>
          <Route path="/"component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route component={Error} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
