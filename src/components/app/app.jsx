import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import {appType} from './app-type';

const App = (props) => {
  const {rentCount, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen rentCount={rentCount} offers={offers} />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/offer/:id">
          <PropertyScreen
            property={offers[0]}
            reviews={reviews[0]}
            offers={offers}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = appType;

export default App;
