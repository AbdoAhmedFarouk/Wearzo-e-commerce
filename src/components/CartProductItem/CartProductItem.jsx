import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import useRemoveProductItemFromUserCart from '../../hooks/useRemoveProductItemFromUserCart';
import useIncrementProductQuantity from '../../hooks/useIncrementProductQuantity';
import useDecrementProductQuantity from '../../hooks/useDecrementProductQuantity';
import useInputValueHandler from '../../hooks/useInputValueHandler';

import ProductDiscount from '../../components/ProductDiscount/ProductDiscount';

import { FaTrash } from 'react-icons/fa';
import { FiPlus, FiMinus } from 'react-icons/fi';

CartProductItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.number,
  discount: PropTypes.number,
  img: PropTypes.string,
};

function CartProductItem({ title, img, price, quantity, id, discount }) {
  const itemPrice = discount ? (price - discount).toFixed(2) : price;

  const itemTotalPrice = discount
    ? ((price - discount) * quantity).toFixed(2)
    : (price * quantity).toFixed(2);

  const productDiscountPercent = discount > 0 ? (discount / price) * 100 : null;

  const inpValueHandler = useInputValueHandler(id);

  const handleIncrementProductQuantity = useIncrementProductQuantity(id);

  const handleDecrementProductQuantity = useDecrementProductQuantity(id);

  const handleRemoveProductItemFromUserCart =
    useRemoveProductItemFromUserCart();

  return (
    <li className="border-b border-fourthColor py-4">
      <div
        className="grid grid-cols-1 items-center text-center
        sm:grid-cols-12 sm:text-start"
      >
        <div className="m-auto mb-5 sm:col-span-3 sm:mb-0">
          <img
            className="h-[100px] w-[75px] object-contain"
            src={img}
            alt={img}
          />
        </div>

        <div className="sm:col-span-4">
          <div
            className="cursor-pointer text-sm font-medium capitalize
            hover:text-thirdColor"
          >
            <Link to={`/product/${id}`}>{title}</Link>
          </div>

          {discount !== 0 ? (
            <ProductDiscount
              discountAmountInPerc={productDiscountPercent?.toFixed()}
              discountPrice={discount}
            />
          ) : null}

          <span
            className="mb-5 mt-2 inline-block text-lg
            font-medium leading-[26px] text-primaryColor
            sm:m-0"
          >
            €{itemPrice}
          </span>
        </div>

        <div
          className="flex flex-wrap items-center
          justify-around sm:col-span-5"
        >
          <div className="relative">
            <input
              className="h-10 w-12 border border-fourthColor
              px-2 py-[2.8px] outline-0"
              value={quantity}
              onChange={(e) => inpValueHandler(e)}
            />

            <span
              className="absolute -right-5 top-0 flex
              h-5 w-5 cursor-pointer items-center justify-center
              border border-l-0 border-fourthColor"
              onClick={handleIncrementProductQuantity}
            >
              <FiPlus />
            </span>

            <span
              className="absolute -right-5 bottom-0 flex
              h-5 w-5 cursor-pointer items-center justify-center
              border border-l-0 border-fourthColor"
              onClick={handleDecrementProductQuantity}
            >
              <FiMinus />
            </span>
          </div>

          <span className="select-none text-lg font-medium sm:ms-3 lg:m-0">
            €{itemTotalPrice}
          </span>

          <span
            className="h-4 w-4 cursor-pointer
            hover:text-thirdColor"
            onClick={() => handleRemoveProductItemFromUserCart(title, id)}
          >
            <FaTrash />
          </span>
        </div>
      </div>
    </li>
  );
}

export default CartProductItem;
