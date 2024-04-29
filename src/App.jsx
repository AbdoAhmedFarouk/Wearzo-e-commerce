import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Outlet } from 'react-router-dom';
import { auth } from './firebase';
import { currentLoggedUser } from './atoms/currentLoggedUser';
import { isCheckingUserStateLoading } from './atoms/isCheckingUserStateLoading';

import ScrollToTop from './hooks/useScrollToTop';

import HeaderWrapper from './sections/HeaderWrapper/HeaderWrapper';
import FooterWrapper from './sections/FooterWrapper/FooterWrapper';
import Modal from './ui/Modal/Modal';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const setIsUserLoggedStateLoading = useSetRecoilState(
    isCheckingUserStateLoading,
  );
  const setCurrentUser = useSetRecoilState(currentLoggedUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsUserLoggedStateLoading(false);
    });

    return () => unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ScrollToTop />

      <Modal />

      <HeaderWrapper />

      <Outlet />

      <FooterWrapper />
    </>
  );
}

export default App;
