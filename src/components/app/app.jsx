import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import {appType} from './app-type';
import {connect} from 'react-redux'; 
import {ActionCreator} from '../../store/action';

const url = `https://5.react.pages.academy/six-cities/hotels`;
let citiesData = {};
let citiesList = [];

const App = (props) => {
  const {
    offers,
    reviews,
    getCitiesData,
    getCitiesList,
    getCurrentCityData,
    getInitCityName,
    setLoading,
  } = props;

  let promise = fetch(url);
  promise.then(response => response.ok ? response.json() : console.error('Problem with response. Status code: ' + response.status))
  .then(result => {
    result.forEach((item) => {
      if (citiesList.includes(item.city.name)) {
        return;
      } else {
        citiesList.push(item.city.name);
        citiesData[item.city.name] = [];
      }
    });

    citiesList.forEach((city) => {
      result.forEach((item) => {
        if (item.city.name === city) {
          citiesData[item.city.name].push(item);
        }
      })
    })

    getCitiesList(citiesList);
    getCitiesData(citiesData);
    getCurrentCityData(citiesData[citiesList[0]]);
    getInitCityName(citiesList[0]);
    setLoading();

  }).catch(err => console.error(err));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            citiesList={citiesList}
          />
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getCitiesData(cities) {
    dispatch(ActionCreator.getCitiesData(cities));
  },
  getCitiesList(citiesArr) {
    dispatch(ActionCreator.getCitiesList(citiesArr));
  },
  getCurrentCityData(city) {
    dispatch(ActionCreator.getCurrentCityData(city));
  },
  getInitCityName(city) {
    dispatch(ActionCreator.getInitCityName(city));
  },
  setLoading() {
    dispatch(ActionCreator.setLoading());
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
