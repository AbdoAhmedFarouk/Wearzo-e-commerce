import { atom } from 'recoil';

const signupError = atom({
  key: 'signupErrorMsg',
  default: '',
});

export default signupError;
