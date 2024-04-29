import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentLoggedUser } from '../atoms/currentLoggedUser';
import loggedUsersInfo from '../atoms/currentLoggedUserInfo';

function useInputValueHandler(productId) {
  const currentUser = useRecoilValue(currentLoggedUser);
  const setLoggedUsers = useSetRecoilState(loggedUsersInfo);

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
