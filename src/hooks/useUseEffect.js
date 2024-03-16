import { useEffect } from 'react';
import axios from 'axios';

const apiURL = 'http://localhost:8000/products';

function useUseEffect(setState, setLoadingState, setError, productId) {
  useEffect(() => {
    const fetchFunction = async () => {
      try {
        setLoadingState(true);
        setError('');

        const res = await axios.get(
          `${productId ? `${apiURL}/${productId}` : apiURL}`,
        );

        if (res.status !== 200) {
          throw new Error('error with fetching products');
        }

        setState(res.data);
        setError('');

        setLoadingState(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingState(false);
      }
    };

    fetchFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);
}

export default useUseEffect;
