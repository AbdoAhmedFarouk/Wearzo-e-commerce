import { useRecoilState } from 'recoil';
import { toggleSamples } from '../../atoms/toggleSlider';

import { useSlidersTimer } from '../../hooks/useSlidersTimer';

import { SamplesData } from '../../assets/SamplesData';

import NavigationBullets from '../NavigationBullets/NavigationBullets';

const delay = 5000;

function FooterTestimonials() {
  const [sample, setSample] = useRecoilState(toggleSamples);

  useSlidersTimer(sample, setSample, delay, SamplesData.length);

  return (
    <div
      className="relative mb-5 overflow-hidden 
      text-center md:mb-0 md:pr-[15px] md:before:absolute
      md:before:right-0 md:before:top-0 md:before:h-full
      md:before:w-[1px] md:before:bg-white md:before:opacity-20"
    >
      <div className="overflow-hidden whitespace-nowrap">
        <h2
          className="mb-[30px] text-base font-medium uppercase
        md:mb-10"
        >
          Our client says
        </h2>

        {SamplesData.map((sampleImg, index) => (
          <div
            className="inline-block w-full duration-200"
            style={{ transform: `translate3d(${-sample * 100}%, 0, 0)` }}
            key={index}
          >
            <div className="m-auto inline-block">
              <img src={sampleImg.image} alt={sampleImg.image} />
            </div>

            <p
              className="my-[15px] whitespace-normal text-sm
              md:mb-[25px] md:mt-[26px] md:text-base"
            >
              Excellent Company! good work, on time! and I look forward working
              with them on my next project.
            </p>

            <div className="flex flex-col items-center capitalize">
              <span className="mb-1.5 text-base font-medium leading-5">
                sample{sample + 1}
              </span>
              <span className="text-sm leading-5">customer</span>
            </div>
          </div>
        ))}
      </div>

      <NavigationBullets
        parentStyles="mt-[15px] flex items-center justify-center
        gap-2.5 md:mt-[22px]"
        bulletsArr={SamplesData}
        setState={setSample}
        state={sample}
      />
    </div>
  );
}

export default FooterTestimonials;
