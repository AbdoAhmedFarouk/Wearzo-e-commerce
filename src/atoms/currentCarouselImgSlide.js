import { atom } from 'recoil';
import { carouselImgSrc } from './carouselImgSrc';

import blogBoxesData from '../assets/blogBoxesData';

export const currentCarouselImgSlide = atom({
  key: 'currentImgSlide',
  default: ({ get }) => {
    const imgSrc = get(carouselImgSrc);
    const imgIndex = blogBoxesData.findIndex((blog) => blog.image === imgSrc);
    return imgIndex >= 0 ? imgIndex : null;
  },
});
