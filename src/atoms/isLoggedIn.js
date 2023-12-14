import { atom } from 'recoil';

const isLoggedIn = atom({
  key: 'isLogged',
  default: false,
});

export { isLoggedIn };
