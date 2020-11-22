import PropTypes from 'prop-types';

export const placeListType = {
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired,
  currentCityData: PropTypes.array.isRequired,
};
