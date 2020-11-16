import PropTypes from 'prop-types';

export const sortType = {
  currentCityData: PropTypes.array.isRequired,
  getFilteredCityData: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
  setFilterValue: PropTypes.func.isRequired,
  filterIndex: PropTypes.number.isRequired,
  setFilterIndex: PropTypes.func.isRequired,
};
