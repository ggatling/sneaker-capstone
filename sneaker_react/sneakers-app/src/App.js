import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Sneakers from './Sneakers';
import Clothes from './Clothes';

class App extends Component {
  render(){
      return (
        <Router>
        <div>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/sneakers">Sneakers</Link>{' '}
          <Link to="/clothes">Clothes</Link>
        </nav>
        </div>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/sneakers" component={Sneakers} />
          <Route path="/clothes" component={Clothes} />
        </div>
      </Router>
      );
    }
  }


export default App;
