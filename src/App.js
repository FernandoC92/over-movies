import React, { useRef } from 'react';
import './App.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header/Header.component";
import MainHall from "./components/MainHall/MainHall.component"
import CreateMovie from './components/CreateMovie/CreateMovie.component';
import MovieDetails from './components/MovieDetails/MovieDetails.component';

function App(props) {
  const childRef = useRef();

  function inputSearchChange(value) {
    childRef.current.getMoviesByName(value);
  }

  return (
    <Router>
      <div className="App">
        <Header inputSearchChange={inputSearchChange} />
        <Switch>
          <Route path="/" exact render={(props) => <MainHall {...props} ref={childRef}/>}/>
          <Route path="/createmovie" component={CreateMovie} />
          <Route path="/details/:movieId" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
