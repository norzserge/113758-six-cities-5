import React, {useState} from 'react';
import {citiesListType} from './cities-list-type';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const CitiesList = (props) => {
  const {offersNew, citiesList, getCurrentCityData, setFilterValue, setFilterIndex} = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const tabHandleClick = (cityData, index) => {
    setActiveIndex(index);
    getCurrentCityData(cityData);
    setFilterValue(`Popular`);
    setFilterIndex(0);
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
              className={`locations__item-link tabs__item ${activeIndex === index ? `tabs__item--active` : ``}`}
              onClick={() => tabHandleClick(offersNew[cityName], index)}
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
  setFilterValue(value) {
    dispatch(ActionCreator.setFilterValue(value));
  },
  setFilterIndex(index) {
    dispatch(ActionCreator.setFilterIndex(index));
  },
});

export {CitiesList};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
