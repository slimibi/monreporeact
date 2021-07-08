import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/window/Home';
import Map from './components/window/Map';
import Graph from './components/window/Graph';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/map' component={Map} />
          <Route path='/graph' component={Graph} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
