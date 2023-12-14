import { useRecoilState } from 'recoil';
import { isBrandsSideProductMenuOpen } from '../../atoms/isOpen';
import { useIsOpen } from '../../hooks/useIsOpen';

import Container from '../../components/Container/Container';
import MobileMenuHeader from '../../components/MobileMenuHeader/MobileMenuHeader';
import SideProductBox from '../../components/SideProductBox/SideProductBox';
import PageTitle from '../../components/PageTitle/PageTitle';
import SideBarBanner from '../../components/SideBarBanner/SideBarBanner';
import SectionTag from '../../components/SectionTag/SectionTag';

import brandImg1 from '../../assets/4.jpg';

function AllBrandsPage() {
  const [isBrSideProductListMenuOpen, setIsBrSideProductListMenuOpen] =
    useRecoilState(isBrandsSideProductMenuOpen);

  const openSideProductListFn = useIsOpen(
    isBrSideProductListMenuOpen,
    setIsBrSideProductListMenuOpen,
  );

  return (
    <SectionTag>
      <PageTitle text="brands" />

      <div>
        <Container styles="grid grid-cols-1 md:grid-cols-12 gap-[30px]">
          <div className="md:col-span-3">
            <MobileMenuHeader
              styles="flex items-center justify-between
              bg-primaryColor xxxs:px-5 xxxs:py-[15px] text-white
              px-3 py-2.5"
              spanStyles="text-lg duration-500 md:hidden"
              isOpen={isBrSideProductListMenuOpen}
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

            {isBrSideProductListMenuOpen ? (
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
            className={`duration-700 md:col-span-9 ${
              isBrSideProductListMenuOpen ? 'mt-0' : '-mt-10 md:mt-0'
            }`}
          >
            <div
              className="mb-[15px] flex
              flex-col items-center justify-center
              gap-[15px] border-b border-fourthColor
              pb-[15px] text-center text-sm text-primaryColor
              xs:flex-row xs:items-start xs:justify-start xs:text-left"
            >
              <div
                className="col-span-1 border border-fourthColor
              px-5 py-8"
              >
                <img className="m-auto" src={brandImg1} alt={brandImg1} />
              </div>

              <div className="flex-1">
                <h3
                  className="mb-[5px] cursor-pointer font-medium
                  capitalize hover:text-thirdColor"
                >
                  Brand01
                </h3>

                <div className="flex items-center gap-2.5">
                  <span className="cursor-pointer hover:text-thirdColor">
                    0 product
                  </span>
                  <span
                    className="cursor-pointer capitalize
                    hover:text-thirdColor"
                  >
                    view products
                  </span>
                </div>
              </div>
            </div>

            <div
              className="mb-[15px] flex
              flex-col items-center justify-center
              gap-[15px] border-b border-fourthColor
              pb-[15px] text-center text-sm text-primaryColor
              xs:flex-row xs:items-start xs:justify-start xs:text-left"
            >
              <div
                className="p x-5 col-span-1
              border border-fourthColor py-8"
              >
                <img className="m-auto" src={brandImg1} alt={brandImg1} />
              </div>

              <div className="flex-1">
                <h3
                  className="mb-[5px] cursor-pointer font-medium
                capitalize hover:text-thirdColor"
                >
                  Brand02
                </h3>

                <div className="flex items-center gap-2.5">
                  <span className="cursor-pointer hover:text-thirdColor">
                    0 product
                  </span>
                  <span
                    className="cursor-pointer capitalize
                    hover:text-thirdColor"
                  >
                    view products
                  </span>
                </div>
              </div>
            </div>

            <div
              className="mb-[15px] flex
              flex-col items-center justify-center
              gap-[15px] border-b border-fourthColor
              pb-[15px] text-center text-sm text-primaryColor
              xs:flex-row xs:items-start xs:justify-start xs:text-left"
            >
              <div
                className="col-span-1 border border-fourthColor
                px-5 py-8"
              >
                <img className="m-auto" src={brandImg1} alt={brandImg1} />
              </div>

              <div className="flex-1">
                <h3
                  className="mb-[5px] cursor-pointer font-medium
                  capitalize hover:text-thirdColor"
                >
                  Brand03
                </h3>

                <div className="flex items-center gap-2.5">
                  <span className="cursor-pointer hover:text-thirdColor">
                    0 product
                  </span>
                  <span
                    className="cursor-pointer capitalize
                    hover:text-thirdColor"
                  >
                    view products
                  </span>
                </div>
              </div>
            </div>

            <div
              className="mb-[15px] flex
              flex-col items-center justify-center
              gap-[15px] border-b border-fourthColor
              pb-[15px] text-center text-sm text-primaryColor
              xs:flex-row xs:items-start xs:justify-start xs:text-left"
            >
              <div
                className="col-span-1 border border-fourthColor
                px-5 py-8"
              >
                <img className="m-auto" src={brandImg1} alt={brandImg1} />
              </div>

              <div className="flex-1">
                <h3
                  className="mb-[5px] cursor-pointer font-medium
                  capitalize hover:text-thirdColor"
                >
                  Brand04
                </h3>

                <div className="flex items-center gap-2.5">
                  <span className="cursor-pointer hover:text-thirdColor">
                    0 product
                  </span>
                  <span
                    className="cursor-pointer capitalize
                    hover:text-thirdColor"
                  >
                    view products
                  </span>
                </div>
              </div>
            </div>

            <div
              className="mb-[15px] flex
              flex-col items-center justify-center
              gap-[15px] border-b border-fourthColor
              pb-[15px] text-center text-sm text-primaryColor
              xs:flex-row xs:items-start xs:justify-start xs:text-left"
            >
              <div
                className="col-span-1 border border-fourthColor
                px-5 py-8"
              >
                <img className="m-auto" src={brandImg1} alt={brandImg1} />
              </div>

              <div className="flex-1">
                <h3
                  className="mb-[5px] cursor-pointer font-medium
                  capitalize hover:text-thirdColor"
                >
                  Brand05
                </h3>

                <div className="flex items-center gap-2.5">
                  <span className="cursor-pointer hover:text-thirdColor">
                    0 product
                  </span>
                  <span
                    className="cursor-pointer capitalize
                    hover:text-thirdColor"
                  >
                    view products
                  </span>
                </div>
              </div>
            </div>

            <div
              className="mb-[15px] flex
              flex-col items-center justify-center
              gap-[15px] border-b border-fourthColor
              pb-[15px] text-center text-sm text-primaryColor
              xs:flex-row xs:items-start xs:justify-start xs:text-left"
            >
              <div
                className="col-span-1 border border-fourthColor
                px-5 py-8"
              >
                <img className="m-auto" src={brandImg1} alt={brandImg1} />
              </div>

              <div className="flex-1">
                <h3
                  className="mb-[5px] cursor-pointer font-medium
                  capitalize hover:text-thirdColor"
                >
                  Brand06
                </h3>

                <div className="flex items-center gap-2.5">
                  <span className="cursor-pointer hover:text-thirdColor">
                    0 product
                  </span>
                  <span
                    className="cursor-pointer capitalize
                  hover:text-thirdColor"
                  >
                    view products
                  </span>
                </div>
              </div>
            </div>

            <div
              className="mb-[15px] flex
              flex-col items-center justify-center
              gap-[15px] border-b border-fourthColor
              pb-[15px] text-center text-sm text-primaryColor
              xs:flex-row xs:items-start xs:justify-start xs:text-left"
            >
              <div
                className="col-span-1 border border-fourthColor
                px-5 py-8"
              >
                <img className="m-auto" src={brandImg1} alt={brandImg1} />
              </div>

              <div className="flex-1">
                <h3
                  className="mb-[5px] cursor-pointer font-medium
                  capitalize hover:text-thirdColor"
                >
                  Brand07
                </h3>

                <div className="flex items-center gap-2.5">
                  <span className="cursor-pointer hover:text-thirdColor">
                    0 product
                  </span>
                  <span
                    className="cursor-pointer capitalize
                  hover:text-thirdColor"
                  >
                    view products
                  </span>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col items-center justify-center
              gap-[15px] pb-[15px] text-center text-sm text-primaryColor
              xs:flex-row xs:items-start xs:justify-start xs:text-left"
            >
              <div
                className="col-span-1 border border-fourthColor
                px-5 py-8"
              >
                <img className="m-auto" src={brandImg1} alt={brandImg1} />
              </div>

              <div className="flex-1">
                <h3
                  className="mb-[5px] cursor-pointer font-medium
                  capitalize hover:text-thirdColor"
                >
                  Brand08
                </h3>

                <div className="flex items-center gap-2.5">
                  <span className="cursor-pointer hover:text-thirdColor">
                    0 product
                  </span>
                  <span
                    className="cursor-pointer capitalize
                    hover:text-thirdColor"
                  >
                    view products
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default AllBrandsPage;
