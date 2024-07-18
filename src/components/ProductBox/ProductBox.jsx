import { useRecoilState } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import addedProductToGlobalCartMenu from '../../atoms/addedProductToGlobalCartMenu';
import useAddProductsToGlobalCart from '../../hooks/useAddProductsToGlobalCart';
import useAddProductsToUserCart from '../../hooks/useAddProductsToUserCart';
import useAddProductsToUserWishList from '../../hooks/useAddProductsToUserWishlist';

import HoveringIcons from '../HoveringIcons/HoveringIcons';
import MainButton from '../MainButton/MainButton';
import RatingStars from '../RatingStars/RatingStars';

import { AiOutlineHeart } from 'react-icons/ai';
import { BsShuffle, BsEye } from 'react-icons/bs';
import Swal from 'sweetalert2';
import useUserCart from '../../hooks/useUserCart';

ProductBox.propTypes = {
  product: PropTypes.object,
};

function ProductBox({ product }) {
  const [addedProductToGlobalCart, setAddedProductToGlobalCart] =
    useRecoilState(addedProductToGlobalCartMenu);

  const { setLoggedUsers, currentUser, checkLoggedUser } = useUserCart();

  const productDiscountPercent =
    product?.discount > 0 ? (product?.discount / product?.price) * 100 : null;

  const existingProductInGlobalCart = addedProductToGlobalCart.find(
    (item) => item.id === product.id,
  );

  const navigate = useNavigate();

  const handleAddProductToUserCart = useAddProductsToUserCart();

  const handleAddProductToUserWishlist = useAddProductsToUserWishList();

  const handleAddProductToGlobalCart = useAddProductsToGlobalCart();

  const handleAddProductToComparison = (productId) => {
    const existingProductInUserComparisonList =
      checkLoggedUser?.comparedProducts?.find((item) => item.id === productId);

    setLoggedUsers((users) => {
      return users.map((user) =>
        user.email === currentUser?.email
          ? {
              ...user,

              comparedProducts: existingProductInUserComparisonList
                ? [...user.comparedProducts]
                : user.comparedProducts.length < 4
                ? [...user.comparedProducts, product]
                : [...user.comparedProducts.slice(1), product],
            }
          : user,
      );
    });

    if (!existingProductInUserComparisonList) {
      Swal.fire({
        title:
          'The product has been successfully added to your comparison list.',
        text: 'Do you want to go to the comparison page ?',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, I do.',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('compare');
        }
      });
    }
  };

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
        <button
          className="flex h-[30px] w-[30px] items-center justify-center
          border-0 outline-0 duration-300 ease-in-out hover:text-thirdColor
          md:h-10 md:w-10"
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

        <Link
          to={`/product/${product?.id}`}
          className="flex h-[30px] w-[30px] items-center justify-center
          duration-300 ease-in-out hover:text-thirdColor md:h-10 md:w-10 "
        >
          <BsEye />
        </Link>

        <button
          className="flex h-[30px] w-[30px] items-center justify-center
          duration-300 ease-in-out hover:text-thirdColor md:h-10
          md:w-10"
          onClick={() => handleAddProductToComparison(product?.id)}
        >
          <BsShuffle />
        </button>
      </HoveringIcons>

      <div
        className="relative h-full w-full cursor-pointer
        overflow-hidden"
      >
        <Link to={`/product/${product?.id}`}>
          <img
            className="h-[300px] w-full object-contain
            md:h-[180px] lg:h-[220px] 2xl:h-[220px]"
            src={product?.img}
            alt={product?.img}
          />
        </Link>

        <MainButton
          text="add to cart"
          styles="invisible absolute -bottom-12 left-0 z-40 duration-300
          w-full cursor-pointer bg-primaryColor p-[5px] text-xs ease-in-out
          leading-[30px] text-white opacity-0 group-hover/box:visible hover:bg-thirdColor
          uppercase group-hover/box:bottom-0 group-hover/box:opacity-100"
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
      </div>

      <div className="p-2 md:pt-2.5">
        <RatingStars ratingLength={product.rating.rate} />

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
