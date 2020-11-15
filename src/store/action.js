export const ActionType = {
  GET_CITY_NAME: `GET_CITY_NAME`,
  GET_CITIES_LIST: `GET_CITIES_LIST`,
  GET_CITIES_DATA: `GET_CITIES_DATA`,
  GET_INIT_CITY_NAME: `GET_INIT_CITY_NAME`,
  GET_CURRENT_CITY_DATA: `GET_CURRENT_CITY_DATA`,
  IS_LOADING: `IS_LOADING`,
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
  setLoading: () => ({
    type: ActionType.IS_LOADING,
  }),
};
