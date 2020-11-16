export const ActionType = {
  GET_CITY_NAME: `GET_CITY_NAME`,
  GET_CITIES_LIST: `GET_CITIES_LIST`,
  GET_CITIES_DATA: `GET_CITIES_DATA`,
  GET_INIT_CITY_NAME: `GET_INIT_CITY_NAME`,
  GET_CURRENT_CITY_DATA: `GET_CURRENT_CITY_DATA`,
  GET_FILTERED_CITY_DATA: `GET_FILTERED_CITY_DATA`,
  IS_LOADING: `IS_LOADING`,
  SET_FILTER_VALUE: `SET_FILTER_VALUE`,
  SET_FILTER_INDEX: `SET_FILTER_INDEX`,
  SET_ACTIVE_OFFER_ID: `SET_ACTIVE_OFFER_ID`,
  SET_INACTIVE_OFFER_ID: `SET_INACTIVE_OFFER_ID`,
};

export const ActionCreator = {
  getCityName: (city) => ({
    type: ActionType.GET_CITY_NAME,
    payload: city,
  }),
  getCitiesData: (cities) => ({
    type: ActionType.GET_CITIES_DATA,
    payload: cities,
  }),
  getInitCityName: (initCity) => ({
    type: ActionType.GET_INIT_CITY_NAME,
    payload: initCity,
  }),
  getCitiesList: (citiesArr) => ({
    type: ActionType.GET_CITIES_LIST,
    payload: citiesArr,
  }),
  getCurrentCityData: (currentCity) => ({
    type: ActionType.GET_CURRENT_CITY_DATA,
    payload: currentCity,
  }),
  getFilteredCityData: (filteredValues) => ({
    type: ActionType.GET_FILTERED_CITY_DATA,
    payload: filteredValues,
  }),
  setLoading: () => ({
    type: ActionType.IS_LOADING,
  }),
  setFilterValue: (value) => ({
    type: ActionType.SET_FILTER_VALUE,
    payload: value,
  }),
  setFilterIndex: (index) => ({
    type: ActionType.SET_FILTER_INDEX,
    payload: index,
  }),
  setActiveOfferId: (id) => ({
    type: ActionType.SET_ACTIVE_OFFER_ID,
    payload: id,
  }),
  setInactiveOfferId: () => ({
    type: ActionType.SET_INACTIVE_OFFER_ID,
    payload: null,
  }),
};
