/* eslint-disable react/prop-types */
function HoveringIcons({ styles, children }) {
  return <div className={`${styles ? styles : ''}`}>{children}</div>;
}

export default HoveringIcons;
