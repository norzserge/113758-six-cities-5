import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducers/index';
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {fetchOffersList} from './store/api-action';

const root = document.querySelector(`#root`);

const api = createAPI();

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(fetchOffersList());

ReactDOM.render(
    <Provider store={store}>
      <App offers={offers} reviews={reviews} />
    </Provider>,
    root
);
