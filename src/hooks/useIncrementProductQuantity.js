import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentLoggedUser } from '../atoms/currentLoggedUser';
import loggedUsersInfo from '../atoms/currentLoggedUserInfo';

function useIncrementProductQuantity(productId) {
  const currentUser = useRecoilValue(currentLoggedUser);
  const setLoggedUsers = useSetRecoilState(loggedUsersInfo);

  const handleIncrementProductQuantity = () => {
    setLoggedUsers((users) => {
      return users.map((user) =>
        user.email === currentUser?.email
          ? {
              ...user,
              cart: user.cart.find((item) => item.id === productId)
                ? user.cart.map((item) =>
                    item.id === productId
                      ? { ...item, quantity: item.quantity + 1 }
                      : item,
                  )
                : [...user.cart],
            }
          : user,
      );
    });
  };

  return handleIncrementProductQuantity;
}

export default useIncrementProductQuantity;
