import React, {PureComponent} from 'react';
import {placeListType} from './placeListType';
import PlaceCard from '../place-card/place-card';
import PlaceCardCities from '../../proxy-components/place-card-cities/place-card-cities';
import PlaceCardNear from '../../proxy-components/place-card-near/place-card-near';

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPlace: this.props.offers[0],
    };
  }
  render() {
    const {offers, type} = this.props;

    const setCurrentPlace = (place) => {
      this.setState({
        currentPlace: place,
      });
    };

    const getPlaceCardByType = (placeType, offer) => {
      switch (placeType) {
        case `cities`:
          return (<PlaceCardCities place={offer} key={offer.title} onPlace={setCurrentPlace} />);
        case `near`:
          return (<PlaceCardNear place={offer} key={offer.title} onPlace={setCurrentPlace} />);
        default:
          return (<PlaceCard place={offer} key={offer.title} onPlace={setCurrentPlace} />);
      }
    };

    return (
      <>
        {offers.map((offer) => getPlaceCardByType(type, offer))}
      </>
    );
  }
}

PlaceList.propTypes = placeListType;

export default PlaceList;
