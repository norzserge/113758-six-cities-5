import PropTypes from 'prop-types';

export const mapType = {
  currentCityData: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,  
      }).isRequired,
      zoom: PropTypes.number,
    }).isRequired,
  }).isRequired).isRequired,
};
