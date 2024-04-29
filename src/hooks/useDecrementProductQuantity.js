import { useRecoilValue, useSetRecoilState } from 'recoil';
import loggedUsersInfo from '../atoms/currentLoggedUserInfo';
import { currentLoggedUser } from '../atoms/currentLoggedUser';

function useDecrementProductQuantity(productId) {
  const currentUser = useRecoilValue(currentLoggedUser);
  const setLoggedUsers = useSetRecoilState(loggedUsersInfo);

  const handleDecrementProductQuantity = () => {
    setLoggedUsers((users) => {
      return users.map((user) =>
        user.email === currentUser?.email
          ? {
              ...user,
              cart: user.cart.find((item) => item.id === productId)
                ? user.cart.map((item) =>
                    item.id === productId
                      ? {
                          ...item,
                          quantity:
                            item.quantity === 1
                              ? item.quantity
                              : item.quantity - 1,
                        }
                      : item,
                  )
                : [...user.cart],
            }
          : user,
      );
    });
  };

  return handleDecrementProductQuantity;
}

export default useDecrementProductQuantity;
