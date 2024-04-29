import { atom } from 'recoil';

const isSigninAccLoading = atom({
  key: 'isSigninLoading',
  default: false,
});

export default isSigninAccLoading;
