import { atom } from 'recoil';

const isAllProductsLoading = atom({
  key: 'isLoading',
  default: false,
});

const isProductInProductPageLoading = atom({
  key: 'isProductLoading',
  default: false,
});

const isRelatedProductsInProductPageLoading = atom({
  key: 'isRelatedProductsLoading',
  default: false,
});

const isSpecialProductsInSpecialPageLoading = atom({
  key: 'isSpecialProductsLoading',
  default: false,
});

const isSpecialSideMenuProductsLoadingInSpecialPage = atom({
  key: 'isSpecialSideMenuProductsLoading',
  default: false,
});

const isSearchFiledProductsLoading = atom({
  key: 'isSearchProductsLoading',
  default: false,
});

const isBrandsInBrandsPageProductsLoading = atom({
  key: 'isBrandsPageProductsLoading',
  default: false,
});

const isAboutSideMenuProductsInAboutPageLoading = atom({
  key: 'isAboutSideMenuProductsLoading',
  default: false,
});

const isDeliverySideMenuProductsInDeliveryPageLoading = atom({
  key: 'isDeliverySideMenuProductsLoading',
  default: false,
});

const isLegalNoticeSideMenuProductsInLegalNoticePageLoading = atom({
  key: 'isLegalNoticeSideMenuProductsLoading',
  default: false,
});

const isSecurePaymentSideMenuProductsInSecurePaymentPageLoading = atom({
  key: 'isSecurePaymentSideMenuProductsLoading',
  default: false,
});

export {
  isAllProductsLoading,
  isProductInProductPageLoading,
  isRelatedProductsInProductPageLoading,
  isSpecialProductsInSpecialPageLoading,
  isSearchFiledProductsLoading,
  isBrandsInBrandsPageProductsLoading,
  isSpecialSideMenuProductsLoadingInSpecialPage,
  isAboutSideMenuProductsInAboutPageLoading,
  isDeliverySideMenuProductsInDeliveryPageLoading,
  isLegalNoticeSideMenuProductsInLegalNoticePageLoading,
  isSecurePaymentSideMenuProductsInSecurePaymentPageLoading,
};
