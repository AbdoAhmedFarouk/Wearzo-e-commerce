function DropdownMenu({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  fontSize,
  // eslint-disable-next-line react/prop-types
  xDirection,
  // eslint-disable-next-line react/prop-types
  yDirection,
  // eslint-disable-next-line react/prop-types
  height,
  // eslint-disable-next-line react/prop-types
  width,
  // eslint-disable-next-line react/prop-types
  shadow,
  // eslint-disable-next-line react/prop-types
  position,
  // eslint-disable-next-line react/prop-types
  padding,
  // eslint-disable-next-line react/prop-types
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
