import { PropTypes } from 'prop-types';

function Container({ children, styles }) {
  return (
    <div className={`my-container ${styles ? styles : ''}`}>{children}</div>
  );
}

Container.propTypes = {
  styles: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
