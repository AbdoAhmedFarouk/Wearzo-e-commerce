import { atom } from 'recoil';

export const searchQuery = atom({
  key: 'query',
  default: '',
});
