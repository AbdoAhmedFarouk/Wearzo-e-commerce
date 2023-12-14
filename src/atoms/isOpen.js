import { atom } from 'recoil';

const isCurrencyMenuOpen = atom({
  key: 'isCurrOpen',
  default: false,
});

const isLanguageMenuOpen = atom({
  key: 'isLanguageOpen',
  default: false,
});

const isLoginMenuOpen = atom({
  key: 'isLoginOpen',
  default: false,
});

const isCartMenuOpen = atom({
  key: 'isCartOpen',
  default: false,
});

const isBrandMenuOpen = atom({
  key: 'isBrandOpen',
  default: false,
});

const isShopMenuOpen = atom({
  key: 'isShopOpen',
  default: false,
});

const isCollectionMenuOpen = atom({
  key: 'isCollectionOpen',
  default: false,
});

const isCategoriesMenuOpen = atom({
  key: 'isCategoryOpen',
  default: false,
});

const isContactFooterMenuOpen = atom({
  key: 'isContactOpen',
  default: false,
});

const isInfoLinksFooterMenuOpen = atom({
  key: 'isInfoLinksOpen',
  default: false,
});

const isAccLinksFooterMenuOpen = atom({
  key: 'isAccLinksOpen',
  default: false,
});

const isAboutSideProductMenuOpen = atom({
  key: 'isAbSideProductListMenuOpen',
  default: false,
});

const isSpecialSideProductMenuOpen = atom({
  key: 'isSpSideProductListMenuOpen',
  default: false,
});

const isDeliverySideProductMenuOpen = atom({
  key: 'isDvSideProductListMenuOpen',
  default: false,
});

const isBrandsSideProductMenuOpen = atom({
  key: 'isBrSideProductListMenuOpen',
  default: false,
});

export {
  isCurrencyMenuOpen,
  isLanguageMenuOpen,
  isLoginMenuOpen,
  isCartMenuOpen,
  isBrandMenuOpen,
  isShopMenuOpen,
  isCollectionMenuOpen,
  isCategoriesMenuOpen,
  isContactFooterMenuOpen,
  isInfoLinksFooterMenuOpen,
  isAccLinksFooterMenuOpen,
  isAboutSideProductMenuOpen,
  isSpecialSideProductMenuOpen,
  isDeliverySideProductMenuOpen,
  isBrandsSideProductMenuOpen,
};
