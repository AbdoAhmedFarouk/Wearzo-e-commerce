import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import useRemoveProductItemFromUserWishlist from '../../hooks/useRemoveProductItemFromUserWishlist';
import useAddProductsToUserCart from '../../hooks/useAddProductsToUserCart';

import ProductDiscount from '../../components/ProductDiscount/ProductDiscount';

import Tooltip from '../../ui/Tooltip/Tooltip';

import { HiShoppingCart } from 'react-icons/hi';
import { FaTrash } from 'react-icons/fa';

WishlistProductItem.propTypes = {
  item: PropTypes.object,
};

function WishlistProductItem({ item }) {
  const itemPrice = item.discount
    ? (item.price - item.discount).toFixed(2)
    : item.price;

  const productDiscountPercent =
    item.discount > 0 ? (item.discount / item.price) * 100 : null;

  const handleAddProductToUserCart = useAddProductsToUserCart();

  const handleRemoveProductItemFromUserWishlist =
    useRemoveProductItemFromUserWishlist();

  return (
    <li className="border-b border-fourthColor py-4">
      <div
        className="grid grid-cols-1 items-center text-center
        sm:grid-cols-12 sm:text-start"
      >
        <div className="m-auto mb-5 sm:col-span-3 sm:mb-0">
          <img
            className="h-[100px] w-[75px] object-contain"
            src={item.img}
            alt={item.img}
          />
        </div>

        <div className="sm:col-span-4">
          <div
            className="cursor-pointer text-sm font-medium capitalize
            hover:text-thirdColor"
          >
            <Link to={`/product/${item.id}`}>{item.title}</Link>
          </div>

          {item.discount !== 0 ? (
            <ProductDiscount
              discountAmountInPerc={productDiscountPercent?.toFixed()}
              discountPrice={item.discount}
            />
          ) : null}

          <span
            className="mb-5 mt-2 inline-block text-lg
            font-medium leading-[26px] text-primaryColor
            sm:m-0"
          >
            €{item.price}
          </span>
        </div>

        <div
          className="flex flex-col flex-wrap items-center justify-around space-y-2
          xxxs:flex-row xxxs:space-y-0 sm:col-span-5"
        >
          <span className="select-none text-lg font-medium sm:ms-3 lg:m-0">
            €{itemPrice}
          </span>

          <div className="flex flex-col items-center space-y-2 xxxs:flex-row xxxs:space-y-0">
            <span
              className="group/tooltip relative cursor-pointer bg-primaryColor px-[30px]
              py-2.5 text-base leading-10 text-white duration-500 hover:bg-thirdColor
              xxxs:me-2"
              onClick={() => handleAddProductToUserCart(item)}
            >
              <HiShoppingCart />

              <Tooltip text="add to cart" styles="w-[120%] whitespace-nowrap" />
            </span>

            <span
              className="group/tooltip relative cursor-pointer bg-thirdColor px-[30px]
              py-2.5 text-base leading-10 text-white duration-500 hover:bg-[#ac2925]"
              onClick={() =>
                handleRemoveProductItemFromUserWishlist(item.title, item.id)
              }
            >
              <FaTrash />

              <Tooltip text="remove" styles="w-11/12" />
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default WishlistProductItem;
