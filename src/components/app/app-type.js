import PropTypes from 'prop-types';

export const appType = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  getCitiesData: PropTypes.func.isRequired,
  getCitiesList: PropTypes.func.isRequired,
  getCurrentCityData: PropTypes.func.isRequired,
  getInitCityName: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
