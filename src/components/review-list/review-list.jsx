import React from 'react';
import Review from '../review/review';
import {reviewListType} from './review-list-type';

const ReviewList = (props) => {
  const {reviews} = props;
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </ul>
  );
};

ReviewList.propTypes = reviewListType;

export default ReviewList;
