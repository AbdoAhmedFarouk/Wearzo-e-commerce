import { useRecoilState } from 'recoil';
import { isSpecialSideProductMenuOpen } from '../../atoms/isOpen';
import { useIsOpen } from '../../hooks/useIsOpen';

import Container from '../../components/Container/Container';
import MobileMenuHeader from '../../components/MobileMenuHeader/MobileMenuHeader';
import PageTitle from '../../components/PageTitle/PageTitle';
import ProductBox from '../../components/ProductBox/ProductBox';
import SectionTag from '../../components/SectionTag/SectionTag';
import SideBarBanner from '../../components/SideBarBanner/SideBarBanner';
import SideProductBox from '../../components/SideProductBox/SideProductBox';

function SpecialPage() {
  const [isSpSideProductListMenuOpen, setIsSpSideProductListMenuOpen] =
    useRecoilState(isSpecialSideProductMenuOpen);

  const openSideProductListFn = useIsOpen(
    isSpSideProductListMenuOpen,
    setIsSpSideProductListMenuOpen,
  );

  return (
    <SectionTag>
      <PageTitle text="prices drop" />

      <div>
        <Container styles="grid md:grid-cols-12 gap-[30px]">
          <div className="md:col-span-3">
            <MobileMenuHeader
              styles="flex items-center justify-between
              bg-primaryColor xxxs:px-5 xxxs:py-[15px] text-white
              px-3 py-2.5"
              spanStyles="text-lg duration-500 md:hidden"
              isOpen={isSpSideProductListMenuOpen}
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

            {isSpSideProductListMenuOpen ? (
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
            className={`grid grid-cols-1 gap-2.5 duration-700
          xxs:grid-cols-2 sm:grid-cols-3 sm:gap-[15px]
          md:col-span-9 md:gap-[30px] lg:grid-cols-4 ${
            isSpSideProductListMenuOpen ? 'mt-0' : '-mt-10 md:mt-0'
          }`}
          >
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default SpecialPage;
