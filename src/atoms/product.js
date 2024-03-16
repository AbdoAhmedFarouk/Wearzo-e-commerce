import { atom } from 'recoil';

const clickedProduct = atom({
  key: 'chosenProduct',
  default: null,
});

export default clickedProduct;
