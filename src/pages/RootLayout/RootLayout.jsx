import { useSetRecoilState } from 'recoil';
import { isAllProductsLoading } from '../../atoms/isLoading';
import { allProducts } from '../../atoms/products';
import { allProductsError } from '../../atoms/error';

import useUseEffectToFetchProducts from '../../hooks/useUseEffectToFetchProducts';

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

  useUseEffectToFetchProducts(setProducts, setIsLoading, setError);

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
