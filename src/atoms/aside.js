import { atom } from 'recoil';

const isAsideMenuOpen = atom({
  key: 'isAsideOpen',
  default: false,
});

const isAsideMobileOpen = atom({
  key: 'isMobileAsideMenuOpen',
  default: false,
});

export { isAsideMenuOpen, isAsideMobileOpen };
