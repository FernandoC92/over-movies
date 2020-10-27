import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header/Header.component";
import MainHall from "./components/MainHall/MainHall.component"
import CreateMovie from './components/CreateMovie/CreateMovie.component';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={MainHall} />
          <Route path="/createmovie" component={CreateMovie}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
