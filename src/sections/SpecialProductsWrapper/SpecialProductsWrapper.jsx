import { useRecoilValue } from 'recoil';
import { allProducts } from '../../atoms/products';
import { isAllProductsLoading } from '../../atoms/isLoading';
import { allProductsError } from '../../atoms/error';

import PromoBannerBox from '../../components/PromoBannerBox/PromoBannerBox';
import WrapperSection from '../../components/WrapperSection/WrapperSection';
import MainButton from '../../components/MainButton/MainButton';
import ProductBoxContainer from '../../components/ProductBoxContainer/ProductBoxContainer';

import banner4 from '../../assets/banner-4.jpg';

function SpecialProductsWrapper() {
  const products = useRecoilValue(allProducts);
  const isLoading = useRecoilValue(isAllProductsLoading);
  const error = useRecoilValue(allProductsError);

  return (
    <WrapperSection
      sectionStyles="2xl:mt-20 sm:mt-[30px] md:mt-10 mt-5 lg:mt-[50px]"
      containerStyles="md:flex md:gap-5"
    >
      <ProductBoxContainer
        productsState={products}
        isLoadingState={isLoading}
        errorMsg={error}
        parentStyles="flex-1"
        text="special products"
        loaderStyles="flex h-full items-center justify-center"
        childStyles="grid grid-cols-1 gap-5
        xxs:grid-cols-2 sm:grid-cols-3 sm:gap-[15px]
        md:gap-[30px] md:gap-y-5 2xl:grid-cols-4"
        sliceMethodStartNum={12}
        isHeaderShown={true}
      />

      <PromoBannerBox
        parentStyles="h-fit hidden md:block"
        width="h-[724.18px] w-full 2xl:w-[435.99px] 2xl:h-[724.18px]"
        mainImg={
          <img
            className="h-full w-full object-contain"
            src={banner4}
            alt={banner4}
          />
        }
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-white
          md:bottom-14 md:w-64 lg:bottom-6 lg:w-80 xl:bottom-[30px]
          xl:w-[375.99px]"
        >
          <div
            className="flex items-center justify-between md:p-3 lg:p-4
            xl:p-5"
          >
            <h1
              className="font-medium capitalize leading-none
              text-primaryColor md:text-lg lg:text-xl xl:text-2xl"
            >
              jeans jackets
            </h1>

            <MainButton text="shop now" />
          </div>
        </div>
      </PromoBannerBox>
    </WrapperSection>
  );
}

export default SpecialProductsWrapper;
