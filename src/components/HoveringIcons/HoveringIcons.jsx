import { PropTypes } from 'prop-types';

function HoveringIcons({ styles, children, onClick }) {
  return (
    <div className={`${styles ? styles : ''}`} onClick={onClick && onClick}>
      {children}
    </div>
  );
}

HoveringIcons.propTypes = {
  children: PropTypes.array,
  styles: PropTypes.string,
  onClick: PropTypes.func,
};

export default HoveringIcons;
