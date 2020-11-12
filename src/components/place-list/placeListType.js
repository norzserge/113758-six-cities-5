import PropTypes from 'prop-types';

export const placeListType = {
  currentCityData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};
