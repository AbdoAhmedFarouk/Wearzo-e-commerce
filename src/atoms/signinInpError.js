import { atom } from 'recoil';

const signinError = atom({
  key: 'signinErrorMsg',
  default: '',
});

export default signinError;
