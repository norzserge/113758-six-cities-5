import React from 'react';
import PlaceCard from '../../components/place-card/place-card';
import {placeCardType} from '../../components/place-card/place-card-type';

const PlaceCardNear = (props) => {
  return (
    <PlaceCard className="near-places" {...props} />
  );
};

PlaceCardNear.propTypes = placeCardType;

export default PlaceCardNear;
