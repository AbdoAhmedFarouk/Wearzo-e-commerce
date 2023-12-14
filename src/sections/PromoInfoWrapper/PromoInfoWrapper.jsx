import PromoInfoBox from '../../components/PromoInfoBox/PromoInfoBox';

import { BsArrowCounterclockwise, BsTruck } from 'react-icons/bs';
import { PiLockKeyLight } from 'react-icons/pi';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import WrapperSection from '../../components/WrapperSection/WrapperSection';

function PromoInfoWrapper() {
  return (
    <WrapperSection
      sectionStyles="2xl:mt-20 md:mt-10 lg:mt-[50px] sm:mt-[30px] mt-5"
      containerStyles="grid grid-cols-1 gap-2.5 xs:grid-cols-2
      sm:gap-4 md:grid-cols-4 md:gap-[30px]"
    >
      <PromoInfoBox
        icon={<BsTruck />}
        header="FREE SHIPPING"
        text="Orders over $100"
      />

      <PromoInfoBox
        icon={<BsArrowCounterclockwise />}
        header="FREE RETURNS"
        text="Within 30 days"
      />

      <PromoInfoBox
        icon={<PiLockKeyLight />}
        header="100% SECURE"
        text="online shopping"
      />

      <PromoInfoBox
        icon={<TfiHeadphoneAlt />}
        header="ONLINE SUPPORT"
        text="call us 24/7"
      />
    </WrapperSection>
  );
}

export default PromoInfoWrapper;
