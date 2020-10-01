import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const root = document.querySelector(`#root`);

const Settings = {
  RENT_COUNT: 6,
};

ReactDOM.render(<App rentCount={Settings.RENT_COUNT} />, root);
