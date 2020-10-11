import PropTypes from 'prop-types';

export const propertyScreenType = {
  property: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    roomType: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    bedroomCount: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    insideRoom: PropTypes.arrayOf(PropTypes.string).isRequired,
    owner: PropTypes.shape({
      photo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};
