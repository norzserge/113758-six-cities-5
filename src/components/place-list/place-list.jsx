import React, {PureComponent} from 'react';
import {placeListType} from './placeListType';
import PlaceCard from '../place-card/place-card';

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPlace: this.props.offers[0],
    };
  }
  render() {
    const {offers} = this.props;
    const setCurrentPlace = (place) => {
      this.setState({
        currentPlace: place,
      });
    };

    return <>{offers.map((offer) => <PlaceCard place={offer} key={offer.title} onPlace={setCurrentPlace} />)}</>;
  }
}

PlaceList.propTypes = placeListType;

export default PlaceList;
