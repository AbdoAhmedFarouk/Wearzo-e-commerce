import { useSetRecoilState } from 'recoil';

import { currentCarouselImgSlide } from '../atoms/currentCarouselImgSlide';
import { isImgsCarouselOpened } from '../atoms/isImgsCarouselOpened';
import { carouselImgSrc } from '../atoms/carouselImgSrc';

import blogBoxesData from '../assets/blogBoxesData';

function useOpenImgsCarousel() {
  const setCurrentImgSlide = useSetRecoilState(currentCarouselImgSlide);
  const setIsImgsCarouselOpen = useSetRecoilState(isImgsCarouselOpened);
  const setImgSrc = useSetRecoilState(carouselImgSrc);

  const handleOpenImgCarousel = (id) => {
    const existingBlog = blogBoxesData.find((blog) => blog.id === id);

    setIsImgsCarouselOpen(true);
    setImgSrc(blogBoxesData[blogBoxesData.indexOf(existingBlog)].image);
    setCurrentImgSlide(blogBoxesData.indexOf(existingBlog));
  };

  return { blogBoxesData, handleOpenImgCarousel };
}

export default useOpenImgsCarousel;
