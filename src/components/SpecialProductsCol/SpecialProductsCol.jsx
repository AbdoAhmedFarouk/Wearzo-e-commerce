import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentLoggedUser } from '../../atoms/currentLoggedUser';
import addedProductToGlobalCartMenu from '../../atoms/addedProductToGlobalCartMenu';
import useAddProductsToGlobalCart from '../../hooks/useAddProductsToGlobalCart';
import useAddProductsToUserCart from '../../hooks/useAddProductsToUserCart';
import useAddProductsToUserWishList from '../../hooks/useAddProductsToUserWishlist';
import useAddProductsToCompareList from '../../hooks/useAddProductsToCompareList';

import MainButton from '../MainButton/MainButton';
import RatingStars from '../RatingStars/RatingStars';

import { AiOutlineHeart } from 'react-icons/ai';
import { BsEye, BsShuffle } from 'react-icons/bs';
import Swal from 'sweetalert2';

SpecialProductsCol.propTypes = {
  product: PropTypes.object,
};

function SpecialProductsCol({ product }) {
  const [addedProductToGlobalCart, setAddedProductToGlobalCart] =
    useRecoilState(addedProductToGlobalCartMenu);

  const currentUser = useRecoilValue(currentLoggedUser);

  const existingProductInGlobalCart = addedProductToGlobalCart.find(
    (item) => item.id === product.id,
  );

  const handleAddProductToUserCart = useAddProductsToUserCart();

  const handleAddProductToGlobalCart = useAddProductsToGlobalCart();

  const handleAddProductToUserWishlist = useAddProductsToUserWishList();

  const handleAddProductToComparison = useAddProductsToCompareList();

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
          ratingLength={product.rating.rate}
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
          <MainButton
            text="add to cart"
            styles="md:py-2.5 py-[5px] px-[15px] md:px-[30px] bg-primaryColor
            text-white uppercase hover:bg-thirdColor md:text-sm me-[9px]
            cursor-pointer duration-300 border-0 outline-0 text-xs leading-5"
            onClickHandler={() =>
              currentUser?.email
                ? handleAddProductToUserCart(product)
                : handleAddProductToGlobalCart(
                    product,
                    setAddedProductToGlobalCart,
                    existingProductInGlobalCart,
                    'The product has been added successfully to the global cart',
                    'The product quantity increased by one in the global cart',
                  )
            }
          />

          <button
            className="me-[5px] grid h-[30px] w-[30px] cursor-pointer
            place-items-center bg-fifthColor text-center text-base duration-300
            ease-in-out hover:bg-primaryColor hover:text-white md:h-10 md:w-10
            md:text-lg"
            onClick={() => {
              currentUser?.email
                ? handleAddProductToUserWishlist(product)
                : Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title:
                      'You can not add products to wishlist unless you have logged in.',
                    showConfirmButton: false,
                    timer: 3000,
                  });
            }}
          >
            <AiOutlineHeart />
          </button>

          <button
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
          </button>

          <button
            className="grid h-[30px] w-[30px] cursor-pointer place-items-center
            bg-fifthColor text-center text-lg duration-300 ease-in-out
            hover:bg-primaryColor hover:text-white sm:h-10 sm:w-10"
            onClick={() => {
              currentUser?.email
                ? handleAddProductToComparison(product?.id, product)
                : Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title:
                      'You can not add products to the copmarison list unless you have logged in.',
                    showConfirmButton: false,
                    timer: 3000,
                  });
            }}
          >
            <BsShuffle />
          </button>
        </div>
      </div>
    </>
  );
}

export default SpecialProductsCol;
