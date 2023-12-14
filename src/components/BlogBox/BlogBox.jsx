import blogImg from '../../assets/lorem-ipsum-dolo.jpg';

import { BsLink45Deg } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

function BlogBox() {
  return (
    <div className="group overflow-hidden">
      <div className="relative">
        <img src={blogImg} alt={blogImg} />

        <div
          className="invisible absolute -left-14 bottom-0
      bg-white opacity-0 duration-300 ease-in-out group-hover:visible
      group-hover:left-0 group-hover:opacity-100"
        >
          <a
            className="flex h-[34px] w-[34px] items-center
            justify-center text-base leading-[34px] text-primaryColor
            hover:text-thirdColor md:h-10 md:w-10 md:text-xl
            md:leading-10"
            href="#"
          >
            <BiSearch />
          </a>
          <a
            className="flex h-[34px] w-[34px] items-center justify-center
            text-lg leading-[34px] text-primaryColor hover:text-thirdColor
            md:h-10 md:w-10 md:text-xl md:leading-10"
            href="#"
          >
            <BsLink45Deg />
          </a>
        </div>
      </div>

      <div
        className="p-[5px] pb-0 pt-3 text-center
      md:p-[30px] md:pb-0 md:pt-[15px]"
      >
        <p
          className="mb-2.5 text-sm capitalize
        text-secondaryColor"
        >
          september 01, 2023
        </p>

        <h5
          className="cursor-pointer text-lg font-medium
          leading-5 text-primaryColor hover:text-thirdColor
          2xl:text-2xl 2xl:leading-none"
        >
          <a href="#">Lorem Ipsum dolo</a>
        </h5>
      </div>
    </div>
  );
}

export default BlogBox;
