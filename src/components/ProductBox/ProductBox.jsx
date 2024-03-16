import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import AddedProductToCartMenu from '../../atoms/addedProductToCartMenu';

import HoveringIcons from '../HoveringIcons/HoveringIcons';
import ShopNowBtn from '../ShopNowBtn/ShopNowBtn';
import RatingStars from '../RatingStars/RatingStars';

import { AiOutlineHeart } from 'react-icons/ai';
import { BsShuffle, BsEye } from 'react-icons/bs';
import useAddProductToCartHandler from '../../hooks/useAddProductToCartHandler';

ProductBox.propTypes = {
  product: PropTypes.object,
};

function ProductBox({ product }) {
  const [addedProductToCart, setAddedProductToCart] = useRecoilState(
    AddedProductToCartMenu,
  );

  const productDiscountPercent =
    product?.discount > 0 ? (product?.discount / product?.price) * 100 : null;

  const existingProduct = addedProductToCart.find(
    (item) => item.id === product.id,
  );

  const handleAddProductToCart = useAddProductToCartHandler(
    product,
    setAddedProductToCart,
    existingProduct,
  );

  return (
    <div className="group/box relative text-center">
      <HoveringIcons
        styles="absolute left-[5px] top-[5px] z-50 flex cursor-default
        flex-col gap-y-[7px] text-center text-[9px] uppercase leading-[9px]
        text-white md:left-2.5 md:top-2.5 md:text-xs md:leading-3"
      >
        {product?.discount > 0 && (
          <span className="bg-thirdColor px-1 py-1 md:px-1.5">
            -{productDiscountPercent.toFixed()}%
          </span>
        )}

        {product?.new && (
          <span className="bg-primaryColor px-1 py-1 md:px-1.5">new</span>
        )}
      </HoveringIcons>

      <HoveringIcons
        styles="invisible absolute -top-11 right-0 z-50 flex items-center
        bg-white text-sm text-primaryColor opacity-0 duration-300
        ease-in-out group-hover/box:visible group-hover/box:top-0
        group-hover/box:opacity-100 md:text-base"
      >
        <a
          className="flex h-[30px] w-[30px] items-center justify-center
          duration-300 ease-in-out hover:text-thirdColor md:h-10 md:w-10"
          href="#"
        >
          <AiOutlineHeart />
        </a>

        <Link
          to={`/product/${product?.id}`}
          className="flex h-[30px] w-[30px] items-center justify-center
          duration-300 ease-in-out hover:text-thirdColor md:h-10 md:w-10 "
        >
          <BsEye />
        </Link>

        <a
          className="flex h-[30px] w-[30px] items-center justify-center
          duration-300 ease-in-out hover:text-thirdColor md:h-10
          md:w-10"
          href="#"
        >
          <BsShuffle />
        </a>
      </HoveringIcons>

      <div
        className="relative h-full w-full cursor-pointer
        overflow-hidden"
      >
        <Link to={`/product/${product?.id}`}>
          <img
            className="h-[300px] w-full object-contain
            md:h-[180px] lg:h-[220px] 2xl:h-[220px]"
            src={product?.image}
            alt={product?.image}
          />
        </Link>

        <ShopNowBtn
          text="add to cart"
          styles="invisible absolute -bottom-12 left-0 z-40 duration-300
          w-full cursor-pointer bg-primaryColor p-[5px] text-xs ease-in-out
          leading-[30px] text-white opacity-0 group-hover/box:visible hover:bg-thirdColor
          uppercase group-hover/box:bottom-0 group-hover/box:opacity-100"
          onClick={handleAddProductToCart}
        />
      </div>

      <div className="p-2 md:pt-2.5">
        <RatingStars />

        <div className="font-medium text-primaryColor">
          <h3
            className="mb-1 text-sm capitalize md:mb-2
          md:text-base md:leading-[15px]"
          >
            <Link
              to={`/product/${product?.id}`}
              className="hover:text-thirdColor"
            >
              {product?.title.slice(0, 20)}...
            </Link>
          </h3>
          <span className="me-2 cursor-default">€{product?.price}</span>

          <span
            className="cursor-default text-base
            leading-[18px] text-secondaryColor line-through"
          >
            {product?.discount > 0 ? '€' + product?.discount : null}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
