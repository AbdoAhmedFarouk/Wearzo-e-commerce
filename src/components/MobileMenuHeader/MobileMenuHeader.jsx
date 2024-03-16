import { PropTypes } from 'prop-types';

import { MdKeyboardArrowDown } from 'react-icons/md';

MobileMenuHeader.propTypes = {
  styles: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  spanStyles: PropTypes.string,
  isOpen: PropTypes.bool,
};

function MobileMenuHeader({ children, isOpen, onClick, styles, spanStyles }) {
  return (
    <div className={`${styles ? styles : ''}`} onClick={onClick}>
      {children}
      <span
        className={`${spanStyles ? spanStyles : ''}
          ${isOpen && '-rotate-180'}`}
      >
        <MdKeyboardArrowDown />
      </span>
    </div>
  );
}

export default MobileMenuHeader;
