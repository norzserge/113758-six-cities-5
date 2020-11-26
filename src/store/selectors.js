import {createSelector} from "reselect";

export const selectDataFromServer = (state) => state.DATA.dataFromServer;
export const selectOffersNew = (state) => state.STATE.offersNew;
export const selectCitiesList = (state) => state.STATE.citiesList;
export const selectIsLoading = (state) => state.STATE.isLoading;
export const selectFilterValue = (state) => state.STATE.filterValue;
export const selectCurrentCityData = (state) => state.STATE.currentCityData;
export const selectActiveOfferId = (state) => state.STATE.activeOfferId;
export const selectCityName = (state) => state.STATE.cityName;
export const selectInitCityName = (state) => state.STATE.initCityName;

export const selectFilteredOffers = createSelector(
    selectFilterValue,
    selectCurrentCityData,
    (filterValue, currentCityData) => {
      const filteredData = currentCityData.map((item) => item);

      switch (filterValue) {
        case `popular`: return currentCityData;
        case `to-high`: return filteredData.sort((a, b) => a.price - b.price);
        case `to-low`: return filteredData.sort((a, b) => b.price - a.price);
        case `top-rated`: return filteredData.sort((a, b) => b.rating - a.rating);
        default: return currentCityData;
      }
    }
);
