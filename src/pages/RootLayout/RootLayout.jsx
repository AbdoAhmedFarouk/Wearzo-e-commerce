import MainWrapper from '../../sections/MainWrapper/MainWrapper';
import HomePage from '../../sections/HomePage/HomePage';
import PromoBannerWrapper from '../../sections/PromoBannerWrapper/PromoBannerWrapper';
import PromoInfoWrapper from '../../sections/PromoInfoWrapper/PromoInfoWrapper';
import NewProductsWrapper from '../../sections/NewProductsWrapper/NewProductsWrapper';
import FeaturedProductsWrapper from '../../sections/FeaturedProductsWrapper/FeaturedProductsWrapper';
import SpecialProductsWrapper from '../../sections/SpecialProductsWrapper/SpecialProductsWrapper';
import LatestBlogWrapper from '../../sections/LatestBlogWrapper/LatestBlogWrapper';
import BrandWrapper from '../../sections/BrandWrapper/BrandWrapper';

function RootLayout() {
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
