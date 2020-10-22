import React from 'react';
import PlaceCard from '../../components/place-card/place-card';
import {placeCardType} from '../../components/place-card/place-card-type';

const PlaceCardCities = (props) => {
  return (
    <PlaceCard className="cities" {...props} />
  );
};

PlaceCardCities.propTypes = placeCardType;

export default PlaceCardCities;
