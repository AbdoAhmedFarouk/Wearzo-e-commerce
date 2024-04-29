import { atom } from 'recoil';

const isSignupAccLoading = atom({
  key: 'isSignupLoading',
  default: false,
});

export default isSignupAccLoading;
