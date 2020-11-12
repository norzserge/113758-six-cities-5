import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {placeCardType} from './place-card-type';

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onPlace, place, className} = this.props;
    const setArticleClassName = (classname) => {
      switch (classname) {
        case `near-places`: return `near-places__card`;
        case `cities`: return `cities__place-card`;
        default: return `default`;
      }
    };

    return (
      <article
        className={`${setArticleClassName(className)} place-card`}
        onMouseEnter={() => onPlace(place)}
      >
        {place.is_premium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className={`${className}__image-wrapper place-card__image-wrapper`}>
          <Link to='/offer/1'>
            <img className="place-card__image" src={place.preview_image} width="260" height="200" alt="Place image" />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{place.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `80%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{place.title}</a>
          </h2>
          <p className="place-card__type">{place.type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = placeCardType;

export default PlaceCard;
