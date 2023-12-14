import { useRecoilState } from 'recoil';
import { isAboutSideProductMenuOpen } from '../../atoms/isOpen';
import { useIsOpen } from '../../hooks/useIsOpen';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import SideBarBanner from '../../components/SideBarBanner/SideBarBanner';
import SideProductBox from '../../components/SideProductBox/SideProductBox';
import MobileMenuHeader from '../../components/MobileMenuHeader/MobileMenuHeader';

import AboutImg from '../../assets/cms-img.jpg';

function AboutPage() {
  const [isAbSideProductListMenuOpen, setIsAbSideProductListMenuOpen] =
    useRecoilState(isAboutSideProductMenuOpen);

  const openSideProductListFn = useIsOpen(
    isAbSideProductListMenuOpen,
    setIsAbSideProductListMenuOpen,
  );

  return (
    <SectionTag>
      <PageTitle text="about us" />

      <div>
        <Container styles="grid grid-cols-1 md:grid-cols-12 gap-[30px]">
          <div className="md:col-span-3">
            <MobileMenuHeader
              styles="flex items-center justify-between
              bg-primaryColor xxxs:px-5 xxxs:py-[15px] text-white
              px-3 py-2.5"
              spanStyles="text-lg duration-500 md:hidden"
              isOpen={isAbSideProductListMenuOpen}
              onClick={openSideProductListFn}
            >
              <h3
                className="text-base font-medium
                uppercase leading-5 md:text-sm"
              >
                bestsellers
              </h3>
            </MobileMenuHeader>

            <div
              className="hidden bg-white p-[15px]
              shadow-[0_0_20px_1px_rgba(0,0,0,0.05)]
              md:block md:p-5 2xl:px-5 2xl:py-[30px]"
            >
              <SideProductBox styles="mb-[30px]" />
              <SideProductBox styles="mb-[30px]" />
              <SideProductBox />
            </div>

            {isAbSideProductListMenuOpen ? (
              <div
                className="visible h-[389.75px]
              overflow-hidden bg-white p-[15px] opacity-100
              shadow-[0_0_20px_1px_rgba(0,0,0,0.05)]
              duration-700 md:hidden"
              >
                <SideProductBox styles="md:mb-[30px] mb-5" />
                <SideProductBox styles="md:mb-[30px] mb-5" />
                <SideProductBox />
              </div>
            ) : (
              <div
                className="invisible h-0
              overflow-hidden bg-white p-[15px] opacity-0
              shadow-[0_0_20px_1px_rgba(0,0,0,0.05)]
              duration-700 md:hidden"
              >
                <SideProductBox styles="md:mb-[30px] mb-5" />
                <SideProductBox styles="md:mb-[30px] mb-5" />
                <SideProductBox />
              </div>
            )}

            <SideBarBanner />
          </div>

          <div
            className={`border border-fourthColor p-2
            duration-700 xxs:p-[15px] md:col-span-9 md:text-justify ${
              isAbSideProductListMenuOpen ? 'mt-0' : '-mt-10 md:mt-0'
            }`}
          >
            <div className="mb-6 max-h-[650px] overflow-hidden">
              <img className="h-full w-full" src={AboutImg} alt={AboutImg} />
            </div>

            <div className="text-primaryColor sm:flex sm:gap-[30px]">
              <div className="text-sm">
                <h4
                  className="mb-[15px] text-xl font-medium capitalize
                leading-none"
                >
                  Our company
                </h4>

                <p className="mb-4">
                  <strong>
                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                    sed do eiusmod tempor incididun.
                  </strong>
                </p>

                <p className="mb-4">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse
                  ctetur adipisicing elit.
                </p>

                <ul>
                  <li>Top quality products</li>
                  <li>Best customer service</li>
                  <li>30-days money back guarantee</li>
                </ul>
              </div>

              <div className="text-sm">
                <h4
                  className="mb-[15px] mt-5 text-xl font-medium capitalize
                leading-none md:mt-0"
                >
                  Our team
                </h4>

                <p className="mb-4">
                  <strong>Lorem set sint occaecat cupidatat non</strong>
                </p>

                <p className="mb-4">
                  Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.
                </p>
              </div>

              <div className="text-sm">
                <h4
                  className="mb-[15px] mt-5 text-xl font-medium capitalize
                leading-none md:mt-0"
                >
                  testimonials
                </h4>

                <p>
                  “Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.”
                </p>

                <p className="mb-4">
                  <strong>Lorem ipsum dolor sit</strong>
                </p>

                <p>
                  “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Lorem ipsum
                  dolor sit amet conse ctetur adipisicing elit. Lorem ipsum
                  dolor sit amet conse ctetur adipisicing elit, sed do eiusmod.”
                </p>

                <p>
                  <strong>ipsum dolor sit</strong>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default AboutPage;
