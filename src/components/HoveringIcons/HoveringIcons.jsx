import { PropTypes } from 'prop-types';

function HoveringIcons({ styles, children }) {
  return <div className={`${styles ? styles : ''}`}>{children}</div>;
}

HoveringIcons.propTypes = {
  children: PropTypes.array,
  styles: PropTypes.string,
};

export default HoveringIcons;
