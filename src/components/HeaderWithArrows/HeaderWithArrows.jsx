import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

// eslint-disable-next-line react/prop-types
function HeaderWithArrows({ header }) {
  return (
    <div
      className="mb-2.5 flex items-center justify-between
      md:mb-[26px]"
    >
      <h3
        className="text-base font-medium uppercase
        text-primaryColor md:text-2xl md:leading-none
        xl:text-3xl xl:leading-none"
      >
        {header}
      </h3>

      <div
        className="flex h-fit text-xl text-primaryColor
        md:text-2xl"
      >
        <span className="cursor-pointer">
          <MdOutlineKeyboardArrowLeft />
        </span>

        <span className="ms-2 cursor-pointer">
          <MdOutlineKeyboardArrowRight />
        </span>
      </div>
    </div>
  );
}

export default HeaderWithArrows;
