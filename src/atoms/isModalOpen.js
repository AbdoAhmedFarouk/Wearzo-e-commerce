import { atom } from 'recoil';

const isModalOpen = atom({
  key: 'isModalOpen',
  default: false,
});

const isSearchBarOpen = atom({
  key: 'isSearchOpen',
  default: false,
});

export { isModalOpen, isSearchBarOpen };
