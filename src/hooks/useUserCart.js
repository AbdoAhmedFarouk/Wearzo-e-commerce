import { useRecoilValue, useSetRecoilState } from 'recoil';

import { currentLoggedUser } from '../atoms/currentLoggedUser';
import loggedUsersInfo from '../atoms/currentLoggedUserInfo';

import useCheckLoggedUser from './useCheckLoggedUser';

function useUserCart() {
  const currentUser = useRecoilValue(currentLoggedUser);
  const setLoggedUsers = useSetRecoilState(loggedUsersInfo);
  const checkLoggedUser = useCheckLoggedUser();

  return { setLoggedUsers, currentUser, checkLoggedUser };
}

export default useUserCart;
