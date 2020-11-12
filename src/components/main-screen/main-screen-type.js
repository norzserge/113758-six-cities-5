import PropTypes from 'prop-types';

export const mainScreenType = {
  currentCityData: PropTypes.array.isRequired,
  citiesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  cityName: PropTypes.string.isRequired,
  initCityName: PropTypes.string.isRequired,
};
