import React, {useEffect, useState} from 'react';
import {sortType} from './sort-type';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

const filterData = [
  {text: `Popular`, value: `popular`},
  {text: `Price: low to high`, value: `to-high`},
  {text: `Price: high to low`, value: `to-low`},
  {text: `Top rated first`, value: `top-rated`},
];

const Sort = (props) => {
  const {
    currentCityData,
    getFilteredCityData,
    filterValue,
    setFilterValue,
    filterIndex,
    setFilterIndex,
  } = props;

  const [isVisible, setVisibility] = useState(false);
  let filteredValues = currentCityData.map((item) => item);

  useEffect(() => {
    getFilteredCityData(filteredValues);
    filteredValues = currentCityData.map((item) => item);
  }, [currentCityData]);

  const getFilterValue = (index) => {
    setFilterValue(filterData[index].text);
    setFilterIndex(index);
    setVisibility(!isVisible);
    switch (filterData[index].value) {
      case `popular`: return getFilteredCityData(filteredValues);
      case `to-high`: return getFilteredCityData(filteredValues.sort((a, b) => a.price - b.price));
      case `to-low`: return getFilteredCityData(filteredValues.sort((a, b) => b.price - a.price));
      case `top-rated`: return getFilteredCityData(filteredValues.sort((a, b) => b.rating - a.rating));
      default: return getFilteredCityData(filteredValues);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>&nbsp;
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => setVisibility(!isVisible)}
      >
        {filterValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isVisible ? `places__options--opened` : ``}`}>
        {
          filterData.map((item, index) => (
            <li
              className={`places__option ${filterIndex === index ? `places__option--active` : ``}`}
              tabIndex="0"
              key={`${item.value}-${index}`}
              data-value={item.value}
              onClick={() => getFilterValue(index)}
            >
              {item.text}
            </li>
          ))
        }
      </ul>
    </form>
  );
};

Sort.propTypes = sortType;

const mapStateToProps = (state) => ({
  currentCityData: state.currentCityData,
  filterValue: state.filterValue,
  filterIndex: state.filterIndex,
});

const mapDispatchToProps = (dispatch) => ({
  getFilteredCityData(filteredValues) {
    dispatch(ActionCreator.getFilteredCityData(filteredValues));
  },
  setFilterValue(value) {
    dispatch(ActionCreator.setFilterValue(value));
  },
  setFilterIndex(index) {
    dispatch(ActionCreator.setFilterIndex(index));
  },
});

export {Sort};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
