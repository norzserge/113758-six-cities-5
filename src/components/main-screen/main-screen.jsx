import React from 'react';
import PlaceList from '../place-list/place-list';
import {mainScreenType} from './main-screen-type';
import Map from '../map/map';
import Sort from '../sort/sort';
import CitiesList from '../cities-list/cities-list';
import {connect} from 'react-redux';
import {selectCurrentCityData, selectCityName, selectInitCityName} from '../../store/selectors';

const MainScreen = (props) => {
  const {
    citiesList,
    currentCityData,
    cityName,
    initCityName,
  } = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList citiesList={citiesList} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {currentCityData.length} places to stay in {cityName ? cityName : initCityName}
              </b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                <PlaceList type="cities" />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = mainScreenType;

const mapStateToProps = (state) => ({
  currentCityData: selectCurrentCityData(state),
  cityName: selectCityName(state),
  initCityName: selectInitCityName(state),
});

export {CitiesList};

export default connect(mapStateToProps)(MainScreen);
