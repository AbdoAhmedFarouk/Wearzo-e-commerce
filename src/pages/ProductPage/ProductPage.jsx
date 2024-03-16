import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  isProductInProductPageLoading,
  isRelatedProductsInProductPageLoading,
} from '../../atoms/isLoading';
import { useParams } from 'react-router-dom';
import { relatedProductsInProductPage } from '../../atoms/products';
import { allRelatedProductsError, chosenProductError } from '../../atoms/error';

import clickedProduct from '../../atoms/product';
import useUseEffect from '../../hooks/useUseEffect';

import Container from '../../components/Container/Container';
import SectionTag from '../../components/SectionTag/SectionTag';
import PageTitle from '../../components/PageTitle/PageTitle';
import ProductIconInProductPage from '../../components/ProductIconInProductPage/ProductIconInProductPage';
import ProductBoxContainer from '../../components/ProductBoxContainer/ProductBoxContainer';
import ProductInfoInProductPage from '../../components/ProductInfoInProductPage/ProductInfoInProductPage';
import ProductReviewsInProductPage from '../../components/ProductReviewsInProductPage/ProductReviewsInProductPage';

// import ErrorPage from '../ErrorPage/ErrorPage';

function ProductPage() {
  const [chosenProduct, setChosenProduct] = useRecoilState(clickedProduct);
  const [theChosenProductError, setTheChosenProductError] =
    useRecoilState(chosenProductError);
  const [relatedProductsError, setRelatedProductsError] = useRecoilState(
    allRelatedProductsError,
  );

  const [relatedProducts, setRelatedProducts] = useRecoilState(
    relatedProductsInProductPage,
  );
  const [isRelatedProductsLoading, setIsRelatedProductsLoading] =
    useRecoilState(isRelatedProductsInProductPageLoading);
  const setIsProductLoading = useSetRecoilState(isProductInProductPageLoading);

  const { id } = useParams();

  useUseEffect(
    setChosenProduct,
    setIsProductLoading,
    setTheChosenProductError,
    id,
  );

  useUseEffect(
    setRelatedProducts,
    setIsRelatedProductsLoading,
    setRelatedProductsError,
  );

  // if (isNaN(+id)) return <ErrorPage />;

  return (
    <SectionTag>
      <PageTitle text={chosenProduct?.title} />

      <div>
        <Container styles="text-primaryColor">
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-12">
            <ProductIconInProductPage errorMsg={theChosenProductError} />

            <ProductInfoInProductPage urlProductId={id} />
          </div>

          <ProductReviewsInProductPage />

          <div
            className="mt-5 md:mt-[30px] lg:mt-20
            2xl:mt-[50px]"
          >
            <ProductBoxContainer
              productsState={relatedProducts}
              isLoadingState={isRelatedProductsLoading}
              errorMsg={relatedProductsError}
              text="related products"
              childStyles="grid grid-cols-1 items-center gap-5
              overflow-hidden duration-1000 xxs:grid-cols-2
              sm:grid-cols-3 sm:gap-[15px] md:gap-[30px] md:gap-y-5
              2xl:grid-cols-5"
              loaderStyles="m-auto w-fit"
              sliceMethodStartNum={15}
              isHeaderShown={true}
            />
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default ProductPage;
