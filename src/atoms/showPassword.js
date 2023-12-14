import { atom } from 'recoil';

const isNumbers = atom({
  key: 'isNums',
  default: false,
});

export default isNumbers;
