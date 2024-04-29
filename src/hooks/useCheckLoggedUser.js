import { useRecoilValue } from 'recoil';
import { currentLoggedUser } from '../atoms/currentLoggedUser';
import loggedUsersInfo from '../atoms/currentLoggedUserInfo';

function useCheckLoggedUser() {
  const loggedUsers = useRecoilValue(loggedUsersInfo);
  const currentUser = useRecoilValue(currentLoggedUser);

  const checkLoggedUser = loggedUsers.find(
    (user) => user.email === currentUser?.email,
  );

  return checkLoggedUser;
}

export default useCheckLoggedUser;
