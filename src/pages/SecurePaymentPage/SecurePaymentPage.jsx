import { useRecoilState } from 'recoil';
import { isMobileSecurePaymentPageSideProductMenuOpened } from '../../atoms/isOpened';
import { secaurePaymentSideMenuProductsInSecaurePaymentPage } from '../../atoms/products';
import { isSecurePaymentSideMenuProductsInSecurePaymentPageLoading } from '../../atoms/isLoading';
import { secaurePaymentPageSideMenuProductsError } from '../../atoms/error';
import { useIsOpen } from '../../hooks/useIsOpen';
import useLimitProductsUseEffect from '../../hooks/useLimitProductsUseEffect';

import Container from '../../components/Container/Container';
import MobileMenuHeader from '../../components/MobileMenuHeader/MobileMenuHeader';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import SideBarBanner from '../../components/SideBarBanner/SideBarBanner';
import SideProductBoxContainer from '../../components/SideProductBoxContainer/SideProductBoxContainer';

function SecurePaymentPage() {
  const [
    isMobileSecurePaymentPageSideProductMenuOpen,
    setIsMobileSecurePaymentPageSideProductMenuOpen,
  ] = useRecoilState(isMobileSecurePaymentPageSideProductMenuOpened);

  const [
    isSecurePaymentSideMenuProductsLoading,
    setIsSecurePaymentSideMenuProductsLoading,
  ] = useRecoilState(isSecurePaymentSideMenuProductsInSecurePaymentPageLoading);

  const [
    secaurePaymentSideMenuProductsError,
    setSecaurePaymentSideMenuProductsError,
  ] = useRecoilState(secaurePaymentPageSideMenuProductsError);

  const [secaurePaymentSideMenuProducts, setSecaurePaymentSideMenuProducts] =
    useRecoilState(secaurePaymentSideMenuProductsInSecaurePaymentPage);

  const openSideProductListFn = useIsOpen(
    isMobileSecurePaymentPageSideProductMenuOpen,
    setIsMobileSecurePaymentPageSideProductMenuOpen,
  );

  useLimitProductsUseEffect(
    setSecaurePaymentSideMenuProducts,
    setIsSecurePaymentSideMenuProductsLoading,
    setSecaurePaymentSideMenuProductsError,
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
              isOpen={isMobileSecurePaymentPageSideProductMenuOpen}
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
              productsState={secaurePaymentSideMenuProducts}
              isLoading={isSecurePaymentSideMenuProductsLoading}
              errorState={secaurePaymentSideMenuProductsError}
              isListMenuOpen={isMobileSecurePaymentPageSideProductMenuOpen}
            />

            <SideBarBanner />
          </div>

          <div
            className={`h-fit border border-fourthColor
            p-[15px] text-primaryColor duration-700
            md:text-justify ${
              isMobileSecurePaymentPageSideProductMenuOpen
                ? 'mt-0'
                : '-mt-10 md:mt-0'
            }`}
          >
            <h2 className="mb-[15px] text-lg font-medium capitalize">
              secure payment
            </h2>

            <h3 className="mb-[15px] text-sm font-medium">
              Our secure payment
            </h3>

            <p className="mb-4 text-sm">With SSL</p>

            <h3 className="mb-[15px] text-sm font-medium">
              Using Visa/Mastercard/Paypal
            </h3>

            <p className="text-sm">About this service</p>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default SecurePaymentPage;
