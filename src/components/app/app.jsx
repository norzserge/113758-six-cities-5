import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';

const App = (props) => {
  const {rentCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen rentCount={rentCount} />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/offer/:id">
          <PropertyScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentCount: PropTypes.number.isRequired,
};

export default App;
