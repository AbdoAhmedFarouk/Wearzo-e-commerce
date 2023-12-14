import { MdKeyboardArrowDown } from 'react-icons/md';

// eslint-disable-next-line react/prop-types
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
