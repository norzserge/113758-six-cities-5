import React, {useEffect, useState} from 'react';
import {sortType} from './sort-type';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {selectFilterValue} from '../../store/selectors';

const filterData = [
  {text: `Popular`, value: `popular`},
  {text: `Price: low to high`, value: `to-high`},
  {text: `Price: high to low`, value: `to-low`},
  {text: `Top rated first`, value: `top-rated`},
];

const Sort = (props) => {
  const {
    filterValue,
    setFilterValue,
  } = props;

  const [isVisible, setVisibility] = useState(false);
  const [currentFilterText, setCurrentFilterText] = useState(filterData[0].text);

  useEffect(() => {
    filterData.filter((obj) => {
      if (obj.value === filterValue) {
        setCurrentFilterText(obj.text);
      }
    });
  }, [filterValue]);

  const onFilterClickHandler = (index) => {
    setFilterValue(filterData[index].value);
    setVisibility(!isVisible);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>&nbsp;
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => setVisibility(!isVisible)}
      >
        {currentFilterText}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isVisible ? `places__options--opened` : ``}`}>
        {
          filterData.map((item, index) => (
            <li
              className={`places__option ${filterValue === item.value ? `places__option--active` : ``}`}
              tabIndex="0"
              key={`${item.value}-${index}`}
              data-value={item.value}
              onClick={() => onFilterClickHandler(index)}
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
  filterValue: selectFilterValue(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFilterValue(value) {
    dispatch(ActionCreator.setFilterValue(value));
  },
});

export {Sort};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
