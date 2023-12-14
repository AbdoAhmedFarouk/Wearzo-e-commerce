import { Outlet } from 'react-router-dom';

import HeaderWrapper from './sections/HeaderWrapper/HeaderWrapper';
import FooterWrapper from './sections/FooterWrapper/FooterWrapper';

import Modal from './ui/Modal/Modal';

function App() {
  // const [isLoading, setIsLoading] = useState(false);

  // useLayoutEffect(() => {
  //   const loaderFn = () => {
  //     setIsLoading(true);

  //     if (isLoading) <Loader />;
  //     setIsLoading(false);
  //   };
  //   loaderFn();

  //   return () => window.removeEventListener('load', loaderFn);
  // }, [isLoading]);

  return (
    <>
      <Modal />
      <HeaderWrapper />
      <Outlet />
      <FooterWrapper />
    </>
  );
}

export default App;
