import isProductFoundAlert from './isProductFoundAlert';
import useUserCart from './useUserCart';

function useAddProductsToUserCart() {
  const { setLoggedUsers, currentUser, checkLoggedUser } = useUserCart();

  const handleAddProductToUserCart = (product) => {
    const existingProductInUserCart = checkLoggedUser?.cart?.find(
      (item) => item.id === product?.id,
    );

    const productObj = {
      id: product?.id,
      title: product?.title,
      price: product?.price,
      image: product?.image,
      quantity: 1,
      discount: product?.discount,
      review: '',
      rate: 0,
    };

    setLoggedUsers((users) => {
      return users.map((user) =>
        user.email === currentUser?.email
          ? {
              ...user,

              cart: existingProductInUserCart
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
