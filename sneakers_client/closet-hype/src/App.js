import React from "react";
// import "./App.css";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout.js";
import Sneakers from "./components/Sneakers.js";
import Clothes from "./components/Clothes.js";
import Profile from "./components/Profile.js";
import NavigationBar from "./components/NavigationBar.js";
function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sneakers" component={Sneakers} />
            <Route path="/clothes" component={Clothes} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}
export default App;
