import PropTypes from 'prop-types';

export const placeListType = {
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  filteredCityData: PropTypes.array.isRequired,
  filterValue: PropTypes.string.isRequired,
  currentCityData: PropTypes.array.isRequired,
  getFilteredCityData: PropTypes.func.isRequired,
};
