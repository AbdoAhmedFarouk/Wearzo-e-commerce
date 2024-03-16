import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useRecoilState } from 'recoil';
import AddedProductToCartMenu from '../../atoms/addedProductToCartMenu';
import useAddProductToCartHandler from '../../hooks/useAddProductToCartHandler';

import ShopNowBtn from '../ShopNowBtn/ShopNowBtn';
import RatingStars from '../RatingStars/RatingStars';

import { AiOutlineHeart } from 'react-icons/ai';
import { BsEye, BsShuffle } from 'react-icons/bs';

SpecialProductsCol.propTypes = {
  product: PropTypes.object,
};

function SpecialProductsCol({ product }) {
  const [addedProductToCart, setAddedProductToCart] = useRecoilState(
    AddedProductToCartMenu,
  );

  const existingProduct = addedProductToCart.find(
    (item) => item.id === product.id,
  );

  const handleAddProductToCart = useAddProductToCartHandler(
    product,
    setAddedProductToCart,
    existingProduct,
  );
  return (
    <>
      <div>
        <Link to={`/product/${product?.id}`}>
          <img
            className="aspect-square h-[250px] w-[282px] object-contain"
            src={product?.image}
          />
        </Link>
      </div>

      <div className="flex-1 pt-[5px] sm:ps-[30px]">
        <RatingStars
          styles="mb-1.5 flex items-center justify-center text-sm
              text-eighthColor md:mb-2.5 sm:justify-start md:text-base"
          productRating={product?.rating}
        />

        <h3 className="mb-[13px] font-medium sm:mt-[11px]">
          <Link
            to={`/product/${product?.id}`}
            className="hover:text-thirdColor"
          >
            {product?.title}
          </Link>
        </h3>

        <div className="leading-[18px]">
          <span className="font-medium sm:me-2">€{product?.price}</span>

          <span className="font-medium text-secondaryColor line-through">
            {product?.discount > 0 ? '€' + product?.discount : null}
          </span>
        </div>

        <div
          className="mb-2.5 mt-[5px] leading-6 text-secondaryColor
              sm:mb-[27px] sm:mt-[14px]"
        >
          <span>{product?.description.slice(0, 200)}...</span>
        </div>

        <div className="m-auto flex w-fit flex-wrap items-center sm:m-0">
          <ShopNowBtn
            text="add to cart"
            styles="md:py-2.5 py-[5px] px-[15px] md:px-[30px] bg-primaryColor
                text-white uppercase hover:bg-thirdColor md:text-sm me-[9px]
                cursor-pointer duration-300 border-0 outline-0 text-xs leading-5"
            onClick={handleAddProductToCart}
          />

          <span
            className="me-[5px] grid h-[30px] w-[30px] cursor-pointer
                place-items-center bg-fifthColor text-center text-base duration-300
                ease-in-out hover:bg-primaryColor hover:text-white md:h-10 md:w-10
                md:text-lg"
          >
            <AiOutlineHeart />
          </span>

          <span
            className="me-[5px] h-[30px] w-[30px] cursor-pointer bg-fifthColor 
                text-lg duration-300 ease-in-out hover:bg-primaryColor
                hover:text-white sm:h-10 sm:w-10"
          >
            <Link
              className="grid h-full w-full place-content-center"
              to={`/product/${product?.id}`}
            >
              <BsEye />
            </Link>
          </span>

          <span
            className="grid h-[30px] w-[30px] cursor-pointer place-items-center
                bg-fifthColor text-center text-lg duration-300 ease-in-out
                hover:bg-primaryColor hover:text-white sm:h-10 sm:w-10"
          >
            <BsShuffle />
          </span>
        </div>
      </div>
    </>
  );
}

export default SpecialProductsCol;
