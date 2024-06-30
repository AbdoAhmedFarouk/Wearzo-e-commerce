import { Link } from 'react-router-dom';

import { PropTypes } from 'prop-types';

import { BsLink45Deg } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import useOpenImgsCarousel from '../../hooks/useOpenImgsCarousel';

BlogBox.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  routingURL: PropTypes.string,
  blogID: PropTypes.number,
};

function BlogBox({ img, title, routingURL, blogID }) {
  const { handleOpenImgCarousel } = useOpenImgsCarousel();

  return (
    <div className="group w-full overflow-hidden">
      <div className="relative">
        <img className="h-full w-full object-cover" src={img} alt={img} />
        <div
          className="invisible absolute -left-14 bottom-0 bg-white
          opacity-0 duration-300 ease-in-out group-hover:visible
          group-hover:left-0 group-hover:opacity-100"
        >
          <button
            className="flex h-[30px] w-[30px] items-center
            justify-center border-0 text-base leading-[34px]
            text-primaryColor outline-0 hover:text-thirdColor md:h-10
            md:w-10 md:text-xl md:leading-10"
            onClick={() => handleOpenImgCarousel(blogID)}
          >
            <BiSearch />
          </button>

          <Link
            className="flex h-[30px] w-[30px] items-center justify-center
            border-0 text-lg leading-[34px] text-primaryColor
            outline-0 hover:text-thirdColor md:h-10 md:w-10 md:text-xl md:leading-10"
            to={routingURL}
          >
            <BsLink45Deg />
          </Link>
        </div>
      </div>

      <div className="mt-3 text-center md:mt-[15px]">
        <p className="text-sm uppercase text-secondaryColor">June 19, 2001</p>

        <div
          className="mb-1 mt-2.5 text-xl leading-6 2xl:mt-[17px] 2xl:text-2xl
          2xl:leading-6"
        >
          <Link
            className="inline-block cursor-pointer text-primaryColor
            hover:text-thirdColor"
            to={routingURL}
          >
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogBox;
