import React from 'react';
import {placeListType} from './placeListType';
import PlaceCard from '../place-card/place-card';
import PlaceCardCities from '../../proxy-components/place-card-cities/place-card-cities';
import PlaceCardNear from '../../proxy-components/place-card-near/place-card-near';
import {connect} from 'react-redux';

const PlaceList = (props) => {
  const {
    type,
    filteredCityData,
    isLoading,
  } = props;

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
});

export {PlaceList};

export default connect(mapStateToProps)(PlaceList);
