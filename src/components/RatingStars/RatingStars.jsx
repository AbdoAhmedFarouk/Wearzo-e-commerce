import { PropTypes } from 'prop-types';

import { AiFillStar } from 'react-icons/ai';

RatingStars.propTypes = {
  styles: PropTypes.string,
};

function RatingStars({ styles }) {
  const defaultStyles = `mb-1.5 flex items-center justify-center text-base
  text-eighthColor md:mb-2.5`;

  return (
    <div className={`${styles ? styles : defaultStyles}`}>
      <span className="mr-[3px]">
        <AiFillStar />
      </span>

      <span className="mr-[3px]">
        <AiFillStar />
      </span>

      <span className="mr-[3px]">
        <AiFillStar />
      </span>

      <span className="mr-[3px]">
        <AiFillStar />
      </span>

      <span>
        <AiFillStar />
      </span>
    </div>
  );
}

export default RatingStars;
