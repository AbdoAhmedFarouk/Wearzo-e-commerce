import { PropTypes } from 'prop-types';

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  yDirection: PropTypes.string,
  xDirection: PropTypes.string,
  border: PropTypes.string,
  fontSize: PropTypes.string,
  shadow: PropTypes.string,
  position: PropTypes.string,
  children: PropTypes.node,
};

function DropdownMenu({
  children,
  isOpen,
  fontSize,
  xDirection,
  yDirection,
  height,
  width,
  shadow,
  position,
  padding,
  border,
}) {
  return (
    <>
      {isOpen ? (
        <div
          className={`visible ${position ? position : 'absolute'} ${
            xDirection ? xDirection : ''
          } ${yDirection ? yDirection : ''} z-[1200]
              ${height && height} ${width ? width : ''} overflow-hidden ${
                border ? border : 'border-t-2 border-thirdColor'
              } bg-white ${
                padding ? padding : 'py-[5px]'
              } text-secondaryColor opacity-100
              ${shadow ? shadow : ''} duration-500`}
        >
          <ul
            className={`${
              fontSize ? fontSize : ''
            } overflow-hidden font-normal`}
          >
            {children}
          </ul>
        </div>
      ) : (
        <div
          className={`invisible ${position ? position : 'absolute'} ${
            xDirection ? xDirection : ''
          } ${yDirection ? yDirection : ''} z-[1200] h-0 ${
            width ? width : ''
          } overflow-hidden 
          ${padding ? padding : ''}
          ${
            border ? border : 'border-t-2 border-thirdColor'
          } bg-white text-secondaryColor opacity-0
               ${shadow ? shadow : ''} duration-500 
              `}
        >
          <ul
            className={`${
              fontSize ? fontSize : ''
            } overflow-hidden font-normal`}
          >
            {children}
          </ul>
        </div>
      )}
    </>
  );
}

export default DropdownMenu;
