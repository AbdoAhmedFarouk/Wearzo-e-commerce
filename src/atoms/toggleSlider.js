import { atom } from 'recoil';

const toggleIndex = atom({
  key: 'index',
  default: 0,
});

const toggleSamples = atom({
  key: 'sample',
  default: 0,
});

const toggleProducts = atom({
  key: 'productImgs',
  default: 0,
});

const toggleBlogBoxes = atom({
  key: 'boxIndex',
  default: 0,
});

export { toggleIndex, toggleSamples, toggleProducts, toggleBlogBoxes };
