import PromoBannerBox from '../../components/PromoBannerBox/PromoBannerBox';
import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';
import WrapperSection from '../../components/WrapperSection/WrapperSection';

import banner1 from '../../assets/banner-1 (1).jpg';
import subBanner1 from '../../assets/subbanner-1.jpg';
import banner2 from '../../assets/banner-2 (1).jpg';
import subBanner2 from '../../assets/subbanner-2.jpg';

function PromoBannerWrapper() {
  return (
    <WrapperSection
      sectionStyles="mt-5 sm:mt-[30px] md:mt-10 lg:mt-[50px] 2xl:mt-20"
      containerStyles="grid grid-cols-1 gap-5 md:grid-cols-2
      md:gap-[50px]"
    >
      <PromoBannerBox mainImg={<img src={banner1} alt={banner1} />}>
        <div
          className="relative mx-[15px] -mt-20 flex items-center bg-white p-2.5
          text-primaryColor shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] xxxs:p-[15px] xxs:mx-[30px]
          xxs:-mt-[110px] xxs:p-5 xs:mx-[50px] xs:-mt-[150px] xs:p-[30px]
          md:mx-[30px] md:-mt-[110px] md:p-5 lg:mx-[50px] lg:-mt-[150px] lg:p-[30px]"
        >
          <div className="w-[42.48%]">
            <img src={subBanner1} alt={subBanner1} />
          </div>

          <div className="ms-2.5 flex-1 xxs:ms-5 ">
            <h3
              className="mb-1.5 text-xs font-medium uppercase
              leading-none text-primaryColor xxxs:mb-[15px] xxxs:text-base
              xxxs:leading-none xs:text-xl xs:leading-none sm:mb-5
              sm:text-2xl sm:leading-none md:mb-[15px] md:text-base
              md:leading-none lg:text-xl lg:leading-none xl:text-2xl
              xl:leading-none 2xl:mb-[21px] 2xl:text-3xl 2xl:leading-none"
            >
              PINK HANDBAG
            </h3>

            <p
              className="text-xs leading-none text-secondaryColor
            xxxs:mb-[15px] xxxs:text-xs xxs:mb-5 xxs:text-sm sm:text-xl
            md:text-sm xl:text-lg xl:leading-6 2xl:mb-[27px]"
            >
              Cum sociis natoque peibus et magnis parturien. Lorem ipsum dolor
              sit
            </p>

            <p
              className="my-1.5 text-xs font-medium
            leading-none text-primaryColor xxxs:my-0 xxxs:mb-[15px]
            xxxs:text-sm xxxs:leading-none xxs:mb-5 xxs:text-xl
            xxs:leading-none sm:text-2xl sm:leading-none md:text-xl
            md:leading-none xl:text-2xl 2xl:mb-[29px] 2xl:text-3xl
            2xl:leading-none"
            >
              $315.00
            </p>

            <ShopNowBtn text="shop now" />
          </div>
        </div>
      </PromoBannerBox>

      <PromoBannerBox mainImg={<img src={banner2} alt={banner2} />}>
        <div
          className="relative mx-[15px] -mt-20 flex items-center bg-white p-2.5
          text-primaryColor shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] xxxs:p-[15px] xxs:mx-[30px]
          xxs:-mt-[110px] xxs:p-5 xs:mx-[50px] xs:-mt-[150px] xs:p-[30px]
          md:mx-[30px] md:-mt-[110px] md:p-5 lg:mx-[50px] lg:-mt-[150px] lg:p-[30px]"
        >
          <div className="w-[42.48%]">
            <img src={subBanner2} alt={subBanner2} />
          </div>

          <div className="ms-2.5 flex-1 xxs:ms-5 ">
            <h3
              className="mb-1.5 text-xs font-medium uppercase
              leading-none text-primaryColor xxxs:mb-[15px] xxxs:text-base
              xxxs:leading-none xs:text-xl xs:leading-none sm:mb-5
              sm:text-2xl sm:leading-none md:mb-[15px] md:text-base
              md:leading-none lg:text-xl lg:leading-none xl:text-2xl
              xl:leading-none 2xl:mb-[21px] 2xl:text-3xl 2xl:leading-none"
            >
              SUNGLASSES
            </h3>

            <p
              className="text-xs leading-none text-secondaryColor
            xxxs:mb-[15px] xxxs:text-xs xxs:mb-5 xxs:text-sm sm:text-xl
            md:text-sm xl:text-lg xl:leading-6 2xl:mb-[27px]"
            >
              Cum sociis natoque peibus et magnis parturien. Lorem ipsum dolor
              sit
            </p>

            <div
              className="my-1.5 flex items-center text-xs font-medium
            leading-none text-primaryColor xxxs:my-0 xxxs:mb-[15px]
            xxxs:text-sm xxxs:leading-none xxs:mb-5 xxs:text-xl
            xxs:leading-none sm:text-2xl sm:leading-none md:text-xl
            md:leading-none xl:text-2xl 2xl:mb-[29px] 2xl:text-3xl
            2xl:leading-none"
            >
              <p>$479.00</p>

              <span
                className="ms-1 text-secondaryColor line-through
              xxxs:ms-4 xs:ms-5 sm:ms-6 md:ms-4 lg:ms-5 xl:ms-6 2xl:ms-4
              2xl:text-2xl"
              >
                $425.00
              </span>
            </div>

            <ShopNowBtn text="shop now" />
          </div>
        </div>
      </PromoBannerBox>
    </WrapperSection>
  );
}

export default PromoBannerWrapper;
