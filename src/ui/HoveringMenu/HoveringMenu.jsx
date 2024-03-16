import { PropTypes } from 'prop-types';

HoveringMenu.propTypes = {
  top: PropTypes.string,
  zIndex: PropTypes.string,
  width: PropTypes.string,
  left: PropTypes.string,
  onHover: PropTypes.string,
  shadow: PropTypes.string,
  border: PropTypes.string,
  transition: PropTypes.string,
  padding: PropTypes.string,
  font: PropTypes.string,
  cursor: PropTypes.string,
  display: PropTypes.string,
  translate: PropTypes.string,
  itemsCenter: PropTypes.string,
  children: PropTypes.node,
};

function HoveringMenu({
  children,
  top,
  zIndex,
  width,
  border,
  shadow,
  onHover,
  transition,
  padding,
  font,
  cursor,
  display,
  itemsCenter,
  translate,
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
