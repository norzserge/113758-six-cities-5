import PropTypes from 'prop-types';

export const placeListType = {
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  selectFilteredOffers: PropTypes.array.isRequired,
};
