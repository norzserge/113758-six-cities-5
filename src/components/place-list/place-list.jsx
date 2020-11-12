import React, {useState} from 'react';
import {placeListType} from './placeListType';
import PlaceCard from '../place-card/place-card';
import PlaceCardCities from '../../proxy-components/place-card-cities/place-card-cities';
import PlaceCardNear from '../../proxy-components/place-card-near/place-card-near';
import {connect} from 'react-redux';

const PlaceList = (props) => {
  const {
    type,
    currentCityData,
    isLoading,
  } = props;

  const [currentPlace, setCurrentPlace] = useState({});

  const getPlaceCardByType = (placeType, offer) => {
    switch (placeType) {
      case `cities`:
        return (<PlaceCardCities place={offer} key={offer.id} onPlace={(offer) => setCurrentPlace(offer)} />);
      case `near`:
        return (<PlaceCardNear place={offer} key={offer.id} onPlace={(offer) => setCurrentPlace(offer)} />);
      default:
        return (<PlaceCard place={offer} key={offer.id} onPlace={(offer) => setCurrentPlace(offer)} />);
    }
  };

  return isLoading ? 'Loading...' : currentCityData.map((offer) => getPlaceCardByType(type, offer));
}

PlaceList.propTypes = placeListType;

const mapStateToProps = (state) => ({
  currentCityData: state.currentCityData,
  isLoading: state.isLoading,
});

export {PlaceList};

export default connect(mapStateToProps)(PlaceList);
