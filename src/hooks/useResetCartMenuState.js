import { useSetRecoilState } from 'recoil';
import { isCartMenuOpened } from '../atoms/isOpened';

function useResetCartMenuState() {
  const setIsCartMenuOpen = useSetRecoilState(isCartMenuOpened);

  const handleResetCartMenuState = () => {
    setIsCartMenuOpen((prevState) => prevState && !prevState);
  };

  return handleResetCartMenuState;
}

export default useResetCartMenuState;
