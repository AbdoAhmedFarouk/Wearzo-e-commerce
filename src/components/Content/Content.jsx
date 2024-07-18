import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { toggleIndex } from '../../atoms/toggleSlider';
import { useSlidersTimer } from '../../hooks/useSlidersTimer';

import NavigationBullets from '../NavigationBullets/NavigationBullets';

import { SliderData } from '../../assets/SliderData';

const delay = 10000;

function Content() {
  const [index, setIndex] = useRecoilState(toggleIndex);

  useSlidersTimer(index, setIndex, delay, SliderData.length);

  return (
    <div
      className="relative h-full w-full overflow-hidden
      text-primaryColor"
    >
      <div
        className={`${
          index === 0 ? 'left-[7%] text-left' : 'right-[7%] text-right'
        } absolute top-1/2 z-50 -translate-y-1/2`}
      >
        <h3
          className="mb-[5px] translate-y-[50px] animate-[fadeInUp_0.5s_0.5s_both]
          text-[9px] leading-[10px]
          xxxs:text-[10px] xxxs:leading-[14px] 
          xxs:mb-1.5 xxs:text-[13px] xxs:leading-4 xs:mb-[10px]
          xs:text-sm sm:text-base
          sm:leading-5 md:text-[22px] md:leading-[30px] lg:mb-[11]
          2xl:text-2xl 2xl:leading-[30px]
          "
        >
          Sale Up to 40% off
        </h3>

        <div
          className="mb-1.5 text-xs font-medium capitalize leading-[18px]
          xxxs:mb-2 xxxs:text-sm xxs:mb-3
          xxs:text-lg xxs:leading-[26px] xs:mb-[15px] xs:text-[22px]
          xs:leading-[32px] sm:mb-5 sm:text-[28px]
          sm:leading-[34px] md:mb-[25px] md:text-[38px]
          md:leading-[48px] lg:mb-[37px] lg:text-[40px] lg:leading-[50px]
          2xl:text-[50px] 2xl:leading-[60px]"
        >
          <p className="translate-y-[50px] animate-[fadeInUp_0.5s_0.7s_both]">
            {index === 0 ? 'winter' : 'new season'}
          </p>

          <p className="translate-y-[50px] animate-[fadeInUp_0.5s_0.7s_both]">
            {index === 0 ? 'trendy collection' : 'fashion collection'}
          </p>
        </div>

        <button>
          <Link
            className='className="inline-block lg:text-sm" translate-y-[50px]
            animate-[fadeInUp_0.5s_0.9s_both] border-0 bg-primaryColor px-2 py-[5px] text-[8px] font-normal
            uppercase leading-none text-white outline-0 duration-300 ease-in-out
            hover:bg-thirdColor xxxs:px-3 xxxs:py-[5px] xxxs:text-[10px] xxxs:leading-[16px] xs:px-5
            xs:py-2 xs:text-xs lg:px-[30px] lg:py-2.5'
            to="specials"
          >
            shop now
          </Link>
        </button>
      </div>

      <div className="relative h-full w-full">
        <div
          className="h-full w-full whitespace-nowrap duration-1000"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {SliderData.map((img, index) => (
            <div className="inline-block h-full w-full" key={index}>
              <img
                className="pointer-events-none h-full w-full md:object-cover"
                src={img.image}
                alt={img.image}
              />
            </div>
          ))}
        </div>

        <NavigationBullets
          parentStyles="absolute bottom-2.5 left-1/2 z-50 flex
          -translate-x-1/2 space-x-3 md:bottom-5"
          buttonStyle="z-50 duration-500"
          bulletsArr={SliderData}
          setState={setIndex}
          state={index}
        />
      </div>
    </div>
  );
}

export default Content;
