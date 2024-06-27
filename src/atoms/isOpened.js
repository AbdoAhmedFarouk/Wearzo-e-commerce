import { atom } from 'recoil';

const isCurrencyMenuOpened = atom({
  key: 'isCurrenctMenuOpen',
  default: false,
});

const isLanguageMenuOpened = atom({
  key: 'isLanguageMenuOpen',
  default: false,
});

const isLoginMenuOpened = atom({
  key: 'isLoginMenuOpen',
  default: false,
});

const isCartMenuOpened = atom({
  key: 'isCartMenuOpen',
  default: false,
});

const isMobileContactFooterMenuOpened = atom({
  key: 'isMobileContactFooterMenuOpen',
  default: false,
});

const isMobileInfoLinksFooterMenuOpened = atom({
  key: 'isMobileInfoLinksFooterMenuOpen',
  default: false,
});

const isMobileAccLinksFooterMenuOpened = atom({
  key: 'isMobileAccLinksFooterMenuOpen',
  default: false,
});

const isMobileAboutPageSideProductMenuOpened = atom({
  key: 'isMobileAboutPageSideProductMenuOpen',
  default: false,
});

const isMobileSpecialPageSideProductMenuOpened = atom({
  key: 'isMobileSpecialPageSideProductMenuOpen',
  default: false,
});

const isMobileDeliveryPageSideProductMenuOpened = atom({
  key: 'isMobileDeliveryPageSideProductMenuOpen',
  default: false,
});



const isMobileLegalPageSideProductMenuOpened = atom({
  key: 'isMobileLegalPageSideProductMenuOpen',
  default: false,
});

const isMobileSecurePaymentPageSideProductMenuOpened = atom({
  key: 'isMobileSecurePaymentPageSideProductMenuOpen',
  default: false,
});

export {
  isCurrencyMenuOpened,
  isLanguageMenuOpened,
  isLoginMenuOpened,
  isCartMenuOpened,
  isMobileContactFooterMenuOpened,
  isMobileInfoLinksFooterMenuOpened,
  isMobileAccLinksFooterMenuOpened,
  isMobileAboutPageSideProductMenuOpened,
  isMobileSpecialPageSideProductMenuOpened,
  isMobileDeliveryPageSideProductMenuOpened,
  isMobileLegalPageSideProductMenuOpened,
  isMobileSecurePaymentPageSideProductMenuOpened,
};
