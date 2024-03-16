import { atom } from 'recoil';

export const searchedProductsResult = atom({
  key: 'searchedProducts',
  default: [],
});
