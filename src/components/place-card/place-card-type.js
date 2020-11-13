import PropTypes from 'prop-types';

export const placeCardType = {
  // onPlace: PropTypes.func.isRequired,
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    ispremium: PropTypes.bool.isRequired,
    previewimage: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxadults: PropTypes.number.isRequired,
  }).isRequired,
};
