import { PropTypes } from 'prop-types';

SectionTag.propTypes = {
  styles: PropTypes.string,
  children: PropTypes.node,
};

function SectionTag({ children, styles }) {
  return <section className={`${styles ? styles : ''}`}>{children}</section>;
}

export default SectionTag;
