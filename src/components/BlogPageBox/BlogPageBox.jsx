import { FaTag, FaUser, FaComments } from 'react-icons/fa';
import { ImEye } from 'react-icons/im';

import blogImg from '../../assets/lorem-ipsum-dolo.jpg';

function BlogPageBox() {
  return (
    <div>
      <div>
        <img src={blogImg} alt={blogImg} />
      </div>

      <div className="mt-2.5 text-sm md:mt-[27px]">
        <div
          className="mb-2.5 flex flex-wrap items-center
          justify-between text-secondaryColor
          xxxs:justify-around md:mb-5"
        >
          <p className="flex items-center">
            <span className="mr-[5px]">
              <FaUser />
            </span>
            admin
          </p>

          <p className="flex cursor-pointer items-center">
            <span className="mr-[5px]">
              <FaTag />
            </span>
            politics
          </p>

          <p className="flex cursor-pointer items-center">
            <span className="mr-[5px]">
              <FaComments />
            </span>
            comments
          </p>

          <p className="flex items-center">
            <span className="mr-[5px]">
              <ImEye />
            </span>
            43
          </p>
        </div>

        <div
          className="text-center text-lg leading-5
          2xl:text-2xl 2xl:leading-5"
        >
          <a
            className="cursor-pointer 
            text-primaryColor hover:text-thirdColor
            "
          >
            Consectetur Adipiscing
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogPageBox;
