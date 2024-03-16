import { useEffect } from 'react';

import axios from 'axios';

function useLimitProductsUseEffect(setProductsState, setIsLoading, setError) {
  useEffect(() => {
    const fetchFunction = async () => {
      try {
        setIsLoading(true);
        setError('');

        const res = await axios.get(
          `https://fakestoreapi.com/products?limit=4`,
        );

        const slicedData = res.data.slice(1);

        if (res.status !== 200) {
          throw new Error('error with fetching products');
        }

        setProductsState(slicedData);
        setError('');

        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFunction();
  }, [setProductsState, setIsLoading, setError]);
}

export default useLimitProductsUseEffect;
