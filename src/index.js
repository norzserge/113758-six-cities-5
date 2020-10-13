import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";

const root = document.querySelector(`#root`);

const Settings = {
  RENT_COUNT: 6,
};

ReactDOM.render(
    <App rentCount={Settings.RENT_COUNT} offers={offers} reviews={reviews} />,
    root
);
