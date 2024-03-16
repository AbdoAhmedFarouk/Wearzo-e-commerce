import { atom } from 'recoil';

export const selectSortedProductsInSpecialPage = atom({
  key: 'sortedProducts',
  default: { selectValue: 'Name, A to Z' },
});
