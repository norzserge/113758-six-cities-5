import React, {useEffect} from 'react';
import {placeListType} from './placeListType';
import PlaceCard from '../place-card/place-card';
import PlaceCardCities from '../../proxy-components/place-card-cities/place-card-cities';
import PlaceCardNear from '../../proxy-components/place-card-near/place-card-near';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const PlaceList = (props) => {
  const {
    type,
    filteredCityData,
    isLoading,
    filterValue,
    currentCityData,
    getFilteredCityData,
  } = props;

  let filteredValues = currentCityData.map((item) => item);

  useEffect(() => {
    getFilteredCityData(filteredValues);
  }, [currentCityData]);

  useEffect(() => {
    switch (filterValue) {
      case `popular`: return getFilteredCityData(filteredValues);
      case `to-high`: return getFilteredCityData(filteredValues.sort((a, b) => a.price - b.price));
      case `to-low`: return getFilteredCityData(filteredValues.sort((a, b) => b.price - a.price));
      case `top-rated`: return getFilteredCityData(filteredValues.sort((a, b) => b.rating - a.rating));
      default: return getFilteredCityData(filteredValues);
    }
  }, [filterValue]);

  const getPlaceCardByType = (placeType, offer) => {
    switch (placeType) {
      case `cities`: return (<PlaceCardCities place={offer} key={offer.id} />);
      case `near`: return (<PlaceCardNear place={offer} key={offer.id} />);
      default: return (<PlaceCard place={offer} key={offer.id} />);
    }
  };

  return isLoading ? `Loading...` : filteredCityData.map((offer) => getPlaceCardByType(type, offer));
};

PlaceList.propTypes = placeListType;

const mapStateToProps = (state) => ({
  filteredCityData: state.filteredCityData,
  isLoading: state.isLoading,
  filterValue: state.filterValue,
  currentCityData: state.currentCityData,
});

const mapDispatchToProps = (dispatch) => ({
  getFilteredCityData(filteredValues) {
    dispatch(ActionCreator.getFilteredCityData(filteredValues));
  },
});

export {PlaceList};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);
