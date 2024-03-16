import { atom } from 'recoil';

const isProductPageLinksStepsNaved = atom({
  key: 'step',
  default: 1,
});

const isHomePageLinksStepsNaved = atom({
  key: 'step1',
  default: 1,
});

export { isProductPageLinksStepsNaved, isHomePageLinksStepsNaved };
