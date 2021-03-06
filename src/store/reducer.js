import {ActionType} from './action';
import {extend} from '../utils';

const initialState = {
  initCityName: ``,
  cityName: ``,
  citiesList: [],
  offersNew: {},
  currentCityData: [],
  isLoading: true,
  filterValue: `popular`,
  activeOfferId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_CITIES_DATA:
      return extend(state, {
        offersNew: action.payload,
      });
    case ActionType.GET_CITIES_LIST:
      return extend(state, {
        citiesList: action.payload,
      });
    case ActionType.GET_CURRENT_CITY_DATA:
      return extend(state, {
        currentCityData: action.payload,
        filterValue: `popular`,
      });
    case ActionType.GET_CITY_NAME:
      return extend(state, {
        cityName: action.payload,
      });
    case ActionType.GET_INIT_CITY_NAME:
      return extend(state, {
        initCityName: action.payload,
      });
    case ActionType.IS_LOADING:
      return extend(state, {
        isLoading: false,
      });
    case ActionType.SET_FILTER_VALUE:
      return extend(state, {
        filterValue: action.payload,
      });
    case ActionType.SET_ACTIVE_OFFER_ID:
      return extend(state, {
        activeOfferId: action.payload,
      });
    case ActionType.SET_INACTIVE_OFFER_ID:
      return extend(state, {
        activeOfferId: action.payload,
      });
  }

  return state;
};

export {reducer};
