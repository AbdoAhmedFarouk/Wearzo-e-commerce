import { PropTypes } from 'prop-types';

import { AiFillStar } from 'react-icons/ai';
import { CiStar } from 'react-icons/ci';

RatingStars.propTypes = {
  ratingLength: PropTypes.number,
  defaultRating: PropTypes.number,
  styles: PropTypes.string,
};

function RatingStars({ styles, ratingLength = 0 }) {
  const filledStars = Array.from({ length: ratingLength }, (_, i) => (
    <AiFillStar key={i} />
  ));

  const emptyStars = Array.from({ length: 5 - ratingLength }, (_, i) => (
    <CiStar key={i + ratingLength} />
  ));

  return (
    <>
      <div
        className={
          styles
            ? styles
            : 'mb-1.5 flex items-center justify-center text-base text-eighthColor md:mb-2.5'
        }
      >
        {filledStars}
        {emptyStars}
      </div>
    </>
  );
}

export default RatingStars;
