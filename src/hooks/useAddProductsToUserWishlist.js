import { useRecoilState, useRecoilValue } from 'recoil';
import { currentLoggedUser } from '../atoms/currentLoggedUser';
import loggedUsersInfo from '../atoms/currentLoggedUserInfo';
import isProductFoundAlert from './isProductFoundAlert';

function useAddProductsToUserWishList(product) {
  const [loggedUsers, setLoggedUsers] = useRecoilState(loggedUsersInfo);
  const currentUser = useRecoilValue(currentLoggedUser);

  const existingProductInUserCart = loggedUsers
    ?.find((user) => user.email === currentUser?.email)
    ?.wishList?.find((item) => item.id === product?.id);

  const handleAddProductToUserWishlist = () => {
    const productObj = {
      id: product?.id,
      title: product?.title,
      price: product?.price,
      img: product?.image,
      discount: product?.discount,
    };

    setLoggedUsers((users) => {
      return users.map((user) =>
        user.email === currentUser?.email
          ? {
              ...user,
              wishList: user.wishList.find((item) => item.id === product.id)
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
