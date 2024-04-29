import { useRecoilState, useRecoilValue } from 'recoil';
import { allProducts } from '../../atoms/products';
import { isAllProductsLoading } from '../../atoms/isLoading';
import { isHomePageLinksStepsNaved } from '../../atoms/linksNavigationSteps';
import { allProductsError } from '../../atoms/error';

import ProductBox from '../../components/ProductBox/ProductBox';
import WrapperSection from '../../components/WrapperSection/WrapperSection';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function FeaturedProductsWrapper() {
  const [step1, setStep1] = useRecoilState(isHomePageLinksStepsNaved);
  const products = useRecoilValue(allProducts);
  const isLoading = useRecoilValue(isAllProductsLoading);
  const error = useRecoilValue(allProductsError);

  const handleBestSellerNavigation = () => {
    if (step1 > 1) setStep1(step1 - 1);
  };

  const handleFeaturedNavigation = () => {
    if (step1 < 2) setStep1(step1 + 1);
  };

  const handlePageLoading = (e) => {
    e.preventDefault();
  };

  return (
    <WrapperSection
      sectionStyles="2xl:mt-20 sm:mt-[30px] md:mt-10 mt-5
      lg:mt-[50px]"
    >
      <div
        className="relative z-0 text-center before:absolute
        before:left-0 before:top-[26.5%] before:h-0.5 before:w-full
        before:bg-fourthColor xxs:before:top-[29%] sm:before:top-[27%]
        md:before:top-[32%] lg:before:top-[28%]"
      >
        <ul
          className="relative m-auto mb-5 flex w-fit items-center
          justify-center space-x-[15px] bg-white px-4 text-sm
          font-medium uppercase leading-none text-secondaryColor xxs:space-x-5 xxs:px-6
          xxs:text-lg xxs:leading-none xs:space-x-[25px] sm:px-8
          md:mb-[30px] md:space-x-[34px] md:text-2xl
          md:leading-none lg:space-x-11 lg:px-16 2xl:text-[30px]"
        >
          <li onClick={handleBestSellerNavigation}>
            <a
              className={`hover-animation relative inline-block pb-2.5
              2xl:pb-[18px] ${
                step1 <= 1 ? 'steps-active' : 'links-hover-effect'
              }`}
              href="#"
              onClick={handlePageLoading}
            >
              BestSeller
            </a>
          </li>

          <li onClick={handleFeaturedNavigation}>
            <a
              className={`hover-animation relative inline-block pb-2.5
              2xl:pb-[18px] ${
                step1 >= 2 ? 'steps-active' : 'links-hover-effect'
              }`}
              href="#"
              onClick={handlePageLoading}
            >
              Featured
            </a>
          </li>
        </ul>
      </div>

      {isLoading && <Loader />}

      {!isLoading && !error && (
        <div
          className="grid grid-cols-1 gap-2.5 xxs:grid-cols-2
          sm:grid-cols-3 sm:gap-[15px] md:gap-[30px] md:gap-y-5
          2xl:grid-cols-5"
        >
          {step1 <= 1 ? (
            <>
              {products.slice(8, 13).map((product) => (
                <div key={product.id}>
                  <ProductBox product={product} />
                </div>
              ))}
            </>
          ) : (
            <>
              {products.slice(15).map((product) => (
                <div key={product.id}>
                  <ProductBox product={product} />
                </div>
              ))}
            </>
          )}
        </div>
      )}

      {error && <ErrorMessage msg={error} />}
    </WrapperSection>
  );
}

export default FeaturedProductsWrapper;
