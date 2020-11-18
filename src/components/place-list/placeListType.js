import PropTypes from 'prop-types';

export const placeListType = {
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  filteredCityData: PropTypes.array.isRequired,
};
