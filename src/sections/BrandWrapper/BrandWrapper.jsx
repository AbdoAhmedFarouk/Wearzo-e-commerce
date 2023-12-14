import WrapperSection from '../../components/WrapperSection/WrapperSection';

import brandImg1 from '../../assets/4.jpg';
import brandImg2 from '../../assets/5.jpg';
import brandImg3 from '../../assets/6.jpg';
import brandImg4 from '../../assets/7.jpg';
import brandImg5 from '../../assets/8.jpg';
import brandImg6 from '../../assets/9.jpg';
import brandImg7 from '../../assets/10.jpg';

function BrandWrapper() {
  return (
    <WrapperSection
      sectionStyles="2xl:mt-20 sm:mt-[30px] md:mt-10
      mt-5 lg:mt-[50px]"
      containerStyles="border-t border-fourthColor pt-5
      sm:pt-[30px] md:pt-10 lg:pt-[50px] 2xl:pt-20"
    >
      <div
        className="grid grid-cols-7 place-items-center
      gap-6"
      >
        <div className="cursor-pointer">
          <img src={brandImg1} alt={brandImg1} />
        </div>
        <div className="cursor-pointer">
          <img src={brandImg2} alt={brandImg2} />
        </div>
        <div className="cursor-pointer">
          <img src={brandImg3} alt={brandImg3} />
        </div>
        <div className="cursor-pointer">
          <img src={brandImg4} alt={brandImg4} />
        </div>
        <div className="cursor-pointer">
          <img src={brandImg5} alt={brandImg5} />
        </div>
        <div className="cursor-pointer">
          <img src={brandImg6} alt={brandImg6} />
        </div>
        <div className="cursor-pointer">
          <img src={brandImg7} alt={brandImg7} />
        </div>
      </div>
    </WrapperSection>
  );
}

export default BrandWrapper;
