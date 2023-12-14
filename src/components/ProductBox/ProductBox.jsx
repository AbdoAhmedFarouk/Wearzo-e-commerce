import HoveringIcons from '../HoveringIcons/HoveringIcons';
import ProductHoveringSubImg from '../ProductHoveringSubImg/ProductHoveringSubImg';
import ShopNowBtn from '../ShopNowBtn/ShopNowBtn';
import RatingStars from '../RatingStars/RatingStars';

import productImg from '../../assets/productImg.jpg';

import { AiOutlineHeart } from 'react-icons/ai';
import { BsShuffle, BsEye } from 'react-icons/bs';

function ProductBox() {
  return (
    <div className="group/box relative overflow-hidden text-center">
      <HoveringIcons
        styles="absolute left-[5px] top-[5px] z-50 flex cursor-default
        flex-col gap-y-[7px] text-center text-[9px] uppercase leading-[9px]
        text-white md:left-2.5 md:top-2.5 md:text-xs md:leading-3"
      >
        <span className="bg-thirdColor px-1 py-1 md:px-1.5">-10%</span>
        <span className="bg-primaryColor px-1 py-1 md:px-1.5">new</span>
        <span className="bg-primaryColor px-1 py-1 md:px-1.5">pack</span>
      </HoveringIcons>

      <HoveringIcons
        styles="invisible absolute -top-11 right-0 z-50 flex items-center
        bg-white text-sm text-primaryColor opacity-0 duration-300
        ease-in-out group-hover/box:visible group-hover/box:top-0
        group-hover/box:opacity-100 md:text-base"
      >
        <a
          className="flex h-[30px] w-[30px] items-center justify-center
          duration-300 ease-in-out hover:text-thirdColor md:h-10 md:w-10"
          href="#"
        >
          <AiOutlineHeart />
        </a>
        <a
          className="flex h-[30px] w-[30px] items-center justify-center
          duration-300 ease-in-out hover:text-thirdColor md:h-10 md:w-10 "
          href="#"
        >
          <BsEye />
        </a>
        <a
          className="flex h-[30px] w-[30px] items-center justify-center
          duration-300 ease-in-out hover:text-thirdColor md:h-10
          md:w-10"
          href="#"
        >
          <BsShuffle />
        </a>
      </HoveringIcons>

      <div className="relative cursor-pointer overflow-hidden">
        <img className="w-full" src={productImg} alt={productImg} />

        <ProductHoveringSubImg />

        <div
          className="invisible absolute -bottom-12 left-0 z-40 w-full cursor-pointer 
        bg-primaryColor p-[5px] text-xs leading-[18px] text-white opacity-0 
          duration-300 ease-in-out hover:bg-thirdColor group-hover/box:visible
          group-hover/box:bottom-0 group-hover/box:opacity-100 md:p-2.5 md:text-sm"
        >
          <ShopNowBtn styles="uppercase" text="add to cart" />
        </div>
      </div>

      <div className="p-2 md:pt-2.5">
        <RatingStars />

        <div className="font-medium text-primaryColor">
          <h3
            className="mb-1 text-sm capitalize md:mb-2
          md:text-base md:leading-[15px]"
          >
            <a className="hover:text-thirdColor" href="#">
              bodycon dress
            </a>
          </h3>
          <span className="cursor-default">€16.64</span>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
