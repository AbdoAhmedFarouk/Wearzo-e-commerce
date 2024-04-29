import { atom } from 'recoil';

const isModalOpened = atom({
  key: 'isModalOpen',
  default: false,
});

export { isModalOpened };
