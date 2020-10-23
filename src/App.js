import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Header from "./components/Header/Header.component";
import MainHall from "./components/MainHall/MainHall.component"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
              {/* <Link to="/hall">Hall link</Link> */}
        <Switch>
          <Route path="/" exact component={MainHall} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
