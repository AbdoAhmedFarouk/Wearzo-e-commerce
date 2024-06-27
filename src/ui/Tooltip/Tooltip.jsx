import { PropTypes } from 'prop-types';

Tooltip.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.string,
};

function Tooltip({ text, styles }) {
  return (
    <span
      className={`pointer-events-none invisible absolute bottom-[120%] left-1/2 -translate-x-1/2
        rounded-md bg-black px-2 py-[3px] text-center text-sm capitalize text-white
        opacity-0 duration-300 before:absolute before:left-1/2
        before:top-full before:-translate-x-1/2 before:border-[5px]
        before:border-b-transparent before:border-l-transparent before:border-r-transparent before:border-t-black
        before:content-[''] group-hover/tooltip:visible group-hover/tooltip:opacity-100 ${
          styles ? styles : ''
        }`}
    >
      {text}
    </span>
  );
}

export default Tooltip;
