import ProductHoveringSubImg from '../ProductHoveringSubImg/ProductHoveringSubImg';
import RatingStars from '../RatingStars/RatingStars';

import productImg from '../../assets/productImg.jpg';

// eslint-disable-next-line react/prop-types
function SideProductBox({ styles }) {
  return (
    <div
      className={`group/box relative flex
      items-center overflow-hidden ${styles ? styles : ''}`}
    >
      <div
        className="relative mr-5 w-20 cursor-pointer
        overflow-hidden md:mr-[7%] md:w-[30%]"
      >
        <img className="w-full" src={productImg} alt={productImg} />

        <ProductHoveringSubImg />
      </div>

      <div className="flex-1">
        <RatingStars
          styles="lg:mb-2 flex items-center
          text-eighthColor lg:h-6 lg:text-base
          text-sm mb-1.5"
        />

        <div className="font-medium text-primaryColor">
          <h3
            className="text-sm capitalize leading-5 lg:text-base
            lg:leading-5"
          >
            <a className="hover:text-thirdColor" href="#">
              bodycon dress
            </a>
          </h3>

          <span
            className="mt-1.5 inline-block cursor-default text-sm
            leading-5 lg:mt-[9px] lg:text-base"
          >
            €16.64
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideProductBox;
