import PropTypes from 'prop-types';

export const placeCardType = {
  onPlace: PropTypes.func.isRequired,
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    roomType: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    bedroomCount: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    coordinate: PropTypes.arrayOf(PropTypes.number).isRequired,
    insideRoom: PropTypes.arrayOf(PropTypes.string).isRequired,
    owner: PropTypes.shape({
      photo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
