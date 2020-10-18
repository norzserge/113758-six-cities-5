import React, {PureComponent} from 'react';

const ratingStarsData = [
  {
    value: 5,
    title: `perfect`,
  }, {
    value: 4,
    title: `good`,
  }, {
    value: 3,
    title: `not bad`,
  }, {
    value: 2,
    title: `badly`,
  }, {
    value: 1,
    title: `terribly`,
  },
];

class AddReviewForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      starsCount: 0,
      reviewText: ``,
    };
  }
  render() {
    const setStarsCount = (event) => {
      this.setState({
        starsCount: event.target.value,
      });
    };
    const addReview = (event) => {
      this.setState({
        reviewText: event.target.value,
      });
    };

    return (
      <form onSubmit={(event) => event.preventDefault()} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {
            ratingStarsData.map((star) => (<>
              <input onClick={setStarsCount} className="form__rating-input visually-hidden" name="rating" value={star.value} id={`${star.value}-stars`} type="radio" />
              <label htmlFor={`${star.value}-stars`} className="reviews__rating-label form__rating-label" title={star.title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </>))
          }
        </div>
        <textarea onChange={addReview} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}

export default AddReviewForm;
