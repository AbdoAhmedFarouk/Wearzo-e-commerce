import useUserCart from './useUserCart';

function useInputValueHandler(productId) {
  const { setLoggedUsers, currentUser } = useUserCart();

  const inpValueHandler = (e) => {
    setLoggedUsers((users) => {
      return users.map((user) =>
        user.email === currentUser?.email
          ? {
              ...user,
              cart: user.cart.find((item) => item.id === productId)
                ? user.cart.map((item) =>
                    item.id === productId
                      ? { ...item, quantity: Number(e.target.value) }
                      : item,
                  )
                : [...user.cart],
            }
          : user,
      );
    });
  };

  return inpValueHandler;
}
export default useInputValueHandler;
