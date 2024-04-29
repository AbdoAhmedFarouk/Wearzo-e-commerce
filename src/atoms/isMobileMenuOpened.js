import { atom } from 'recoil';

const isMobileMenuOpened = atom({
  key: 'isMobileMenuOpen',
  default: false,
});

export { isMobileMenuOpened };
