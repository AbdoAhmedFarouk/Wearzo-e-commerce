import { useRecoilState, useRecoilValue } from 'recoil';
import { currentLoggedUser } from '../atoms/currentLoggedUser';
import loggedUsersInfo from '../atoms/currentLoggedUserInfo';
import isProductFoundAlert from './isProductFoundAlert';

function useAddProductsToUserCart(product) {
  const [loggedUsers, setLoggedUsers] = useRecoilState(loggedUsersInfo);
  const currentUser = useRecoilValue(currentLoggedUser);

  const existingProductInUserCart = loggedUsers
    ?.find((user) => user.email === currentUser?.email)
    ?.cart?.find((item) => item.id === product?.id);

  const handleAddProductToUserCart = () => {
    const productObj = {
      id: product?.id,
      title: product?.title,
      price: product?.price,
      img: product?.image,
      quantity: 1,
      discount: product?.discount,
      review: '',
    };

    setLoggedUsers((users) => {
      return users.map((user) =>
        user.email === currentUser?.email
          ? {
              ...user,
              cart: user.cart.find((item) => item.id === product?.id)
                ? user.cart.map((item) =>
                    item.id === productObj.id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item,
                  )
                : [...user.cart, productObj],
            }
          : user,
      );
    });

    isProductFoundAlert(
      existingProductInUserCart,
      'The product has been added successfully to your cart',
      'The product quantity increased by one in your cart',
    );
  };

  return handleAddProductToUserCart;
}

export default useAddProductsToUserCart;
