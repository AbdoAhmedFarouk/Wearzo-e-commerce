import ProductBox from '../../components/ProductBox/ProductBox';
import WrapperSection from '../../components/WrapperSection/WrapperSection';

function FeaturedProductsWrapper() {
  return (
    <WrapperSection
      sectionStyles="2xl:mt-20 sm:mt-[30px] md:mt-10 mt-5
    lg:mt-[50px]"
    >
      <div
        className="relative text-center before:absolute
        before:left-0 before:top-[13%] before:h-0.5 before:w-full
        before:bg-fourthColor xxs:before:top-[17%] lg:before:top-[18%]"
      >
        <ul
          className="relative mb-5 inline-block bg-white
          px-5 align-middle text-sm font-medium uppercase
          leading-none text-secondaryColor xxs:px-[30px]
          xxs:text-lg xxs:leading-none md:mb-[30px] md:px-[50px]
          md:text-2xl md:leading-none 2xl:text-[30px]"
        >
          <li className="inline-block">
            <a
              className="relative block pb-2.5 
              ease-in-out before:absolute before:bottom-0
              before:left-1/2 before:h-0.5 before:w-0
            before:-translate-x-1/2 before:bg-thirdColor
              before:duration-300 before:content-['']
              hover:text-thirdColor hover:before:w-full
              2xl:pb-[18px]"
              href="#"
            >
              BestSeller
            </a>
          </li>

          <li
            className="ms-[15px] inline-block xxs:ms-5 xs:ms-[25px]
            md:ms-[34px] lg:ms-11"
          >
            <a
              className="relative block pb-2.5 
              ease-in-out before:absolute before:bottom-0
              before:left-1/2 before:h-0.5 before:w-0
            before:-translate-x-1/2 before:bg-thirdColor
              before:duration-300 before:content-['']
              hover:text-thirdColor hover:before:w-full
              2xl:pb-[18px]"
              href="#"
            >
              Featured
            </a>
          </li>
        </ul>
      </div>

      <div
        className="grid grid-cols-1 gap-2.5 xxs:grid-cols-2
        sm:grid-cols-3 sm:gap-[15px] md:gap-[30px] md:gap-y-5
        2xl:grid-cols-5"
      >
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div>
    </WrapperSection>
  );
}

export default FeaturedProductsWrapper;
