import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import RatingStars from '../RatingStars/RatingStars';

SideProductBox.propTypes = {
  product: PropTypes.object,
  styles: PropTypes.string,
};

function SideProductBox({ product }) {
  return (
    <div className="text-center sm:flex sm:text-left">
      <div className="m-auto w-fit sm:m-0 sm:me-5">
        <Link to={`/product/${product?.id}`} className="h-full">
          <img
            className="h-full w-[75px] object-contain"
            src={product?.image}
            alt={product?.image}
          />
        </Link>
      </div>

      <div
        className="mt-4 font-medium text-primaryColor
        sm:m-0 sm:flex-1 sm:space-y-2"
      >
        <h3 className="mb-1 text-xs capitalize leading-5 sm:m-0 sm:text-base">
          <Link
            to={`/product/${product?.id}`}
            className="hover:text-thirdColor"
            href="#"
          >
            {product?.title}
          </Link>
        </h3>

        <div className="m-auto w-fit sm:m-0 sm:w-full">
          <RatingStars
            styles="flex items-center text-eighthColor sm:h-6 sm:text-base
            text-sm"
            ratingLength={parseInt(product.rating.rate)}
          />
        </div>

        <span
          className="inline-block cursor-default text-sm
          leading-5 sm:mt-[9px] sm:text-base"
        >
          {product?.price}
        </span>
      </div>
    </div>
  );
}

export default SideProductBox;
