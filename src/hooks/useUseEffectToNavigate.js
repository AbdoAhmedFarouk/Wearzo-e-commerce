import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useUserCart from './useUserCart';

function useUseEffectToNavigate() {
  const navigate = useNavigate();

  const { currentUser } = useUserCart();

  useEffect(() => {
    if (currentUser?.email) {
      navigate('/', { replace: true });
    }
  }, [currentUser, navigate]);
}

export default useUseEffectToNavigate;
