import { PropTypes } from 'prop-types';

ProductDiscount.propTypes = {
  discountPrice: PropTypes.number,
  discountAmountInPerc: PropTypes.node,
};

function ProductDiscount({ discountAmountInPerc, discountPrice }) {
  return (
    <div className="flex items-center justify-center sm:justify-start">
      <span className="text-sm text-secondaryColor line-through">
        ${discountPrice}
      </span>

      <span
        className="mx-[5px] bg-primaryColor px-2 py-[3px]
        text-xs leading-normal text-white"
      >
        -{discountAmountInPerc}%
      </span>
    </div>
  );
}

export default ProductDiscount;
