import PropTypes from 'prop-types';

export const citiesListType = {
  offersNew: PropTypes.object.isRequired,
  citiesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrentCityData: PropTypes.func.isRequired,
};
