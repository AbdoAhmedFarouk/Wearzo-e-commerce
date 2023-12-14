import { AiFillStar } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
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
