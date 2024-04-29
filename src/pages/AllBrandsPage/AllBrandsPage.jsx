import { useRecoilState } from 'recoil';
import { isMobileBrandsPageSideProductMenuOpened } from '../../atoms/isOpened';
import { brandProductsInBrandsPage } from '../../atoms/products';
import { isBrandsInBrandsPageProductsLoading } from '../../atoms/isLoading';
import { brandsPageProductsError } from '../../atoms/error';
import { useIsOpen } from '../../hooks/useIsOpen';
import useLimitProductsUseEffect from '../../hooks/useLimitProductsUseEffect';

import Container from '../../components/Container/Container';
import MobileMenuHeader from '../../components/MobileMenuHeader/MobileMenuHeader';
import PageTitle from '../../components/PageTitle/PageTitle';
import SideBarBanner from '../../components/SideBarBanner/SideBarBanner';
import SectionTag from '../../components/SectionTag/SectionTag';
import SideProductBoxContainer from '../../components/SideProductBoxContainer/SideProductBoxContainer';

import brandImg1 from '../../assets/4.jpg';

function AllBrandsPage() {
  const [
    isMobileBrandsPageSideProductMenuOpen,
    setIsMobileBrandsPageSideProductMenuOpen,
  ] = useRecoilState(isMobileBrandsPageSideProductMenuOpened);

  const [brandsPageProducts, setBrandsPageProducts] = useRecoilState(
    brandProductsInBrandsPage,
  );
  const [isBrandsPageProductsLoading, setIsBrandsPageProductsLoading] =
    useRecoilState(isBrandsInBrandsPageProductsLoading);
  const [brandsProductsError, setBrandsProductsError] = useRecoilState(
    brandsPageProductsError,
  );

  const openSideProductListFn = useIsOpen(
    isMobileBrandsPageSideProductMenuOpen,
    setIsMobileBrandsPageSideProductMenuOpen,
  );

  useLimitProductsUseEffect(
    setBrandsPageProducts,
    setIsBrandsPageProductsLoading,
    setBrandsProductsError,
  );

  return (
    <SectionTag>
      <PageTitle text="brands" />

      <div>
        <Container styles="grid grid-cols-1 md:grid-cols-16 gap-[30px]">
          <div>
            <MobileMenuHeader
              styles="flex items-center justify-between
              bg-primaryColor xxxs:px-5 xxxs:py-[15px] text-white
              px-3 py-2.5"
              spanStyles="text-lg duration-500 md:hidden"
              isOpen={isMobileBrandsPageSideProductMenuOpen}
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
              productsState={brandsPageProducts}
              isLoading={isBrandsPageProductsLoading}
              errorState={brandsProductsError}
              isListMenuOpen={isMobileBrandsPageSideProductMenuOpen}
            />

            <SideBarBanner />
          </div>

          <div
            className={`duration-700 ${
              isMobileBrandsPageSideProductMenuOpen ? 'mt-0' : '-mt-10 md:mt-0'
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
                className="col-span-1 border
                border-fourthColor px-5 py-8"
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
                  <span className="cursor-pointer capitalize hover:text-thirdColor">
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
