import { useRef } from 'react';
import { useRecoilState } from 'recoil';

import { isImgsCarouselOpened } from '../../atoms/isImgsCarouselOpened';

import { useClickEvent } from '../../hooks/useClickEvent';
import { useKeyEvent } from '../../hooks/useKeyEvent';

import blogBoxesData from '../../assets/blogBoxesData';

import { MdClose } from 'react-icons/md';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { currentCarouselImgSlide } from '../../atoms/currentCarouselImgSlide';
import { carouselImgSrc } from '../../atoms/carouselImgSrc';

function ImgsModal() {
  const [isImgsCarouselOpen, setIsImgsCarouselOpen] =
    useRecoilState(isImgsCarouselOpened);
  const [currentImgSlide, setCurrentImgSlide] = useRecoilState(
    currentCarouselImgSlide,
  );
  const [imgSrc, setImgSrc] = useRecoilState(carouselImgSrc);

  const overlayEl = useRef();

  const blogTitle = blogBoxesData[currentImgSlide]?.title;

  const length = blogBoxesData.length;

  const photosArr = blogBoxesData.map((blog) => blog.image);

  const handlePrevSlide = () => {
    setCurrentImgSlide((prevSlide) =>
      prevSlide === 0 ? length - 1 : prevSlide - 1,
    );

    setImgSrc(photosArr[currentImgSlide - 1 === -1 ? 4 : currentImgSlide - 1]);
  };

  const handleNextSlide = () => {
    setCurrentImgSlide((prevSlide) =>
      prevSlide === length - 1 ? 0 : prevSlide + 1,
    );

    setImgSrc(photosArr[currentImgSlide + 1 === 5 ? 0 : currentImgSlide + 1]);
  };

  const handleCloseImgsCarousel = () => {
    setIsImgsCarouselOpen(false);
  };

  useKeyEvent('Escape', handleCloseImgsCarousel);

  useClickEvent(overlayEl, handleCloseImgsCarousel);

  if (!Array.isArray(blogBoxesData) || length <= 0) {
    return null;
  }

  return (
    <>
      {isImgsCarouselOpen && (
        <>
          <div
            className="fixed inset-0 z-[10000] bg-black text-base opacity-80 sm:text-2xl"
            // onClick={handleClick}
            ref={overlayEl}
          >
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white
              xxs:left-4 sm:left-8"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevSlide();
              }}
            >
              <BiLeftArrow />
            </button>

            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white
              xxs:right-4 sm:right-8"
              onClick={(e) => {
                e.stopPropagation();
                handleNextSlide();
              }}
            >
              <BiRightArrow />
            </button>
          </div>

          <div
            className="fixed left-1/2 top-1/2 z-[15000] w-3/4
            -translate-x-1/2 -translate-y-1/2 bg-white text-center text-white
            opacity-100 sm:w-4/5 md:w-fit"
          >
            <div className="bg-cover bg-center bg-no-repeat">
              <img
                className="h-full w-full object-cover"
                src={imgSrc}
                alt={imgSrc}
              />
            </div>

            <button
              className="absolute -top-7 right-0 flex cursor-pointer text-xl
              text-secondaryColor hover:text-white"
              title="Close (Esc)"
              onClick={handleCloseImgsCarousel}
            >
              <MdClose />
            </button>

            <div
              className="absolute -bottom-7 left-0 flex w-full items-center
              justify-between text-sm leading-[18px]"
            >
              <span>{blogTitle}</span>

              <span>
                {currentImgSlide + 1} of {length}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ImgsModal;
