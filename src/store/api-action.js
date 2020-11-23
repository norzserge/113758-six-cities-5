import {getDataFromServer} from './action';

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(getDataFromServer(data)))
);

export {fetchOffersList};
