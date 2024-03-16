import { atom } from 'recoil';

const allProductsError = atom({
  key: 'error',
  default: '',
});

const chosenProductError = atom({
  key: 'theChosenProductError',
  default: '',
});

const allRelatedProductsError = atom({
  key: 'relatedProductsError',
  default: '',
});

const specialPageProductsError = atom({
  key: 'specialPageError',
  default: '',
});

const specialSideMenuProductsErrorInSpecialPage = atom({
  key: 'specialSideMenuProductsError',
  default: '',
});

const searchedProductsError = atom({
  key: 'searchErrorMsg',
  default: '',
});

const brandsPageProductsError = atom({
  key: 'brandsProductsError',
  default: '',
});

const aboutSideMenuProductsErrorInAboutPage = atom({
  key: 'aboutSideMenuProductsError',
  default: '',
});

const deliverySideMenuProductsErrorInDeliveryPage = atom({
  key: 'deliverySideMenuProductsError',
  default: '',
});

const legalSideMenuProductsErrorInLegalPage = atom({
  key: 'legalSideMenuProductsError',
  default: '',
});

const secaurePaymentPageSideMenuProductsError = atom({
  key: 'secaurePaymentSideMenuProductsError',
  default: '',
});

export {
  allProductsError,
  chosenProductError,
  allRelatedProductsError,
  specialPageProductsError,
  searchedProductsError,
  brandsPageProductsError,
  specialSideMenuProductsErrorInSpecialPage,
  aboutSideMenuProductsErrorInAboutPage,
  deliverySideMenuProductsErrorInDeliveryPage,
  legalSideMenuProductsErrorInLegalPage,
  secaurePaymentPageSideMenuProductsError
};
