import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import {appType} from './app-type';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {URL} from '../../const';

const url = URL;
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
  promise.then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Problem with response. Status code: ${response.status}`);
    }
  })
  .then((result) => {
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
          for (let key in item) {
            if (item.hasOwnProperty(key)) {
              let newKey = key;
              if (key.indexOf(`_`) > -1) {
                newKey = key.replace(`_`, ``);
                item[newKey] = item[key];
                delete item[key];
              }
            }
          }
          citiesData[item.city.name].push(item);
        }
      });
    });

    getCitiesList(citiesList);
    getCitiesData(citiesData);
    getCurrentCityData(citiesData[citiesList[0]]);
    getInitCityName(citiesList[0]);
    setLoading();

  }).catch(alert);

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

const mapStateToProps = () => ({});

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
