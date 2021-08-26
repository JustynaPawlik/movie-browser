import React from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from './features/Navigation';
import MoviesPage from './features/movies/MoviesPage';
import PeopleList from './features/people/PeoplePage';

function App() {
  return (
    <HashRouter>
        <Navigation
          moviesPath={"/movies"}
          peoplePath={"/people"}
        />
        <Switch>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/people">
            <PeopleList />
          </Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
    </HashRouter> 
  );
};

export default App;