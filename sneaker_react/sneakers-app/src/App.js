import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Sneakers from './Sneakers';
import Clothes from './Clothes';
import Footer from './Footer';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';

class App extends Component {
  render(){
      return (
        <React.Fragment>
          <NavigationBar />
          <Jumbotron />
          <Layout>
          <Router>
          <div>

          </div>

          <div>
            {/* Home page link */}
            <Route exact path="/" component={Home} />

            {/* Sneakers page link */}
            <Route path="/sneakers" component={Sneakers} />

            {/* Home page link */}
            <Route path="/clothes" component={Clothes} />


          </div>
          <Footer />

        </Router>
        </Layout>
      </React.Fragment>
      );
    }
  }


export default App;
