import React, {PureComponent} from 'react';
import PlaceList from '../place-list/place-list';
import AddReviewForm from '../add-review-form/add-review-form';
import {propertyScreenType} from './property-screen-type';

class PropertyScreen extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {property, reviews, offers} = this.props;

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img
                    className="header__logo"
                    src="/img/logo.svg"
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

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="/img/room.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="/img/apartment-01.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="/img/apartment-02.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="/img/apartment-03.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="/img/studio-01.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="/img/apartment-01.jpg"
                    alt="Photo studio"
                  />
                </div>
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {property.isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{property.title}</h1>
                  <button
                    className="property__bookmark-button button"
                    type="button"
                  >
                    <svg
                      className="property__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `80%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {property.rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {property.roomType}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {property.bedroomCount} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {property.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">
                    &euro;{property.price}
                  </b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {property.insideRoom.map((item) => (
                      <li className="property__inside-item" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={property.owner.photo}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {property.owner.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {property.owner.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot;{` `}
                    <span className="reviews__amount">{reviews.length}</span>
                  </h2>
                  <ul className="reviews__list">
                    {reviews.map((review) => (
                      <li className="reviews__item" key={review.text}>
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img
                              className="reviews__avatar user__avatar"
                              src={review.photo}
                              width="54"
                              height="54"
                              alt="Reviews avatar"
                            />
                          </div>
                          <span className="reviews__user-name">
                            {review.name}
                          </span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={{width: `80%`}}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <p className="reviews__text">{review.text}</p>
                          <time className="reviews__time" dateTime="2019-04-24">
                            {review.date}
                          </time>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <AddReviewForm />
                </section>
              </div>
            </div>
            <section className="property__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                <PlaceList offers={offers} />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

PropertyScreen.propTypes = propertyScreenType;

export default PropertyScreen;
