import { atom } from 'recoil';

const allProducts = atom({
  key: 'products',
  default: [],
});

const relatedProductsInProductPage = atom({
  key: 'relatedProducts',
  default: [],
});

const specialProductsInSpecialPage = atom({
  key: 'specialProducts',
  default: [],
});

const specialSideMenuProductsInSpecialPage = atom({
  key: 'specialSideMenuProducts',
  default: [],
});

const brandProductsInBrandsPage = atom({
  key: 'brandsPageProducts',
  default: [],
});

const aboutSideMenuProductsInAboutPage = atom({
  key: 'aboutSideMenuProducts',
  default: [],
});

const deliverySideMenuProductsInDeliveryPage = atom({
  key: 'deliverySideMenuProducts',
  default: [],
});

const legalNoticeSideMenuProductsInLegalNoticePage = atom({
  key: 'legalNoticeSideMenuProducts',
  default: [],
});

const secaurePaymentSideMenuProductsInSecaurePaymentPage = atom({
  key: 'secaurePaymentSideMenuProducts',
  default: [],
});

export {
  allProducts,
  relatedProductsInProductPage,
  specialProductsInSpecialPage,
  brandProductsInBrandsPage,
  specialSideMenuProductsInSpecialPage,
  aboutSideMenuProductsInAboutPage,
  deliverySideMenuProductsInDeliveryPage,
  legalNoticeSideMenuProductsInLegalNoticePage,
  secaurePaymentSideMenuProductsInSecaurePaymentPage,
};
