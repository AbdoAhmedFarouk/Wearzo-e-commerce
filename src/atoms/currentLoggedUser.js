import { atom } from 'recoil';

export const currentLoggedUser = atom({
  key: 'currentUser',
  default: null,
  dangerouslyAllowMutability: true,
});
