import { useSetRecoilState } from 'recoil';
import { isAllProductsLoading } from '../../atoms/isLoading';
import { allProducts } from '../../atoms/products';
import { allProductsError } from '../../atoms/error';
import useUseEffect from '../../hooks/useUseEffect';
// import axios from 'axios';
// import AddedProductToCartMenu from '../../atoms/addedProductToCartMenu';

import MainWrapper from '../../sections/MainWrapper/MainWrapper';
import HomePage from '../../sections/HomePage/HomePage';
import PromoBannerWrapper from '../../sections/PromoBannerWrapper/PromoBannerWrapper';
import PromoInfoWrapper from '../../sections/PromoInfoWrapper/PromoInfoWrapper';
import NewProductsWrapper from '../../sections/NewProductsWrapper/NewProductsWrapper';
import SpecialProductsWrapper from '../../sections/SpecialProductsWrapper/SpecialProductsWrapper';
import LatestBlogWrapper from '../../sections/LatestBlogWrapper/LatestBlogWrapper';
import BrandWrapper from '../../sections/BrandWrapper/BrandWrapper';
import FeaturedProductsWrapper from '../../sections/FeaturedProductsWrapper/FeaturedProductsWrapper';

function RootLayout() {
  const setProducts = useSetRecoilState(allProducts);
  const setIsLoading = useSetRecoilState(isAllProductsLoading);
  const setError = useSetRecoilState(allProductsError);

  // const setAddedProductToCart = useSetRecoilState(AddedProductToCartMenu);

  // useEffect(() => {
  //   async function getProducts() {
  //     try {
  //       setIsLoading(true);
  //       const res = await axios.get('http://localhost:8000/products');
  //       res.data;
  //       setIsLoading(false);
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   }

  //   getProducts();
  // }, [setIsLoading, setProducts]);

  useUseEffect(setProducts, setIsLoading, setError);

  // useEffect(() => {
  //   const getCartProducts = async () => {};

  //   getCartProducts();
  // }, [setAddedProductToCart]);

  return (
    <>
      <MainWrapper>
        <HomePage />
        <PromoBannerWrapper />
        <PromoInfoWrapper />
        <NewProductsWrapper />
        <FeaturedProductsWrapper />
        <SpecialProductsWrapper />
        <LatestBlogWrapper />
        <BrandWrapper />
      </MainWrapper>
    </>
  );
}

export default RootLayout;
