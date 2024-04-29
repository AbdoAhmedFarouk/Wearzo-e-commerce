import { atom } from 'recoil';

const isPassNumbersInSigninPage = atom({
  key: 'isSigninPagePassNums',
  default: false,
});

const isPassNumbersInSignupPage = atom({
  key: 'isSignupPagePassNums',
  default: false,
});

const isPassConfNumbersInSignupPage = atom({
  key: 'isSignupPagePassConfNums',
  default: false,
});

export {
  isPassNumbersInSigninPage,
  isPassNumbersInSignupPage,
  isPassConfNumbersInSignupPage,
};
