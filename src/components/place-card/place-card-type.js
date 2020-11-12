import PropTypes from 'prop-types';

export const placeCardType = {
  onPlace: PropTypes.func.isRequired,
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    is_premium: PropTypes.bool.isRequired,
    preview_image: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    max_adults: PropTypes.number.isRequired,
  }).isRequired,
};
