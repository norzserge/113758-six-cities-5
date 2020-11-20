import React, {useEffect, useState} from 'react';
import {placeListType} from './placeListType';
import PlaceCard from '../place-card/place-card';
import PlaceCardCities from '../../proxy-components/place-card-cities/place-card-cities';
import PlaceCardNear from '../../proxy-components/place-card-near/place-card-near';
import {connect} from 'react-redux';

const PlaceList = (props) => {
  const {type, isLoading, filterValue, currentCityData} = props;
  const [filteredCityData, setFilteredCityData] = useState(currentCityData);

  useEffect(() => {
    setFilteredCityData(currentCityData);
  }, [currentCityData]);

  useEffect(() => {
    filter(filterValue);
  }, [filterValue]);

  const filter = (value) => {
    switch (value) {
      case `popular`: return setFilteredCityData(filteredCityData);
      case `to-high`: return setFilteredCityData(filteredCityData.sort((a, b) => a.price - b.price));
      case `to-low`: return setFilteredCityData(filteredCityData.sort((a, b) => b.price - a.price));
      case `top-rated`: return setFilteredCityData(filteredCityData.sort((a, b) => b.rating - a.rating));
      default: return setFilteredCityData(filteredCityData);
    }
  }

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
  isLoading: state.isLoading,
  filterValue: state.filterValue,
  currentCityData: state.currentCityData,
});

export {PlaceList};

export default connect(mapStateToProps)(PlaceList);
