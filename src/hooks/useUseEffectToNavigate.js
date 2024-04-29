import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { currentLoggedUser } from '../atoms/currentLoggedUser';

function useUseEffectToNavigate() {
  const currentUser = useRecoilValue(currentLoggedUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.email) {
      navigate('/', { replace: true });
    }
  }, [currentUser, navigate]);
}

export default useUseEffectToNavigate;
