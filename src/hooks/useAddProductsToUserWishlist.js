import isProductFoundAlert from './isProductFoundAlert';
import useUserCart from './useUserCart';

function useAddProductsToUserWishList() {
  const { setLoggedUsers, currentUser, checkLoggedUser } = useUserCart();

  const handleAddProductToUserWishlist = (product) => {
    const existingProductInUserCart = checkLoggedUser?.wishList?.find(
      (item) => item.id === product?.id,
    );

    const productObj = {
      id: product?.id,
      title: product?.title,
      price: product?.price,
      img: product?.img,
      discount: product?.discount,
    };

    setLoggedUsers((users) => {
      return users.map((user) =>
        user.email === currentUser?.email
          ? {
              ...user,
              wishList: existingProductInUserCart
                ? user.wishList.map((item) =>
                    item.id === productObj.id ? item : item,
                  )
                : [...user.wishList, productObj],
            }
          : user,
      );
    });

    isProductFoundAlert(
      existingProductInUserCart,
      'The product has been added successfully to your wishlist',
      'The product is already exist in your wishlist',
      'info',
    );
  };
  return handleAddProductToUserWishlist;
}

export default useAddProductsToUserWishList;
