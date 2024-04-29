import { useRecoilState } from 'recoil';
import { isMobileLegalPageSideProductMenuOpened } from '../../atoms/isOpened';
import { legalNoticeSideMenuProductsInLegalNoticePage } from '../../atoms/products';
import { isLegalNoticeSideMenuProductsInLegalNoticePageLoading } from '../../atoms/isLoading';
import { legalSideMenuProductsErrorInLegalPage } from '../../atoms/error';
import { useIsOpen } from '../../hooks/useIsOpen';
import useLimitProductsUseEffect from '../../hooks/useLimitProductsUseEffect';

import Container from '../../components/Container/Container';
import MobileMenuHeader from '../../components/MobileMenuHeader/MobileMenuHeader';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import SideBarBanner from '../../components/SideBarBanner/SideBarBanner';
import SideProductBoxContainer from '../../components/SideProductBoxContainer/SideProductBoxContainer';

function LegalNoticePage() {
  const [
    isMobileLegalPageSideProductMenuOpen,
    setIsMobileLegalPageSideProductMenuOpen,
  ] = useRecoilState(isMobileLegalPageSideProductMenuOpened);

  const [
    isLegalNoticeSideMenuProductsLoading,
    setIsLegalNoticeSideMenuProductsLoading,
  ] = useRecoilState(isLegalNoticeSideMenuProductsInLegalNoticePageLoading);
  const [legalSideMenuProductsError, setLegalSideMenuProductsError] =
    useRecoilState(legalSideMenuProductsErrorInLegalPage);
  const [legalNoticeSideMenuProducts, setLegalNoticeSideMenuProducts] =
    useRecoilState(legalNoticeSideMenuProductsInLegalNoticePage);

  const openSideProductListFn = useIsOpen(
    isMobileLegalPageSideProductMenuOpen,
    setIsMobileLegalPageSideProductMenuOpen,
  );

  useLimitProductsUseEffect(
    setLegalNoticeSideMenuProducts,
    setIsLegalNoticeSideMenuProductsLoading,
    setLegalSideMenuProductsError,
  );

  return (
    <SectionTag>
      <PageTitle text="legal notice" />

      <div>
        <Container styles="grid grid-cols-1 md:grid-cols-16 gap-[30px]">
          <div>
            <MobileMenuHeader
              styles="flex items-center justify-between
              bg-primaryColor xxxs:px-5 xxxs:py-[15px] text-white
              px-3 py-2.5"
              spanStyles="text-lg duration-500 md:hidden"
              isOpen={isMobileLegalPageSideProductMenuOpen}
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
              productsState={legalNoticeSideMenuProducts}
              isLoading={isLegalNoticeSideMenuProductsLoading}
              errorState={legalSideMenuProductsError}
              isListMenuOpen={isMobileLegalPageSideProductMenuOpen}
            />

            <SideBarBanner />
          </div>

          <div
            className={`h-fit border border-fourthColor
            p-[15px] text-primaryColor duration-700
            md:text-justify ${
              isMobileLegalPageSideProductMenuOpen ? 'mt-0' : '-mt-10 md:mt-0'
            }`}
          >
            <h2 className="mb-[15px] text-lg font-medium capitalize">legal</h2>

            <h3 className="mb-[15px] text-sm font-medium">credits</h3>

            <p className="mb-4 text-sm">Concept and production:</p>

            <p className="text-sm">
              This online store was created by Abdelrahman Ahmed, check out this
              ecommerce website for full view on my github account.
            </p>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default LegalNoticePage;
