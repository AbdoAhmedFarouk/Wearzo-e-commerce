import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';
import Input from '../../components/Input/Input';

import { AiOutlineClose } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io';

// eslint-disable-next-line react/prop-types
function SearchField({ el, setterFn }) {
  return (
    <>
      <div ref={el} className="absolute inset-0 bg-white opacity-90"></div>

      <form
        className="absolute left-1/2 top-1/2 flex w-2/3 -translate-x-1/2 -translate-y-1/2
        items-center justify-between"
        action="#"
        id="search-form"
      >
        <Input
          styles="h-10 w-full border-b border-seventhColor
          bg-transparent py-1.5 text-sm font-normal text-secondaryColor
          outline-0 placeholder:text-black sm:text-xl"
          placeholder="Search..."
          type="text"
          id="input-search"
          name="search-query"
        />

        <ShopNowBtn
          styles="absolute right-0"
          type="submit"
          text={<IoIosSearch />}
        />
      </form>

      <span
        className="absolute right-1 top-1 cursor-pointer text-xl
        hover:text-thirdColor md:right-3 md:top-3"
        onClick={setterFn}
      >
        <AiOutlineClose />
      </span>
    </>
  );
}

export default SearchField;
