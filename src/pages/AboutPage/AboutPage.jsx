import { useRecoilState } from 'recoil';
import { isAboutSideProductMenuOpen } from '../../atoms/isOpen';
import { useIsOpen } from '../../hooks/useIsOpen';
import { aboutSideMenuProductsInAboutPage } from '../../atoms/products';
import { isAboutSideMenuProductsInAboutPageLoading } from '../../atoms/isLoading';
import { aboutSideMenuProductsErrorInAboutPage } from '../../atoms/error';
import useLimitProductsUseEffect from '../../hooks/useLimitProductsUseEffect';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import SideBarBanner from '../../components/SideBarBanner/SideBarBanner';
import MobileMenuHeader from '../../components/MobileMenuHeader/MobileMenuHeader';

import AboutImg from '../../assets/cms-img.jpg';
import SideProductBoxContainer from '../../components/SideProductBoxContainer/SideProductBoxContainer';

function AboutPage() {
  const [isAbSideProductListMenuOpen, setIsAbSideProductListMenuOpen] =
    useRecoilState(isAboutSideProductMenuOpen);

  const [aboutSideMenuProducts, setAboutSideMenuProducts] = useRecoilState(
    aboutSideMenuProductsInAboutPage,
  );

  const [isAboutSideMenuProductsLoading, setIsAboutSideMenuProductsLoading] =
    useRecoilState(isAboutSideMenuProductsInAboutPageLoading);

  const [aboutSideMenuProductsError, setAboutSideMenuProductsError] =
    useRecoilState(aboutSideMenuProductsErrorInAboutPage);

  const openSideProductListFn = useIsOpen(
    isAbSideProductListMenuOpen,
    setIsAbSideProductListMenuOpen,
  );

  useLimitProductsUseEffect(
    setAboutSideMenuProducts,
    setIsAboutSideMenuProductsLoading,
    setAboutSideMenuProductsError,
  );

  return (
    <SectionTag>
      <PageTitle text="about us" />

      <div>
        <Container styles="grid grid-cols-1 md:grid-cols-16 gap-[30px]">
          <div>
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

            <SideProductBoxContainer
              productsState={aboutSideMenuProducts}
              isLoading={isAboutSideMenuProductsLoading}
              errorState={aboutSideMenuProductsError}
              isListMenuOpen={isAbSideProductListMenuOpen}
            />

            <SideBarBanner />
          </div>

          <div
            className={`border border-fourthColor p-2
            duration-700 xxs:p-[15px] md:text-justify ${
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
