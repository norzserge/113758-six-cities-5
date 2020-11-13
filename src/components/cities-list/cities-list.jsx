import React, {useEffect} from 'react';
import {citiesListType} from './cities-list-type';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const CitiesList = (props) => {
  const {offersNew, citiesList, getCurrentCityData, getCityName} = props;

  useEffect(() => {
    const initActiveTab = document.querySelector(`.tabs__item`);
    if (initActiveTab) {
      initActiveTab.classList.add(`tabs__item--active`);
    }
  }, [citiesList]);

  const tabHandleClick = (cityName, event) => {
    let tabs = document.querySelectorAll(`.tabs__item`);
    let currentTab = event.target.closest(`.locations__item-link`);

    getCurrentCityData(cityName);
    getCityName(currentTab.dataset.city);

    for (let tab of tabs) {
      tab.classList.remove(`tabs__item--active`);
    }

    currentTab.classList.add(`tabs__item--active`);
  };

  return (
    <ul className="locations__list tabs__list">
      {
        citiesList.map((cityName, index) => (
          <li
            className="locations__item"
            key={`${cityName}-${index}`}
          >
            <a
              className="locations__item-link tabs__item"
              onClick={() => tabHandleClick(offersNew[cityName], event)}
              data-city={cityName}
              href="#"
            >
              <span>{cityName}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
};

CitiesList.propTypes = citiesListType;

const mapStateToProps = (state) => ({
  offersNew: state.offersNew,
  citiesList: state.citiesList,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentCityData(currentCity) {
    dispatch(ActionCreator.getCurrentCityData(currentCity));
  },
  getCityName(city) {
    dispatch(ActionCreator.getCityName(city));
  }
});

export {CitiesList};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
