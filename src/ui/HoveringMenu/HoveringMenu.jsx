function HoveringMenu({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  top,
  // eslint-disable-next-line react/prop-types
  zIndex,
  // eslint-disable-next-line react/prop-types
  width,
  // eslint-disable-next-line react/prop-types
  border,
  // eslint-disable-next-line react/prop-types
  shadow,
  // eslint-disable-next-line react/prop-types
  onHover,
  // eslint-disable-next-line react/prop-types
  transition,
  // eslint-disable-next-line react/prop-types
  padding,
  // eslint-disable-next-line react/prop-types
  font,
  // eslint-disable-next-line react/prop-types
  cursor,
  // eslint-disable-next-line react/prop-types
  display,
  // eslint-disable-next-line react/prop-types
  itemsCenter,
  // eslint-disable-next-line react/prop-types
  translate,
  // eslint-disable-next-line react/prop-types
  left,
}) {
  return (
    <div
      className={`${top} ${zIndex} ${width} ${border} ${shadow} ${onHover} ${transition}
        ${padding} ${font} ${cursor} ${display} ${itemsCenter} ${translate} ${left}
        invisible absolute bg-white opacity-0 duration-500
        group-hover:visible group-hover:opacity-100`}
    >
      {children}
    </div>
  );
}

export default HoveringMenu;
