import WrapperSection from '../../components/WrapperSection/WrapperSection';
import PaymentAndCopyright from '../../components/PaymentAndCopyright/PaymentAndCopyright';
import FooterTestimonials from '../../components/FooterTestimonials/FooterTestimonials';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import FooterLinks from '../../components/FooterLinks/FooterLinks';

function FooterWrapper() {
  return (
    <WrapperSection
      sectionStyles="bg-primaryColor 2xl:mt-20 sm:mt-[30px]
      md:mt-10 mt-5 lg:mt-[50px]"
      containerStyles="text-white"
    >
      <div
        className="grid grid-cols-1 pb-5 pt-[25px] md:grid-cols-3
        md:gap-5 md:py-10 lg:pb-[75px] lg:pt-20"
      >
        <FooterTestimonials />

        <ContactInfo />

        <FooterLinks />
      </div>

      <PaymentAndCopyright />
    </WrapperSection>
  );
}

export default FooterWrapper;
